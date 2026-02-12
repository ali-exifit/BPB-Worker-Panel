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

// ---- BUILD MODE DETECTION ----
const isRawBuild = process.env.BUILD_RAW === 'true' || process.env.NODE_ENV === 'development';
const mangleMode = (process.env.NODE_ENV || 'mangle') === 'mangle';
const inputRawPath = process.env.INPUT_RAW_WORKER_PATH;   // NEW: path to a raw worker file
// --------------------------------

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

// ----------------------------------------------------------------------
//  Asset processing (only used when building from source)
// ----------------------------------------------------------------------
async function processHtmlPages() {
    // ... (unchanged, same as your original script) ...
}

function generateJunkCode() {
    // ... (unchanged) ...
}

// ----------------------------------------------------------------------
//  Post‑processing: minify, junk, obfuscate
// ----------------------------------------------------------------------
async function postProcess(code) {
    if (isRawBuild) {
        // Raw mode: no processing at all
        return code;
    }

    // 1. Minify with Terser
    const minified = await jsMinify(code, {
        module: true,
        output: { comments: false },
        compress: { dead_code: false, unused: false }
    });
    console.log(`${success} Worker minified successfuly!`);
    let processed = minified.code;

    // 2. Junk injection (only in mangle mode)
    if (mangleMode) {
        const junkCode = generateJunkCode();
        const withJunk = await jsMinify(junkCode + processed, {
            module: true,
            output: { comments: false },
            compress: { dead_code: false, unused: false }
        });
        processed = withJunk.code;
        console.log(`${success} Junk code injected`);
    }

    // 3. Obfuscation (only in obfuscate mode)
    if (!mangleMode && process.env.NODE_ENV === 'obfuscate') {
        const obfuscationResult = obfs.obfuscate(processed, {
            stringArrayThreshold: 1,
            stringArrayEncoding: ["rc4"],
            numbersToExpressions: true,
            transformObjectKeys: true,
            renameGlobals: true,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.2,
            target: "browser"
        });
        processed = obfuscationResult.getObfuscatedCode();
        console.log(`${success} Worker obfuscated successfuly!`);
    }

    return processed;
}

// ----------------------------------------------------------------------
//  Main build
// ----------------------------------------------------------------------
async function buildWorker() {
    let finalCode;

    // ----------------------------------------------
    //  MODE 1: Build from a pre‑built raw worker
    // ----------------------------------------------
    if (inputRawPath) {
        console.log(`${success} Using raw worker from ${inputRawPath}`);
        const rawCode = readFileSync(inputRawPath, 'utf8');
        // Remove the leading build info comment? Not necessary, but keep it clean.
        // We'll just post‑process the whole file.
        finalCode = await postProcess(rawCode);
    }
    // ----------------------------------------------
    //  MODE 2: Full build from source (assets + esbuild)
    // ----------------------------------------------
    else {
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
        finalCode = await postProcess(code.outputFiles[0].text);
    }

    // ----------------------------------------------
    //  Write output files (worker.js + worker.zip)
    // ----------------------------------------------
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
