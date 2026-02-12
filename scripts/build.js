import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname as pathDirname } from 'path';
import { fileURLToPath } from 'url';
import { build } from 'esbuild';
import { globSync } from 'glob';
import { minify as jsMinify } from 'terser';
import { minify as htmlMinify } from 'html-minifier';
import JSZip from "jszip";
import obfs from 'javascript-obfuscator';
import pkg from '../package.json' with { type: 'json' };
import { gzipSync } from 'zlib';

// ---- RAW BUILD DETECTION ----
const isRawBuild = process.env.BUILD_RAW === 'true' || process.env.NODE_ENV === 'development';
// -----------------------------

const env = process.env.NODE_ENV || 'mangle';
const mangleMode = env === 'mangle';

const __filename = fileURLToPath(import.meta.url);
const __dirname = pathDirname(__filename);

const ASSET_PATH = join(__dirname, '../src/assets');
const DIST_PATH = join(__dirname, '../dist/');

const green = '\x1b[32m';
const red = '\x1b[31m';
const reset = '\x1b[0m';

const success = `${green}✔${reset}`;
const failure = `${red}✗${reset}`;

const version = pkg.version;

async function processHtmlPages() {
    const indexFiles = globSync('**/index.html', { cwd: ASSET_PATH });
    const result = {};

    for (const relativeIndexPath of indexFiles) {
        const dir = pathDirname(relativeIndexPath);
        const base = (file) => join(ASSET_PATH, dir, file);

        const indexHtml = readFileSync(base('index.html'), 'utf8');
        let finalHtml = indexHtml.replaceAll('__VERSION__', version);

        if (dir !== 'error') {
            const styleCode = readFileSync(base('style.css'), 'utf8');
            const scriptCode = readFileSync(base('script.js'), 'utf8');

            // ---- RAW MODE: skip minification of CSS/JS ----
            const finalStyle = isRawBuild
                ? styleCode
                : styleCode;  // CSS is not minified in either mode (no CSS minifier used)
            const finalScript = isRawBuild
                ? scriptCode
                : (await jsMinify(scriptCode)).code;
            // -------------------------------------------------

            finalHtml = finalHtml
                .replaceAll('__STYLE__', `<style>${finalStyle}</style>`)
                .replaceAll('__SCRIPT__', `<script>${finalScript}</script>`);
        }

        // ---- RAW MODE: skip HTML minification ----
        const htmlToCompress = isRawBuild
            ? finalHtml
            : htmlMinify(finalHtml, {
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                minifyCSS: true
            });
        // -------------------------------------------

        const compressed = gzipSync(htmlToCompress);
        const htmlBase64 = compressed.toString('base64');
        result[dir] = JSON.stringify(htmlBase64);
    }

    console.log(`${success} Assets bundled successfuly!`);
    return result;
}

function generateJunkCode() {
    // Only used in non‑raw builds
    const minVars = 50, maxVars = 500;
    const minFuncs = 50, maxFuncs = 500;

    const varCount = Math.floor(Math.random() * (maxVars - minVars + 1)) + minVars;
    const funcCount = Math.floor(Math.random() * (maxFuncs - minFuncs + 1)) + minFuncs;

    const junkVars = Array.from({ length: varCount }, (_, i) => {
        const varName = `__junk_${Math.random().toString(36).substring(2, 10)}_${i}`;
        const value = Math.floor(Math.random() * 100000);
        return `let ${varName} = ${value};`;
    }).join('\n');

    const junkFuncs = Array.from({ length: funcCount }, (_, i) => {
        const funcName = `__junkFunc_${Math.random().toString(36).substring(2, 10)}_${i}`;
        return `function ${funcName}() { return ${Math.floor(Math.random() * 1000)}; }`;
    }).join('\n');

    return `${junkVars}\n${junkFuncs}\n`;
}

async function buildWorker() {

    const htmls = await processHtmlPages();
    const faviconBuffer = readFileSync('./src/assets/favicon.ico');
    const faviconBase64 = faviconBuffer.toString('base64');

    const code = await build({
        entryPoints: [join(__dirname, '../src/worker.ts')],
        bundle: true,
        format: 'esm',
        write: false,
        external: ['cloudflare:sockets'],
        platform: 'browser',
        target: 'esnext',
        loader: { '.ts': 'ts' },
        define: {
            __PANEL_HTML_CONTENT__: htmls['panel'] ?? '""',
            __LOGIN_HTML_CONTENT__: htmls['login'] ?? '""',
            __ERROR_HTML_CONTENT__: htmls['error'] ?? '""',
            __SECRETS_HTML_CONTENT__: htmls['secrets'] ?? '""',
            __ICON__: JSON.stringify(faviconBase64),
            __VERSION__: JSON.stringify(version)
        }
    });

    console.log(`${success} Worker built successfuly!`);

    let finalCode;

    // ---- RAW MODE: skip all post‑processing ----
    if (isRawBuild) {
        // Use the exact esbuild output (no minify, no obfuscation, no junk)
        finalCode = code.outputFiles[0].text;
        console.log(`${success} Worker (raw) – no minification/obfuscation applied`);
    } else {
        // Original minification/obfuscation logic
        const minifyCode = async (code) => {
            const minified = await jsMinify(code, {
                module: true,
                output: { comments: false },
                compress: { dead_code: false, unused: false }
            });
            console.log(`${success} Worker minified successfuly!`);
            return minified;
        };

        if (mangleMode) {
            const junkCode = generateJunkCode();
            const minifiedCode = await minifyCode(junkCode + code.outputFiles[0].text);
            finalCode = minifiedCode.code;
        } else {
            const minifiedCode = await minifyCode(code.outputFiles[0].text);
            const obfuscationResult = obfs.obfuscate(minifiedCode.code, {
                stringArrayThreshold: 1,
                stringArrayEncoding: ["rc4"],
                numbersToExpressions: true,
                transformObjectKeys: true,
                renameGlobals: true,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 0.2,
                target: "browser"
            });
            console.log(`${success} Worker obfuscated successfuly!`);
            finalCode = obfuscationResult.getObfuscatedCode();
        }
    }
    // ---------------------------------------------

    const buildTimestamp = new Date().toISOString();
    const buildInfo = `// Build: ${buildTimestamp}\n`;
    const worker = `${buildInfo}// @ts-nocheck\n${finalCode}`;
    mkdirSync(DIST_PATH, { recursive: true });
    writeFileSync('./dist/worker.js', worker, 'utf8');

    const zip = new JSZip();
    zip.file('_worker.js', worker);
    zip.generateAsync({
        type: 'nodebuffer',
        compression: 'DEFLATE'
    }).then(nodebuffer => writeFileSync('./dist/worker.zip', nodebuffer));

    console.log(`${success} Done!`);
}

buildWorker().catch(err => {
    console.error(`${failure} Build failed:`, err);
    process.exit(1);
});
