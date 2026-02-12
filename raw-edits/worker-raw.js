// Build: 2026-02-12T16:12:35.466Z
// @ts-nocheck
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jszip/dist/jszip.min.js
var require_jszip_min = __commonJS({
  "node_modules/jszip/dist/jszip.min.js"(exports, module) {
    !(function(e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
      }
    })(function() {
      return (function s(a, o, h) {
        function u(r, e2) {
          if (!o[r]) {
            if (!a[r]) {
              var t = "function" == typeof __require && __require;
              if (!e2 && t) return t(r, true);
              if (l) return l(r, true);
              var n = new Error("Cannot find module '" + r + "'");
              throw n.code = "MODULE_NOT_FOUND", n;
            }
            var i = o[r] = { exports: {} };
            a[r][0].call(i.exports, function(e3) {
              var t2 = a[r][1][e3];
              return u(t2 || e3);
            }, i, i.exports, s, a, o, h);
          }
          return o[r].exports;
        }
        for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
        return u;
      })({ 1: [function(e, t, r) {
        "use strict";
        var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        r.encode = function(e2) {
          for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
          return h.join("");
        }, r.decode = function(e2) {
          var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
          if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
          var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
          for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
          return l;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
        "use strict";
        var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
        function o(e2, t2, r2, n2, i2) {
          this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
        }
        o.prototype = { getContentWorker: function() {
          var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
          return e2.on("end", function() {
            if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), e2;
        }, getCompressedWorker: function() {
          return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, o.createWorkerFrom = function(e2, t2, r2) {
          return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
        }, t.exports = o;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
        "use strict";
        var n = e("./stream/GenericWorker");
        r.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, r.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
        "use strict";
        var n = e("./utils");
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2) {
          return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
            var i = o, s = n2 + r2;
            e3 ^= -1;
            for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
            return -1 ^ e3;
          })(0 | t2, e2, e2.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, t, r) {
        "use strict";
        r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
      }, {}], 6: [function(e, t, r) {
        "use strict";
        var n = null;
        n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
        function h(e2, t2) {
          a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
        }
        r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
          this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
        }, h.prototype.flush = function() {
          a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
        }, h.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this._pako = null;
        }, h.prototype._createPako = function() {
          this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
          var t2 = this;
          this._pako.onData = function(e2) {
            t2.push({ data: e2, meta: t2.meta });
          };
        }, r.compressWorker = function(e2) {
          return new h("Deflate", e2);
        }, r.uncompressWorker = function() {
          return new h("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
        "use strict";
        function A(e2, t2) {
          var r2, n2 = "";
          for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
          return n2;
        }
        function n(e2, t2, r2, n2, i2, s2) {
          var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
          var S = 0;
          t2 && (S |= 8), l || !_ && !g || (S |= 2048);
          var z = 0, C = 0;
          w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
            var r3 = e3;
            return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
          })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
            return 63 & (e3 || 0);
          })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
          var E = "";
          return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
        }
        var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
        function s(e2, t2, r2, n2) {
          i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        I.inherits(s, i), s.prototype.push = function(e2) {
          var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
          this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
        }, s.prototype.openedSource = function(e2) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
          var t2 = this.streamFiles && !e2.file.dir;
          if (t2) {
            var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: r2.fileRecord, meta: { percent: 0 } });
          } else this.accumulate = true;
        }, s.prototype.closedSource = function(e2) {
          this.accumulate = false;
          var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
            return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
          })(e2), meta: { percent: 100 } });
          else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, s.prototype.flush = function() {
          for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
          var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
            var s2 = I.transformTo("string", i2(n3));
            return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
          })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
          this.push({ data: n2, meta: { percent: 100 } });
        }, s.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, s.prototype.registerPrevious = function(e2) {
          this._sources.push(e2);
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
        }, s.prototype.error = function(e2) {
          var t2 = this._sources;
          if (!i.prototype.error.call(this, e2)) return false;
          for (var r2 = 0; r2 < t2.length; r2++) try {
            t2[r2].error(e2);
          } catch (e3) {
          }
          return true;
        }, s.prototype.lock = function() {
          i.prototype.lock.call(this);
          for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
        }, t.exports = s;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
        "use strict";
        var u = e("../compressions"), n = e("./ZipFileWorker");
        r.generateWorker = function(e2, a, t2) {
          var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
          try {
            e2.forEach(function(e3, t3) {
              h++;
              var r2 = (function(e4, t4) {
                var r3 = e4 || t4, n3 = u[r3];
                if (!n3) throw new Error(r3 + " is not a valid compression method !");
                return n3;
              })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
              t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
            }), o.entriesCount = h;
          } catch (e3) {
            o.error(e3);
          }
          return o;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
        "use strict";
        function n() {
          if (!(this instanceof n)) return new n();
          if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var e2 = new n();
            for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
            return e2;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
          return new n().loadAsync(e2, t2);
        }, n.external = e("./external"), t.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
        "use strict";
        var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
        function f(n2) {
          return new i.Promise(function(e2, t2) {
            var r2 = n2.decompressed.getContentWorker().pipe(new a());
            r2.on("error", function(e3) {
              t2(e3);
            }).on("end", function() {
              r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
            }).resume();
          });
        }
        t.exports = function(e2, o) {
          var h = this;
          return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
            var t2 = new s(o);
            return t2.load(e3), t2;
          }).then(function(e3) {
            var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
            if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
            return i.Promise.all(t2);
          }).then(function(e3) {
            for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
              var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
              h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
            }
            return t2.zipComment.length && (h.comment = t2.zipComment), h;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../stream/GenericWorker");
        function s(e2, t2) {
          i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
        }
        n.inherits(s, i), s.prototype._bindStream = function(e2) {
          var t2 = this;
          (this._stream = e2).pause(), e2.on("data", function(e3) {
            t2.push({ data: e3, meta: { percent: 0 } });
          }).on("error", function(e3) {
            t2.isPaused ? this.generatedError = e3 : t2.error(e3);
          }).on("end", function() {
            t2.isPaused ? t2._upstreamEnded = true : t2.end();
          });
        }, s.prototype.pause = function() {
          return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
        }, t.exports = s;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
        "use strict";
        var i = e("readable-stream").Readable;
        function n(e2, t2, r2) {
          i.call(this, t2), this._helper = e2;
          var n2 = this;
          e2.on("data", function(e3, t3) {
            n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
          }).on("error", function(e3) {
            n2.emit("error", e3);
          }).on("end", function() {
            n2.push(null);
          });
        }
        e("../utils").inherits(n, i), n.prototype._read = function() {
          this._helper.resume();
        }, t.exports = n;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
        "use strict";
        t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
          if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
          return new Buffer(e2, t2);
        }, allocBuffer: function(e2) {
          if (Buffer.alloc) return Buffer.alloc(e2);
          var t2 = new Buffer(e2);
          return t2.fill(0), t2;
        }, isBuffer: function(e2) {
          return Buffer.isBuffer(e2);
        }, isStream: function(e2) {
          return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
        } };
      }, {}], 15: [function(e, t, r) {
        "use strict";
        function s(e2, t2, r2) {
          var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
          s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
          var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
          r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
          var o2 = null;
          o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
          var h2 = new d(e2, o2, s2);
          this.files[e2] = h2;
        }
        var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
          "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
          var t2 = e2.lastIndexOf("/");
          return 0 < t2 ? e2.substring(0, t2) : "";
        }, g = function(e2) {
          return "/" !== e2.slice(-1) && (e2 += "/"), e2;
        }, b = function(e2, t2) {
          return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
        };
        function h(e2) {
          return "[object RegExp]" === Object.prototype.toString.call(e2);
        }
        var n = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(e2) {
          var t2, r2, n2;
          for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
        }, filter: function(r2) {
          var n2 = [];
          return this.forEach(function(e2, t2) {
            r2(e2, t2) && n2.push(t2);
          }), n2;
        }, file: function(e2, t2, r2) {
          if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
          if (h(e2)) {
            var n2 = e2;
            return this.filter(function(e3, t3) {
              return !t3.dir && n2.test(e3);
            });
          }
          var i2 = this.files[this.root + e2];
          return i2 && !i2.dir ? i2 : null;
        }, folder: function(r2) {
          if (!r2) return this;
          if (h(r2)) return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
          var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
          return n2.root = t2.name, n2;
        }, remove: function(r2) {
          r2 = this.root + r2;
          var e2 = this.files[r2];
          if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
          else for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(e2) {
          var t2, r2 = {};
          try {
            if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
            u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
            var n2 = r2.comment || this.comment || "";
            t2 = o.generateWorker(this, r2, n2);
          } catch (e3) {
            (t2 = new l("error")).error(e3);
          }
          return new a(t2, r2.type || "string", r2.mimeType);
        }, generateAsync: function(e2, t2) {
          return this.generateInternalStream(e2).accumulate(t2);
        }, generateNodeStream: function(e2, t2) {
          return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
        } };
        t.exports = n;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
        "use strict";
        t.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
          for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data[this.zero + e2];
        }, i.prototype.lastIndexOfSignature = function(e2) {
          for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
          return -1;
        }, i.prototype.readAndCheckSignature = function(e2) {
          var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
          return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
        }, i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return [];
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
        "use strict";
        var n = e("../utils");
        function i(e2) {
          this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
        }
        i.prototype = { checkOffset: function(e2) {
          this.checkIndex(this.index + e2);
        }, checkIndex: function(e2) {
          if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
        }, setIndex: function(e2) {
          this.checkIndex(e2), this.index = e2;
        }, skip: function(e2) {
          this.setIndex(this.index + e2);
        }, byteAt: function() {
        }, readInt: function(e2) {
          var t2, r2 = 0;
          for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
          return this.index += e2, r2;
        }, readString: function(e2) {
          return n.transformTo("string", this.readData(e2));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var e2 = this.readInt(4);
          return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
        } }, t.exports = i;
      }, { "../utils": 32 }], 19: [function(e, t, r) {
        "use strict";
        var n = e("./Uint8ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
        "use strict";
        var n = e("./DataReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
          return this.data.charCodeAt(this.zero + e2);
        }, i.prototype.lastIndexOfSignature = function(e2) {
          return this.data.lastIndexOf(e2) - this.zero;
        }, i.prototype.readAndCheckSignature = function(e2) {
          return e2 === this.readData(4);
        }, i.prototype.readData = function(e2) {
          this.checkOffset(e2);
          var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
        "use strict";
        var n = e("./ArrayReader");
        function i(e2) {
          n.call(this, e2);
        }
        e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
          if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
          var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
          return this.index += e2, t2;
        }, t.exports = i;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
        t.exports = function(e2) {
          var t2 = n.getTypeOf(e2);
          return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
        "use strict";
        r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../utils");
        function s(e2) {
          n.call(this, "ConvertWorker to " + e2), this.destType = e2;
        }
        i.inherits(s, n), s.prototype.processChunk = function(e2) {
          this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
        "use strict";
        var n = e("./GenericWorker"), i = e("../crc32");
        function s() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
          this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
        }, t.exports = s;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
        }
        n.inherits(s, i), s.prototype.processChunk = function(e2) {
          if (e2) {
            var t2 = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = t2 + e2.data.length;
          }
          i.prototype.processChunk.call(this, e2);
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
        "use strict";
        var n = e("../utils"), i = e("./GenericWorker");
        function s(e2) {
          i.call(this, "DataWorker");
          var t2 = this;
          this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
            t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
          }, function(e3) {
            t2.error(e3);
          });
        }
        n.inherits(s, i), s.prototype.cleanUp = function() {
          i.prototype.cleanUp.call(this), this.data = null;
        }, s.prototype.resume = function() {
          return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
        }, s.prototype._tickAndRepeat = function() {
          this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
        }, s.prototype._tick = function() {
          if (this.isPaused || this.isFinished) return false;
          var e2 = null, t2 = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max) return this.end();
          switch (this.type) {
            case "string":
              e2 = this.data.substring(this.index, t2);
              break;
            case "uint8array":
              e2 = this.data.subarray(this.index, t2);
              break;
            case "array":
            case "nodebuffer":
              e2 = this.data.slice(this.index, t2);
          }
          return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, t.exports = s;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
        "use strict";
        function n(e2) {
          this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(e2) {
          this.emit("data", e2);
        }, end: function() {
          if (this.isFinished) return false;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = true;
          } catch (e2) {
            this.emit("error", e2);
          }
          return true;
        }, error: function(e2) {
          return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
        }, on: function(e2, t2) {
          return this._listeners[e2].push(t2), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(e2, t2) {
          if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
        }, pipe: function(e2) {
          return e2.registerPrevious(this);
        }, registerPrevious: function(e2) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
          var t2 = this;
          return e2.on("data", function(e3) {
            t2.processChunk(e3);
          }), e2.on("end", function() {
            t2.end();
          }), e2.on("error", function(e3) {
            t2.error(e3);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
        }, resume: function() {
          if (!this.isPaused || this.isFinished) return false;
          var e2 = this.isPaused = false;
          return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
        }, flush: function() {
        }, processChunk: function(e2) {
          this.push(e2);
        }, withStreamInfo: function(e2, t2) {
          return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
        }, lock: function() {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = true, this.previous && this.previous.lock();
        }, toString: function() {
          var e2 = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + e2 : e2;
        } }, t.exports = n;
      }, {}], 29: [function(e, t, r) {
        "use strict";
        var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
        if (n.nodestream) try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
        function l(e2, o2) {
          return new a.Promise(function(t2, r2) {
            var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
            e2.on("data", function(e3, t3) {
              n2.push(e3), o2 && o2(t3);
            }).on("error", function(e3) {
              n2 = [], r2(e3);
            }).on("end", function() {
              try {
                var e3 = (function(e4, t3, r3) {
                  switch (e4) {
                    case "blob":
                      return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                    case "base64":
                      return u.encode(t3);
                    default:
                      return h.transformTo(e4, t3);
                  }
                })(s2, (function(e4, t3) {
                  var r3, n3 = 0, i3 = null, s3 = 0;
                  for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                  switch (e4) {
                    case "string":
                      return t3.join("");
                    case "array":
                      return Array.prototype.concat.apply([], t3);
                    case "uint8array":
                      for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                      return i3;
                    case "nodebuffer":
                      return Buffer.concat(t3);
                    default:
                      throw new Error("concat : unsupported type '" + e4 + "'");
                  }
                })(i2, n2), a2);
                t2(e3);
              } catch (e4) {
                r2(e4);
              }
              n2 = [];
            }).resume();
          });
        }
        function f(e2, t2, r2) {
          var n2 = t2;
          switch (t2) {
            case "blob":
            case "arraybuffer":
              n2 = "uint8array";
              break;
            case "base64":
              n2 = "string";
          }
          try {
            this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
          } catch (e3) {
            this._worker = new s("error"), this._worker.error(e3);
          }
        }
        f.prototype = { accumulate: function(e2) {
          return l(this, e2);
        }, on: function(e2, t2) {
          var r2 = this;
          return "data" === e2 ? this._worker.on(e2, function(e3) {
            t2.call(r2, e3.data, e3.meta);
          }) : this._worker.on(e2, function() {
            h.delay(t2, arguments, r2);
          }), this;
        }, resume: function() {
          return h.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(e2) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
        } }, t.exports = f;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
        "use strict";
        if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
        else {
          var n = new ArrayBuffer(0);
          try {
            r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
          } catch (e2) {
            try {
              var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
            } catch (e3) {
              r.blob = false;
            }
          }
        }
        try {
          r.nodestream = !!e("readable-stream").Readable;
        } catch (e2) {
          r.nodestream = false;
        }
      }, { "readable-stream": 16 }], 31: [function(e, t, s) {
        "use strict";
        for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
        u[254] = u[254] = 1;
        function a() {
          n.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function l() {
          n.call(this, "utf-8 encode");
        }
        s.utf8encode = function(e2) {
          return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
            for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          })(e2);
        }, s.utf8decode = function(e2) {
          return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
            var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
            for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
            else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
            return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
          })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
        }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
          var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
          if (this.leftOver && this.leftOver.length) {
            if (h.uint8array) {
              var r2 = t2;
              (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
            } else t2 = this.leftOver.concat(t2);
            this.leftOver = null;
          }
          var n2 = (function(e3, t3) {
            var r3;
            for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
            return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
          })(t2), i2 = t2;
          n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
        }, a.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
          this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
        }, s.Utf8EncodeWorker = l;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
        "use strict";
        var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
        function n(e2) {
          return e2;
        }
        function l(e2, t2) {
          for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
          return t2;
        }
        e("setimmediate"), a.newBlob = function(t2, r2) {
          a.checkSupport("blob");
          try {
            return new Blob([t2], { type: r2 });
          } catch (e2) {
            try {
              var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return n2.append(t2), n2.getBlob(r2);
            } catch (e3) {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var i = { stringifyByChunk: function(e2, t2, r2) {
          var n2 = [], i2 = 0, s2 = e2.length;
          if (s2 <= r2) return String.fromCharCode.apply(null, e2);
          for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
          return n2.join("");
        }, stringifyByChar: function(e2) {
          for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
          return t2;
        }, applyCanBeUsed: { uint8array: (function() {
          try {
            return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
          } catch (e2) {
            return false;
          }
        })(), nodebuffer: (function() {
          try {
            return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
          } catch (e2) {
            return false;
          }
        })() } };
        function s(e2) {
          var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
          if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
            return i.stringifyByChunk(e2, r2, t2);
          } catch (e3) {
            t2 = Math.floor(t2 / 2);
          }
          return i.stringifyByChar(e2);
        }
        function f(e2, t2) {
          for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
          return t2;
        }
        a.applyFromCharCode = s;
        var c = {};
        c.string = { string: n, array: function(e2) {
          return l(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.string.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return l(e2, new Uint8Array(e2.length));
        }, nodebuffer: function(e2) {
          return l(e2, r.allocBuffer(e2.length));
        } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
          return new Uint8Array(e2).buffer;
        }, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.arraybuffer = { string: function(e2) {
          return s(new Uint8Array(e2));
        }, array: function(e2) {
          return f(new Uint8Array(e2), new Array(e2.byteLength));
        }, arraybuffer: n, uint8array: function(e2) {
          return new Uint8Array(e2);
        }, nodebuffer: function(e2) {
          return r.newBufferFrom(new Uint8Array(e2));
        } }, c.uint8array = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return e2.buffer;
        }, uint8array: n, nodebuffer: function(e2) {
          return r.newBufferFrom(e2);
        } }, c.nodebuffer = { string: s, array: function(e2) {
          return f(e2, new Array(e2.length));
        }, arraybuffer: function(e2) {
          return c.nodebuffer.uint8array(e2).buffer;
        }, uint8array: function(e2) {
          return f(e2, new Uint8Array(e2.length));
        }, nodebuffer: n }, a.transformTo = function(e2, t2) {
          if (t2 = t2 || "", !e2) return t2;
          a.checkSupport(e2);
          var r2 = a.getTypeOf(t2);
          return c[r2][e2](t2);
        }, a.resolve = function(e2) {
          for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = t2[n2];
            "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
          }
          return r2.join("/");
        }, a.getTypeOf = function(e2) {
          return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, a.checkSupport = function(e2) {
          if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
        }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
          var t2, r2, n2 = "";
          for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
          return n2;
        }, a.delay = function(e2, t2, r2) {
          setImmediate(function() {
            e2.apply(r2 || null, t2 || []);
          });
        }, a.inherits = function(e2, t2) {
          function r2() {
          }
          r2.prototype = t2.prototype, e2.prototype = new r2();
        }, a.extend = function() {
          var e2, t2, r2 = {};
          for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
          return r2;
        }, a.prepareContent = function(r2, e2, n2, i2, s2) {
          return u.Promise.resolve(e2).then(function(n3) {
            return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
              var e3 = new FileReader();
              e3.onload = function(e4) {
                t2(e4.target.result);
              }, e3.onerror = function(e4) {
                r3(e4.target.error);
              }, e3.readAsArrayBuffer(n3);
            }) : n3;
          }).then(function(e3) {
            var t2 = a.getTypeOf(e3);
            return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
              return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
            })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
        function h(e2) {
          this.files = [], this.loadOptions = e2;
        }
        h.prototype = { checkSignature: function(e2) {
          if (!this.reader.readAndCheckSignature(e2)) {
            this.reader.index -= 4;
            var t2 = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
          }
        }, isSignature: function(e2, t2) {
          var r2 = this.reader.index;
          this.reader.setIndex(e2);
          var n2 = this.reader.readString(4) === t2;
          return this.reader.setIndex(r2), n2;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
          this.zipComment = this.loadOptions.decodeFileName(r2);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var e2, t2;
          for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
        }, readCentralDir: function() {
          var e2;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(e2);
          var t2 = e2;
          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
            if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var r2 = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
          var n2 = t2 - r2;
          if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
          else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
        }, prepareReader: function(e2) {
          this.reader = n(e2);
        }, load: function(e2) {
          this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, t.exports = h;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
        "use strict";
        var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
        function l(e2, t2) {
          this.options = e2, this.loadOptions = t2;
        }
        l.prototype = { isEncrypted: function() {
          return 1 == (1 & this.bitFlag);
        }, useUTF8: function() {
          return 2048 == (2048 & this.bitFlag);
        }, readLocalPart: function(e2) {
          var t2, r2;
          if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (t2 = (function(e3) {
            for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
            return null;
          })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
        }, readCentralPart: function(e2) {
          this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
          var t2 = e2.readInt(2);
          if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e2 = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var e2 = n(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
          }
        }, readExtraFields: function(e2) {
          var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
          e2.setIndex(i2);
        }, handleUTF8: function() {
          var e2 = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
          else {
            var t2 = this.findExtraFieldUnicodePath();
            if (null !== t2) this.fileNameStr = t2;
            else {
              var r2 = s.transformTo(e2, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r2);
            }
            var n2 = this.findExtraFieldUnicodeComment();
            if (null !== n2) this.fileCommentStr = n2;
            else {
              var i2 = s.transformTo(e2, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(i2);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var e2 = this.extraFields[28789];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var e2 = this.extraFields[25461];
          if (e2) {
            var t2 = n(e2.value);
            return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
          }
          return null;
        } }, t.exports = l;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
        "use strict";
        function n(e2, t2, r2) {
          this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(e2) {
          var t2 = null, r2 = "string";
          try {
            if (!e2) throw new Error("No output type specified.");
            var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
            "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
            var i2 = !this._dataBinary;
            i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
          } catch (e3) {
            (t2 = new h("error")).error(e3);
          }
          return new s(t2, r2, "");
        }, async: function(e2, t2) {
          return this.internalStream(e2).accumulate(t2);
        }, nodeStream: function(e2, t2) {
          return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
        }, _compressWorker: function(e2, t2) {
          if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
          var r2 = this._decompressWorker();
          return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
        }, _decompressWorker: function() {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
        } };
        for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
        t.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
        (function(t2) {
          "use strict";
          var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
          if (e2) {
            var i = 0, s = new e2(u), a = t2.document.createTextNode("");
            s.observe(a, { characterData: true }), r = function() {
              a.data = i = ++i % 2;
            };
          } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
          else {
            var o = new t2.MessageChannel();
            o.port1.onmessage = u, r = function() {
              o.port2.postMessage(0);
            };
          }
          var h = [];
          function u() {
            var e3, t3;
            n = true;
            for (var r2 = h.length; r2; ) {
              for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
              r2 = h.length;
            }
            n = false;
          }
          l.exports = function(e3) {
            1 !== h.push(e3) || n || r();
          };
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}], 37: [function(e, t, r) {
        "use strict";
        var i = e("immediate");
        function u() {
        }
        var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
        function o(e2) {
          if ("function" != typeof e2) throw new TypeError("resolver must be a function");
          this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
        }
        function h(e2, t2, r2) {
          this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
        }
        function f(t2, r2, n2) {
          i(function() {
            var e2;
            try {
              e2 = r2(n2);
            } catch (e3) {
              return l.reject(t2, e3);
            }
            e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
          });
        }
        function c(e2) {
          var t2 = e2 && e2.then;
          if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
            t2.apply(e2, arguments);
          };
        }
        function d(t2, e2) {
          var r2 = false;
          function n2(e3) {
            r2 || (r2 = true, l.reject(t2, e3));
          }
          function i2(e3) {
            r2 || (r2 = true, l.resolve(t2, e3));
          }
          var s2 = p(function() {
            e2(i2, n2);
          });
          "error" === s2.status && n2(s2.value);
        }
        function p(e2, t2) {
          var r2 = {};
          try {
            r2.value = e2(t2), r2.status = "success";
          } catch (e3) {
            r2.status = "error", r2.value = e3;
          }
          return r2;
        }
        (t.exports = o).prototype.finally = function(t2) {
          if ("function" != typeof t2) return this;
          var r2 = this.constructor;
          return this.then(function(e2) {
            return r2.resolve(t2()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t2()).then(function() {
              throw e2;
            });
          });
        }, o.prototype.catch = function(e2) {
          return this.then(null, e2);
        }, o.prototype.then = function(e2, t2) {
          if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
          var r2 = new this.constructor(u);
          this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
          return r2;
        }, h.prototype.callFulfilled = function(e2) {
          l.resolve(this.promise, e2);
        }, h.prototype.otherCallFulfilled = function(e2) {
          f(this.promise, this.onFulfilled, e2);
        }, h.prototype.callRejected = function(e2) {
          l.reject(this.promise, e2);
        }, h.prototype.otherCallRejected = function(e2) {
          f(this.promise, this.onRejected, e2);
        }, l.resolve = function(e2, t2) {
          var r2 = p(c, t2);
          if ("error" === r2.status) return l.reject(e2, r2.value);
          var n2 = r2.value;
          if (n2) d(e2, n2);
          else {
            e2.state = a, e2.outcome = t2;
            for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
          }
          return e2;
        }, l.reject = function(e2, t2) {
          e2.state = s, e2.outcome = t2;
          for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
          return e2;
        }, o.resolve = function(e2) {
          if (e2 instanceof this) return e2;
          return l.resolve(new this(u), e2);
        }, o.reject = function(e2) {
          var t2 = new this(u);
          return l.reject(t2, e2);
        }, o.all = function(e2) {
          var r2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var n2 = e2.length, i2 = false;
          if (!n2) return this.resolve([]);
          var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
          for (; ++t2 < n2; ) h2(e2[t2], t2);
          return o2;
          function h2(e3, t3) {
            r2.resolve(e3).then(function(e4) {
              s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
            }, function(e4) {
              i2 || (i2 = true, l.reject(o2, e4));
            });
          }
        }, o.race = function(e2) {
          var t2 = this;
          if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
          var r2 = e2.length, n2 = false;
          if (!r2) return this.resolve([]);
          var i2 = -1, s2 = new this(u);
          for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l.reject(s2, e3));
          });
          var a2;
          return s2;
        };
      }, { immediate: 36 }], 38: [function(e, t, r) {
        "use strict";
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
        "use strict";
        var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
        function p(e2) {
          if (!(this instanceof p)) return new p(e2);
          this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
          var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
          if (r2 !== l) throw new Error(i[r2]);
          if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
            var n2;
            if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
            this._dict_set = true;
          }
        }
        function n(e2, t2) {
          var r2 = new p(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
          return r2.result;
        }
        p.prototype.push = function(e2, t2) {
          var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
          do {
            if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
            0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
          } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
          return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
        }, p.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, p.prototype.onEnd = function(e2) {
          e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, n(e2, t2);
        }, r.gzip = function(e2, t2) {
          return (t2 = t2 || {}).gzip = true, n(e2, t2);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
        "use strict";
        var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
        function a(e2) {
          if (!(this instanceof a)) return new a(e2);
          this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
          var t2 = this.options;
          t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
          var r2 = c.inflateInit2(this.strm, t2.windowBits);
          if (r2 !== m.Z_OK) throw new Error(n[r2]);
          this.header = new s(), c.inflateGetHeader(this.strm, this.header);
        }
        function o(e2, t2) {
          var r2 = new a(t2);
          if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
          return r2.result;
        }
        a.prototype.push = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
          if (this.ended) return false;
          n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
          do {
            if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
            h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
          } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
          return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
        }, a.prototype.onData = function(e2) {
          this.chunks.push(e2);
        }, a.prototype.onEnd = function(e2) {
          e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
        }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
          return (t2 = t2 || {}).raw = true, o(e2, t2);
        }, r.ungzip = o;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
        "use strict";
        var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        r.assign = function(e2) {
          for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
            var r2 = t2.shift();
            if (r2) {
              if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
              for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
            }
          }
          return e2;
        }, r.shrinkBuf = function(e2, t2) {
          return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
        };
        var i = { arraySet: function(e2, t2, r2, n2, i2) {
          if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
          else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          var t2, r2, n2, i2, s2, a;
          for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
          for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
          return a;
        } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
          for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
        }, flattenChunks: function(e2) {
          return [].concat.apply([], e2);
        } };
        r.setTyped = function(e2) {
          e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
        }, r.setTyped(n);
      }, {}], 42: [function(e, t, r) {
        "use strict";
        var h = e("./common"), i = true, s = true;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (e2) {
          i = false;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (e2) {
          s = false;
        }
        for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
        function l(e2, t2) {
          if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
          for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
          return r2;
        }
        u[254] = u[254] = 1, r.string2buf = function(e2) {
          var t2, r2, n2, i2, s2, a = e2.length, o = 0;
          for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }, r.buf2binstring = function(e2) {
          return l(e2, e2.length);
        }, r.binstring2buf = function(e2) {
          for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
          return t2;
        }, r.buf2string = function(e2, t2) {
          var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
          for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
          else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
          return l(o, n2);
        }, r.utf8border = function(e2, t2) {
          var r2;
          for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
          return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
        };
      }, { "./common": 41 }], 43: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2, r2, n) {
          for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
            for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
            i %= 65521, s %= 65521;
          }
          return i | s << 16 | 0;
        };
      }, {}], 44: [function(e, t, r) {
        "use strict";
        t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, t, r) {
        "use strict";
        var o = (function() {
          for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
            e2 = r2;
            for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
            t2[r2] = e2;
          }
          return t2;
        })();
        t.exports = function(e2, t2, r2, n) {
          var i = o, s = n + r2;
          e2 ^= -1;
          for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
          return -1 ^ e2;
        };
      }, {}], 46: [function(e, t, r) {
        "use strict";
        var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
        function R(e2, t2) {
          return e2.msg = n[t2], t2;
        }
        function T(e2) {
          return (e2 << 1) - (4 < e2 ? 9 : 0);
        }
        function D(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        function F(e2) {
          var t2 = e2.state, r2 = t2.pending;
          r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
        }
        function N(e2, t2) {
          u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = t2;
        }
        function P(e2, t2) {
          e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
        }
        function L(e2, t2) {
          var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
          e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
          do {
            if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
              s2 += 2, r2++;
              do {
              } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
              if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
              }
            }
          } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
          return a2 <= e2.lookahead ? a2 : e2.lookahead;
        }
        function j(e2) {
          var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
          do {
            if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
              for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
              i2 += f2;
            }
            if (0 === e2.strm.avail_in) break;
            if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
          } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
        }
        function Z(e2, t2) {
          for (var r2, n2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
              e2.strstart++;
            } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
            else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
            if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function W(e2, t2) {
          for (var r2, n2, i2; ; ) {
            if (e2.lookahead < z) {
              if (j(e2), e2.lookahead < z && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
              for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
              if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            } else if (e2.match_available) {
              if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
            } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
          }
          return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
        }
        function M(e2, t2, r2, n2, i2) {
          this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
        }
        function H() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function G(e2) {
          var t2;
          return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
        }
        function K(e2) {
          var t2 = G(e2);
          return t2 === m && (function(e3) {
            e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
          })(e2.state), t2;
        }
        function Y(e2, t2, r2, n2, i2, s2) {
          if (!e2) return _;
          var a2 = 1;
          if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
          8 === n2 && (n2 = 9);
          var o2 = new H();
          return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
        }
        h = [new M(0, 0, 0, 0, function(e2, t2) {
          var r2 = 65535;
          for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
            if (e2.lookahead <= 1) {
              if (j(e2), 0 === e2.lookahead && t2 === l) return A;
              if (0 === e2.lookahead) break;
            }
            e2.strstart += e2.lookahead, e2.lookahead = 0;
            var n2 = e2.block_start + r2;
            if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A;
            if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
          }
          return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
        }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
          return Y(e2, t2, v, 15, 8, 0);
        }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
          return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
        }, r.deflate = function(e2, t2) {
          var r2, n2, i2, s2;
          if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
          if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
          if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
          else {
            var a2 = v + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
          }
          if (69 === n2.status) if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else n2.status = 73;
          if (73 === n2.status) if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else n2.status = 91;
          if (91 === n2.status) if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else n2.status = 103;
          if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
            if (F(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
          } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
          if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
          if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
            var o2 = 2 === n2.strategy ? (function(e3, t3) {
              for (var r3; ; ) {
                if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                  if (t3 === l) return A;
                  break;
                }
                if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
              for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                if (e3.lookahead <= S) {
                  if (j(e3), e3.lookahead <= S && t3 === l) return A;
                  if (0 === e3.lookahead) break;
                }
                if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                  s3 = e3.strstart + S;
                  do {
                  } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                  e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                }
                if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
              }
              return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
            })(n2, t2) : h[n2.level].func(n2, t2);
            if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n2.last_flush = -1), m;
            if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
          }
          return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
        }, r.deflateEnd = function(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
        }, r.deflateSetDictionary = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
          if (!e2 || !e2.state) return _;
          if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
          for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
            for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
            r2.strstart = n2, r2.lookahead = x - 1, j(r2);
          }
          return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
        }, r.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
        };
      }, {}], 48: [function(e, t, r) {
        "use strict";
        t.exports = function(e2, t2) {
          var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
          r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
          e: do {
            p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
            t: for (; ; ) {
              if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
              else {
                if (!(16 & y)) {
                  if (0 == (64 & y)) {
                    v = m[(65535 & v) + (d & (1 << y) - 1)];
                    continue t;
                  }
                  if (32 & y) {
                    r2.mode = 12;
                    break e;
                  }
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break e;
                }
                w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                r: for (; ; ) {
                  if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                    if (0 == (64 & y)) {
                      v = _[(65535 & v) + (d & (1 << y) - 1)];
                      continue r;
                    }
                    e2.msg = "invalid distance code", r2.mode = 30;
                    break e;
                  }
                  if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break e;
                  }
                  if (d >>>= y, p -= y, (y = s - a) < k) {
                    if (l < (y = k - y) && r2.sane) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (S = c, (x = 0) === f) {
                      if (x += u - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                    } else if (f < y) {
                      if (x += u + f - y, (y -= f) < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        if (x = 0, f < w) {
                          for (w -= y = f; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      }
                    } else if (x += f - y, y < w) {
                      for (w -= y; C[s++] = c[x++], --y; ) ;
                      x = s - k, S = C;
                    }
                    for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                    w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                  } else {
                    for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                    w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (n < i && s < o);
          n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
        };
      }, {}], 49: [function(e, t, r) {
        "use strict";
        var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
        function L(e2) {
          return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
        }
        function s() {
          this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function a(e2) {
          var t2;
          return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
        }
        function o(e2) {
          var t2;
          return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
        }
        function h(e2, t2) {
          var r2, n2;
          return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
        }
        function u(e2, t2) {
          var r2, n2;
          return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
        }
        var l, f, c = true;
        function j(e2) {
          if (c) {
            var t2;
            for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
            for (; t2 < 256; ) e2.lens[t2++] = 9;
            for (; t2 < 280; ) e2.lens[t2++] = 7;
            for (; t2 < 288; ) e2.lens[t2++] = 8;
            for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
            T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
          }
          e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
        }
        function Z(e2, t2, r2, n2) {
          var i2, s2 = e2.state;
          return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
        }
        r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
          return u(e2, 15);
        }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
          var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
          12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
          e: for (; ; ) switch (r2.mode) {
            case P:
              if (0 === r2.wrap) {
                r2.mode = 13;
                break;
              }
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (2 & r2.wrap && 35615 === u2) {
                E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                break;
              }
              if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                e2.msg = "incorrect header check", r2.mode = 30;
                break;
              }
              if (8 != (15 & u2)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
              else if (k > r2.wbits) {
                e2.msg = "invalid window size", r2.mode = 30;
                break;
              }
              r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
              break;
            case 2:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.flags = u2, 8 != (255 & r2.flags)) {
                e2.msg = "unknown compression method", r2.mode = 30;
                break;
              }
              if (57344 & r2.flags) {
                e2.msg = "unknown header flags set", r2.mode = 30;
                break;
              }
              r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
            case 3:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
            case 4:
              for (; l2 < 16; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
            case 5:
              if (1024 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
              } else r2.head && (r2.head.extra = null);
              r2.mode = 6;
            case 6:
              if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
              r2.length = 0, r2.mode = 7;
            case 7:
              if (2048 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.name = null);
              r2.length = 0, r2.mode = 8;
            case 8:
              if (4096 & r2.flags) {
                if (0 === o2) break e;
                for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
              } else r2.head && (r2.head.comment = null);
              r2.mode = 9;
            case 9:
              if (512 & r2.flags) {
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (65535 & r2.check)) {
                  e2.msg = "header crc mismatch", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
              break;
            case 10:
              for (; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
            case 11:
              if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
              e2.adler = r2.check = 1, r2.mode = 12;
            case 12:
              if (5 === t2 || 6 === t2) break e;
            case 13:
              if (r2.last) {
                u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                break;
              }
              for (; l2 < 3; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                case 0:
                  r2.mode = 14;
                  break;
                case 1:
                  if (j(r2), r2.mode = 20, 6 !== t2) break;
                  u2 >>>= 2, l2 -= 2;
                  break e;
                case 2:
                  r2.mode = 17;
                  break;
                case 3:
                  e2.msg = "invalid block type", r2.mode = 30;
              }
              u2 >>>= 2, l2 -= 2;
              break;
            case 14:
              for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                e2.msg = "invalid stored block lengths", r2.mode = 30;
                break;
              }
              if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
            case 15:
              r2.mode = 16;
            case 16:
              if (d = r2.length) {
                if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                break;
              }
              r2.mode = 12;
              break;
            case 17:
              for (; l2 < 14; ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                e2.msg = "too many length or distance symbols", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 18;
            case 18:
              for (; r2.have < r2.ncode; ) {
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
              }
              for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
              if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid code lengths set", r2.mode = 30;
                break;
              }
              r2.have = 0, r2.mode = 19;
            case 19:
              for (; r2.have < r2.nlen + r2.ndist; ) {
                for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                else {
                  if (16 === b) {
                    for (z = _ + 2; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                  } else if (17 === b) {
                    for (z = _ + 3; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                  } else {
                    for (z = _ + 7; l2 < z; ) {
                      if (0 === o2) break e;
                      o2--, u2 += n2[s2++] << l2, l2 += 8;
                    }
                    l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                  }
                  if (r2.have + d > r2.nlen + r2.ndist) {
                    e2.msg = "invalid bit length repeat", r2.mode = 30;
                    break;
                  }
                  for (; d--; ) r2.lens[r2.have++] = k;
                }
              }
              if (30 === r2.mode) break;
              if (0 === r2.lens[256]) {
                e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                break;
              }
              if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                e2.msg = "invalid literal/lengths set", r2.mode = 30;
                break;
              }
              if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                e2.msg = "invalid distances set", r2.mode = 30;
                break;
              }
              if (r2.mode = 20, 6 === t2) break e;
            case 20:
              r2.mode = 21;
            case 21:
              if (6 <= o2 && 258 <= h2) {
                e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                break;
              }
              for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (g && 0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                r2.mode = 26;
                break;
              }
              if (32 & g) {
                r2.back = -1, r2.mode = 12;
                break;
              }
              if (64 & g) {
                e2.msg = "invalid literal/length code", r2.mode = 30;
                break;
              }
              r2.extra = 15 & g, r2.mode = 22;
            case 22:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              r2.was = r2.length, r2.mode = 23;
            case 23:
              for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                if (0 === o2) break e;
                o2--, u2 += n2[s2++] << l2, l2 += 8;
              }
              if (0 == (240 & g)) {
                for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                u2 >>>= v, l2 -= v, r2.back += v;
              }
              if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                e2.msg = "invalid distance code", r2.mode = 30;
                break;
              }
              r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
            case 24:
              if (r2.extra) {
                for (z = r2.extra; l2 < z; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
              }
              if (r2.offset > r2.dmax) {
                e2.msg = "invalid distance too far back", r2.mode = 30;
                break;
              }
              r2.mode = 25;
            case 25:
              if (0 === h2) break e;
              if (d = c2 - h2, r2.offset > d) {
                if ((d = r2.offset - d) > r2.whave && r2.sane) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
              } else m = i2, p = a2 - r2.offset, d = r2.length;
              for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
              0 === r2.length && (r2.mode = 21);
              break;
            case 26:
              if (0 === h2) break e;
              i2[a2++] = r2.length, h2--, r2.mode = 21;
              break;
            case 27:
              if (r2.wrap) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 |= n2[s2++] << l2, l2 += 8;
                }
                if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                  e2.msg = "incorrect data check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 28;
            case 28:
              if (r2.wrap && r2.flags) {
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (u2 !== (4294967295 & r2.total)) {
                  e2.msg = "incorrect length check", r2.mode = 30;
                  break;
                }
                l2 = u2 = 0;
              }
              r2.mode = 29;
            case 29:
              x = 1;
              break e;
            case 30:
              x = -3;
              break e;
            case 31:
              return -4;
            case 32:
            default:
              return U;
          }
          return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
        }, r.inflateEnd = function(e2) {
          if (!e2 || !e2.state) return U;
          var t2 = e2.state;
          return t2.window && (t2.window = null), e2.state = null, N;
        }, r.inflateGetHeader = function(e2, t2) {
          var r2;
          return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
        }, r.inflateSetDictionary = function(e2, t2) {
          var r2, n2 = t2.length;
          return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
        }, r.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
        "use strict";
        var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        t.exports = function(e2, t2, r2, n, i, s, a, o) {
          var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
          for (b = 0; b <= 15; b++) O[b] = 0;
          for (v = 0; v < n; v++) O[t2[r2 + v]]++;
          for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
          if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
          for (y = 1; y < w && 0 === O[y]; y++) ;
          for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
          if (0 < z && (0 === e2 || 1 !== w)) return -1;
          for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
          for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
          if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
          for (; ; ) {
            for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
            for (h = 1 << b - 1; E & h; ) h >>= 1;
            if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
              if (b === w) break;
              b = t2[r2 + a[v]];
            }
            if (k < b && (E & f) !== l) {
              for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
              if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
              i[l = E & f] = k << 24 | x << 16 | c - s | 0;
            }
          }
          return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, t, r) {
        "use strict";
        t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, t, r) {
        "use strict";
        var i = e("../utils/common"), o = 0, h = 1;
        function n(e2) {
          for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
        }
        var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
        n(z);
        var C = new Array(2 * f);
        n(C);
        var E = new Array(512);
        n(E);
        var A = new Array(256);
        n(A);
        var I = new Array(a);
        n(I);
        var O, B, R, T = new Array(f);
        function D(e2, t2, r2, n2, i2) {
          this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
        }
        function F(e2, t2) {
          this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
        }
        function N(e2) {
          return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
        }
        function U(e2, t2) {
          e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
        }
        function P(e2, t2, r2) {
          e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
        }
        function L(e2, t2, r2) {
          P(e2, r2[2 * t2], r2[2 * t2 + 1]);
        }
        function j(e2, t2) {
          for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
          return r2 >>> 1;
        }
        function Z(e2, t2, r2) {
          var n2, i2, s2 = new Array(g + 1), a2 = 0;
          for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
          for (i2 = 0; i2 <= t2; i2++) {
            var o2 = e2[2 * i2 + 1];
            0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
          }
        }
        function W(e2) {
          var t2;
          for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
          for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
          for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
          e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
        }
        function M(e2) {
          8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
        }
        function H(e2, t2, r2, n2) {
          var i2 = 2 * t2, s2 = 2 * r2;
          return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
        }
        function G(e2, t2, r2) {
          for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
          e2.heap[r2] = n2;
        }
        function K(e2, t2, r2) {
          var n2, i2, s2, a2, o2 = 0;
          if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
          L(e2, m, t2);
        }
        function Y(e2, t2) {
          var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
          for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
          for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
          for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
          for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
          e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
            var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
            for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
            for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
            if (0 !== m2) {
              do {
                for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
              } while (0 < m2);
              for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
            }
          })(e2, t2), Z(s2, u2, e2.bl_count);
        }
        function X(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
        }
        function V(e2, t2, r2) {
          var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
          for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
            else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
        }
        n(T);
        var q = false;
        function J(e2, t2, r2, n2) {
          P(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            M(e3), n3 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
          })(e2, t2, r2, true);
        }
        r._tr_init = function(e2) {
          q || ((function() {
            var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
            for (n2 = r2 = 0; n2 < a - 1; n2++) for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A[r2++] = n2;
            for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++) E[i2++] = n2;
            for (i2 >>= 7; n2 < f; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++) E[256 + i2++] = n2;
            for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
            for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
            for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
            for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
            for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
            O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
          })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
        }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
          var i2, s2, a2 = 0;
          0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
            var t3, r3 = 4093624447;
            for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
            if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
            for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
            return o;
          })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
            var t3;
            for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
            return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
          })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
            var i3;
            for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
            V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
          })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
        }, r._tr_tally = function(e2, t2, r2) {
          return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
        }, r._tr_align = function(e2) {
          P(e2, 2, 3), L(e2, m, z), (function(e3) {
            16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
          })(e2);
        };
      }, { "../utils/common": 41 }], 53: [function(e, t, r) {
        "use strict";
        t.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, t, r) {
        (function(e2) {
          !(function(r2, n) {
            "use strict";
            if (!r2.setImmediate) {
              var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
              e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                process.nextTick(function() {
                  c(e4);
                });
              } : (function() {
                if (r2.postMessage && !r2.importScripts) {
                  var e4 = true, t3 = r2.onmessage;
                  return r2.onmessage = function() {
                    e4 = false;
                  }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                }
              })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                r2.postMessage(a + e4, "*");
              }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                c(e4.data);
              }, function(e4) {
                t2.port2.postMessage(e4);
              }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                var t3 = l.createElement("script");
                t3.onreadystatechange = function() {
                  c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                }, s.appendChild(t3);
              }) : function(e4) {
                setTimeout(c, 0, e4);
              }, e3.setImmediate = function(e4) {
                "function" != typeof e4 && (e4 = new Function("" + e4));
                for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                var n2 = { callback: e4, args: t3 };
                return h[o] = n2, i(o), o++;
              }, e3.clearImmediate = f;
            }
            function f(e4) {
              delete h[e4];
            }
            function c(e4) {
              if (u) setTimeout(c, 0, e4);
              else {
                var t3 = h[e4];
                if (t3) {
                  u = true;
                  try {
                    !(function(e5) {
                      var t4 = e5.callback, r3 = e5.args;
                      switch (r3.length) {
                        case 0:
                          t4();
                          break;
                        case 1:
                          t4(r3[0]);
                          break;
                        case 2:
                          t4(r3[0], r3[1]);
                          break;
                        case 3:
                          t4(r3[0], r3[1], r3[2]);
                          break;
                        default:
                          t4.apply(n, r3);
                      }
                    })(t3);
                  } finally {
                    f(e4), u = false;
                  }
                }
              }
            }
            function d(e4) {
              e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
            }
          })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }, {}] }, {}, [10])(10);
    });
  }
});

// src/protocols/warp.ts
async function fetchWarpAccounts(env) {
  const WarpAccounts = [];
  const apiBaseUrl = "https://api.cloudflareclient.com/v0a4005/reg";
  const warpKeys = [
    await generateKeyPair(),
    await generateKeyPair()
  ];
  const fetchAccount = async (key) => {
    try {
      const response = await fetch(apiBaseUrl, {
        method: "POST",
        headers: {
          "User-Agent": "insomnia/8.6.1",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          install_id: "",
          fcm_token: "",
          tos: (/* @__PURE__ */ new Date()).toISOString(),
          type: "Android",
          model: "PC",
          locale: "en_US",
          warp_enabled: true,
          key: key.publicKey
        })
      });
      return await response.json();
    } catch (error) {
      const message2 = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to get warp configs: ${message2}`);
    }
  };
  for (const key of warpKeys) {
    const { config } = await fetchAccount(key);
    WarpAccounts.push({
      privateKey: key.privateKey,
      warpIPv6: `${config.interface.addresses.v6}/128`,
      reserved: config.client_id,
      publicKey: config.peers[0].public_key
    });
  }
  await env.S.put("warpAccounts", JSON.stringify(WarpAccounts));
  return WarpAccounts;
}
async function generateKeyPair() {
  const keyPair = await crypto.subtle.generateKey(
    { name: "X25519", namedCurve: "X25519" },
    true,
    ["deriveBits"]
  );
  const pkcs8 = await crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
  const privateKeyRaw = new Uint8Array(pkcs8).slice(-32);
  const publicKeyRaw = new Uint8Array(
    await crypto.subtle.exportKey("raw", keyPair.publicKey)
  );
  const base64Encode = (arr) => btoa(String.fromCharCode(...arr));
  return {
    publicKey: base64Encode(publicKeyRaw),
    privateKey: base64Encode(privateKeyRaw)
  };
}

// src/cores/utils.ts
function isDomain(address) {
  if (!address) return false;
  const domainRegex = /^(?!-)(?:[A-Za-z0-9-]{1,63}.)+[A-Za-z]{2,}$/;
  return domainRegex.test(address);
}
async function resolveDNS(domain, onlyIPv4 = false) {
  const dohBaseURL = `https://freedns.controld.com/p2?name=${encodeURIComponent(domain)}`;
  const dohURLs = {
    ipv4: `${dohBaseURL}&type=A`,
    ipv6: `${dohBaseURL}&type=AAAA`
  };
  try {
    const ipv4 = await fetchDNSRecords(dohURLs.ipv4, 1);
    const ipv6 = onlyIPv4 ? [] : await fetchDNSRecords(dohURLs.ipv6, 28);
    return { ipv4, ipv6 };
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    throw new Error(`Error resolving DNS for ${domain}: ${message2}`);
  }
}
async function fetchDNSRecords(url, recordType) {
  try {
    const response = await fetch(url, { headers: { accept: "application/dns-json" } });
    const data = await response.json();
    if (!data.Answer) return [];
    return data.Answer.filter((record) => record.type === recordType).map((record) => record.data);
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to fetch DNS records from ${url}: ${message2}`);
  }
}
function getProtocols() {
  const {
    settings: { VLConfigs, TRConfigs },
    dict: { _VL_, _TR_ }
  } = globalThis;
  return [].concatIf(VLConfigs, _VL_).concatIf(TRConfigs, _TR_);
}
async function getConfigAddresses(isFragment) {
  const {
    httpConfig: { hostName },
    settings: { enableIPv6, customCdnAddrs, cleanIPs }
  } = globalThis;
  const { ipv4, ipv6 } = await resolveDNS(hostName, !enableIPv6);
  const addrs = [
    hostName,
    "www.speedtest.net",
    ...ipv4,
    ...ipv6.map((ip) => `[${ip}]`),
    ...cleanIPs
  ];
  return addrs.concatIf(!isFragment, customCdnAddrs);
}
function generateRemark(index, port, address, protocol, isFragment, isChain) {
  const {
    settings: { cleanIPs, customCdnAddrs },
    dict: { _VL_, _VL_CAP_, _TR_CAP_ }
  } = globalThis;
  const isCustomAddr = customCdnAddrs.includes(address);
  const configType = isCustomAddr ? " C" : isFragment ? " F" : "";
  const chainSign = isChain ? "\u{1F517} " : "";
  const protoSign = protocol === _VL_ ? _VL_CAP_ : _TR_CAP_;
  let addressType;
  cleanIPs.includes(address) ? addressType = "Clean IP" : addressType = isDomain(address) ? "Domain" : isIPv4(address) ? "IPv4" : isIPv6(address) ? "IPv6" : "";
  return `\u{1F4A6} ${index} - ${chainSign}${protoSign}${configType} - ${addressType} : ${port}`;
}
function randomUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += Math.random() < 0.5 ? str[i].toUpperCase() : str[i];
  }
  return result;
}
function getRandomString(lengthMin, lengthMax) {
  let result = "";
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = Math.floor(Math.random() * (lengthMax - lengthMin + 1)) + lengthMin;
  for (let i = 0; i < length; i++) {
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return result;
}
function generateWsPath(protocol) {
  const {
    settings: { proxyIPMode, proxyIPs, prefixes },
    dict: { _VL_ }
  } = globalThis;
  const config = {
    junk: getRandomString(8, 16),
    protocol: protocol === _VL_ ? "vl" : "tr",
    mode: proxyIPMode,
    panelIPs: proxyIPMode === "proxyip" ? proxyIPs : prefixes
  };
  return `/${btoa(JSON.stringify(config))}`;
}
function base64ToDecimal(base64) {
  const binaryString = atob(base64);
  const hexString = Array.from(binaryString).map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join("");
  const decimalArray = hexString.match(/.{2}/g).map((hex) => parseInt(hex, 16));
  return decimalArray;
}
function isIPv4(address) {
  const ipv4Pattern = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\/([0-9]|[1-2][0-9]|3[0-2]))?$/;
  return ipv4Pattern.test(address);
}
function isIPv6(address) {
  const ipv6Pattern = /^\[(?:(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|::(?:[a-fA-F0-9]{1,4}:){0,7}|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?::[a-fA-F0-9]{1,4}){1,6})\](?:\/(1[0-1][0-9]|12[0-8]|[0-9]?[0-9]))?$/;
  return ipv6Pattern.test(address);
}
function getDomain(url) {
  try {
    const newUrl = new URL(url);
    const host = newUrl.hostname;
    const isHostDomain = isDomain(host);
    return {
      host,
      isHostDomain
    };
  } catch {
    return {
      host: "",
      isHostDomain: false
    };
  }
}
function selectSniHost(address) {
  const {
    httpConfig: { hostName },
    settings: { customCdnAddrs, customCdnHost, customCdnSni }
  } = globalThis;
  const isCustomAddr = customCdnAddrs.includes(address);
  const sni = isCustomAddr ? customCdnSni : randomUpperCase(hostName);
  const host = isCustomAddr ? customCdnHost : hostName;
  return { host, sni, allowInsecure: isCustomAddr };
}
function parseHostPort(input, brackets) {
  const regex = /^(?:\[(?<ipv6>.+?)\]|(?<host>[^:]+))(:(?<port>\d+))?$/;
  const match = input.match(regex);
  if (!match || !match.groups) return { host: "", port: 0 };
  const { ipv6, host: plainHost, port: portStr } = match.groups;
  let host = ipv6 ?? plainHost ?? "";
  if (brackets && ipv6) host = `[${ipv6}]`;
  const port = portStr ? Number(portStr) : 0;
  return { host, port };
}
function isHttps(port) {
  const { defaultHttpsPorts } = globalThis.httpConfig;
  return defaultHttpsPorts.includes(port);
}
var isBypass = (type) => type === "direct";
var isBlock = (type) => type === "block";
function accRoutingRules(geoAssets) {
  const {
    customBypassRules,
    customBypassSanctionRules,
    customBlockRules
  } = globalThis.settings;
  return {
    bypass: {
      geosites: geoAssets.filter((rule) => isBypass(rule.type)).map((rule) => rule.geosite),
      geoips: geoAssets.filter((rule) => isBypass(rule.type) && rule.geoip).map((rule) => rule.geoip),
      domains: [
        ...customBypassRules.filter(isDomain),
        ...customBypassSanctionRules.filter(isDomain)
      ],
      ips: customBypassRules.filter((rule) => !isDomain(rule))
    },
    block: {
      geosites: geoAssets.filter((rule) => isBlock(rule.type)).map((rule) => rule.geosite),
      geoips: geoAssets.filter((rule) => isBlock(rule.type) && rule.geoip).map((rule) => rule.geoip),
      domains: customBlockRules.filter(isDomain),
      ips: customBlockRules.filter((rule) => !isDomain(rule))
    }
  };
}
function accDnsRules(geoAssets) {
  const {
    localDNS,
    antiSanctionDNS,
    customBypassRules,
    customBypassSanctionRules,
    customBlockRules
  } = globalThis.settings;
  return {
    bypass: {
      localDNS: {
        geositeGeoips: geoAssets.filter(({ type, geoip, dns }) => isBypass(type) && geoip && dns === localDNS).map(({ geosite, geoip }) => ({ geosite, geoip })),
        geosites: geoAssets.filter(({ type, geoip, dns }) => isBypass(type) && !geoip && dns === localDNS).map((rule) => rule.geosite),
        domains: customBypassRules.filter(isDomain)
      },
      antiSanctionDNS: {
        geosites: geoAssets.filter((rule) => isBypass(rule.type) && rule.dns === antiSanctionDNS).map((rule) => rule.geosite),
        domains: customBypassSanctionRules.filter(isDomain)
      }
    },
    block: {
      geosites: geoAssets.filter((rule) => isBlock(rule.type)).map((rule) => rule.geosite),
      domains: customBlockRules.filter(isDomain)
    }
  };
}
function toRange(min, max) {
  if (!min || !max) return void 0;
  if (min === max) return String(min);
  return `${min}-${max}`;
}
Array.prototype.concatIf = function(condition, concat2) {
  if (!condition) return this;
  if (Array.isArray(concat2)) return [...this, ...concat2];
  return [...this, concat2];
};
Object.prototype.omitEmpty = function() {
  if (Object.keys(this).length === 0) return void 0;
  return this;
};

// src/common/common.ts
function base64DecodeUtf8(base64) {
  return new TextDecoder().decode(
    Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))
  );
}
function isValidUUID(uuid) {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}
function respond(success, status, message2, body, customHeaders) {
  const headers = {
    "Content-Type": "application/json",
    ...customHeaders
  };
  const responseBody = {
    success,
    status,
    message: message2 ?? null,
    body: body ?? null
  };
  return new Response(JSON.stringify(responseBody), { status, headers });
}

// src/S.ts
async function getDataset(request, env) {
  const { httpConfig: { panelVersion }, settings } = globalThis;
  let proxySettings, warpAccounts;
  try {
    proxySettings = await env.S.get("proxySettings", { type: "json" });
    warpAccounts = await env.S.get("warpAccounts", { type: "json" });
    if (!proxySettings) {
      await env.S.put("proxySettings", JSON.stringify(settings));
      proxySettings = settings;
    }
    if (!warpAccounts) {
      warpAccounts = await fetchWarpAccounts(env);
    }
    if (panelVersion !== proxySettings.panelVersion) {
      proxySettings = await updateDataset(request, env);
    }
    return {
      settings: proxySettings,
      warpAccounts
    };
  } catch (error) {
    console.log(error);
    const message2 = error instanceof Error ? error.message : String(error);
    throw new Error(`An error occurred while getting KV: ${message2}`);
  }
}
async function updateDataset(request, env) {
  const { settings, httpConfig: { panelVersion } } = globalThis;
  const newSettings = request.method === "PUT" ? await request.json() : null;
  let currentSettings;
  try {
    currentSettings = await env.S.get("proxySettings", { type: "json" });
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    console.log(message2);
    throw new Error(`An error occurred while getting current KV settings: ${message2}`);
  }
  const getParam = async (field, callback) => {
    const value = newSettings?.[field] ?? currentSettings?.[field] ?? settings[field];
    return callback ? await callback(value) : value;
  };
  const fields = [
    ["remoteDNS"],
    ["remoteDnsHost", "remoteDNS", getDnsParams],
    ["localDNS"],
    ["antiSanctionDNS"],
    ["enableIPv6"],
    ["fakeDNS"],
    ["logLevel"],
    ["allowLANConnection"],
    ["proxyIPMode"],
    ["proxyIPs"],
    ["prefixes"],
    ["outProxy"],
    ["outProxyParams", "outProxy", extractProxyParams],
    ["cleanIPs"],
    ["customCdnAddrs"],
    ["customCdnHost"],
    ["customCdnSni"],
    ["bestVLTRInterval"],
    ["VLConfigs"],
    ["TRConfigs"],
    ["ports"],
    ["fingerprint"],
    ["enableTFO"],
    ["fragmentMode"],
    ["fragmentLengthMin"],
    ["fragmentLengthMax"],
    ["fragmentIntervalMin"],
    ["fragmentIntervalMax"],
    ["fragmentMaxSplitMin"],
    ["fragmentMaxSplitMax"],
    ["fragmentPackets"],
    ["enableECH"],
    ["echConfig", "enableECH", extractEchConfig],
    ["bypassIran"],
    ["bypassChina"],
    ["bypassRussia"],
    ["bypassOpenAi"],
    ["bypassGoogleAi"],
    ["bypassMicrosoft"],
    ["bypassOracle"],
    ["bypassDocker"],
    ["bypassAdobe"],
    ["bypassEpicGames"],
    ["bypassIntel"],
    ["bypassAmd"],
    ["bypassNvidia"],
    ["bypassAsus"],
    ["bypassHp"],
    ["bypassLenovo"],
    ["blockAds"],
    ["blockPorn"],
    ["blockUDP443"],
    ["blockMalware"],
    ["blockPhishing"],
    ["blockCryptominers"],
    ["customBypassRules"],
    ["customBlockRules"],
    ["customBypassSanctionRules"],
    ["warpRemoteDNS"],
    ["warpEndpoints"],
    ["bestWarpInterval"],
    ["xrayUdpNoises"],
    ["knockerNoiseMode"],
    ["noiseCountMin"],
    ["noiseCountMax"],
    ["noiseSizeMin"],
    ["noiseSizeMax"],
    ["noiseDelayMin"],
    ["noiseDelayMax"],
    ["amneziaNoiseCount"],
    ["amneziaNoiseSizeMin"],
    ["amneziaNoiseSizeMax"]
  ];
  const entries = await Promise.all(
    fields.map(async ([key, callbackKey, callbackFunc]) => {
      return [key, await getParam(callbackKey ?? key, callbackFunc)];
    })
  );
  const updatedSettings = {
    ...Object.fromEntries(entries),
    panelVersion
  };
  try {
    await env.S.put("proxySettings", JSON.stringify(updatedSettings));
    return updatedSettings;
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    console.log(error);
    throw new Error(`An error occurred while updating KV: ${message2}`);
  }
}
async function getDnsParams(dns) {
  const { host, isHostDomain } = getDomain(dns);
  const dohHost = { host, isDomain: isHostDomain, ipv4: [], ipv6: [] };
  if (isHostDomain) {
    const { ipv4, ipv6 } = await resolveDNS(host);
    dohHost.ipv4 = ipv4;
    dohHost.ipv6 = ipv6;
  }
  return dohHost;
}
function extractProxyParams(chainProxy) {
  if (!chainProxy) return {};
  const { _SS_, _TR_, _VL_, _VM_ } = globalThis.dict;
  let url = new URL(chainProxy);
  const protocol = url.protocol.slice(0, -1);
  const stdProtocol = protocol === "ss" ? _SS_ : protocol.replace("socks5", "socks");
  if (stdProtocol === _VM_) {
    const config = JSON.parse(base64DecodeUtf8(url.host));
    return {
      protocol: stdProtocol,
      uuid: config.id,
      server: config.add,
      port: +config.port,
      aid: +config.aid,
      type: config.net,
      headerType: config.type,
      serviceName: config.path,
      authority: config.authority,
      path: config.path || void 0,
      host: config.host || void 0,
      security: config.tls,
      sni: config.sni,
      fp: config.fp,
      alpn: config.alpn || void 0
    };
  }
  const configParams = {
    protocol: stdProtocol,
    server: url.hostname,
    port: +url.port
  };
  const parseParams = (queryParams, customParams) => {
    if (queryParams) {
      for (const [key, value] of url.searchParams) {
        configParams[key] = value || void 0;
      }
    }
    return {
      ...configParams,
      ...customParams
    };
  };
  switch (stdProtocol) {
    case _VL_:
      return parseParams(true, {
        uuid: url.username
      });
    case _TR_:
      return parseParams(true, {
        password: url.username
      });
    case _SS_:
      const auth = base64DecodeUtf8(url.username);
      const [first, ...rest] = auth.split(":");
      return parseParams(true, {
        method: first,
        password: rest.join(":")
      });
    case "socks":
    case "http":
      let user, pass;
      try {
        const userInfo = base64DecodeUtf8(url.username);
        if (userInfo.includes(":")) [user, pass] = userInfo.split(":");
      } catch (error) {
        user = url.username;
        pass = url.password;
      }
      return parseParams(false, {
        user: user || void 0,
        pass: pass || void 0
      });
    default:
      return {};
  }
}
async function extractEchConfig(enableECH) {
  if (!enableECH) return "";
  const { httpConfig: { hostName } } = globalThis;
  const url = new URL("https://dns.google/resolve");
  url.searchParams.set("name", hostName);
  url.searchParams.set("type", "HTTPS");
  const res = await fetch(url.toString(), {
    headers: { accept: "application/dns-json" }
  });
  const dns = await res.json();
  for (const ans of dns.Answer) {
    const ech = ans.data.match(/ech=([^ ]+)/)?.[1];
    if (ech) return ech;
  }
  throw new Error("ECH record not found");
}

// src/common/init.ts
globalThis.dict = {
  _VL_: atob("dmxlc3M="),
  _VL_CAP_: atob("Vg=="),
  _VM_: atob("dm1lc3M="),
  _TR_: atob("dHJvamFu"),
  _TR_CAP_: atob("VA=="),
  _SS_: atob("U1M="),
  _V2_: atob("VjI="),
  _project_: atob("QVBQ"),
  _website_: atob("aHR0cHM6Ly9nb29nbGUuY29tLw=="),
  _public_proxy_ip_: atob("cmVkaXJlY3QucHJveGl0Lmly")
};
globalThis.settings = {
  localDNS: "76.76.2.2",
  antiSanctionDNS: "178.22.122.100",
  fakeDNS: true,
  enableIPv6: true,
  allowLANConnection: true,
  logLevel: "none",
  remoteDNS: "https://76.76.2.11/p2",
  remoteDnsHost: {
    host: "76.76.2.2",
    isDomain: false,
    ipv4: [],
    ipv6: []
  },
  proxyIPMode: "proxyip",
  proxyIPs: [],
  prefixes: [],
  outProxy: "",
  outProxyParams: {},
  cleanIPs: [],
  customCdnAddrs: [],
  customCdnHost: "",
  customCdnSni: "",
  bestVLTRInterval: 30,
  VLConfigs: true,
  TRConfigs: true,
  ports: [443, 8443, 2053, 2083, 2087, 2096, 80, 8880, 2052, 2082, 2086, 2095],
  fingerprint: "chrome",
  enableTFO: false,
  fragmentMode: "custom",
  fragmentLengthMin: 100,
  fragmentLengthMax: 200,
  fragmentIntervalMin: 1,
  fragmentIntervalMax: 1,
  fragmentMaxSplitMin: void 0,
  fragmentMaxSplitMax: void 0,
  fragmentPackets: "tlshello",
  enableECH: false,
  echConfig: "",
  bypassIran: true,
  bypassChina: false,
  bypassRussia: false,
  bypassOpenAi: false,
  bypassGoogleAi: false,
  bypassMicrosoft: false,
  bypassOracle: false,
  bypassDocker: false,
  bypassAdobe: false,
  bypassEpicGames: false,
  bypassIntel: false,
  bypassAmd: false,
  bypassNvidia: false,
  bypassAsus: false,
  bypassHp: false,
  bypassLenovo: false,
  blockAds: true,
  blockPorn: false,
  blockUDP443: true,
  blockMalware: true,
  blockPhishing: true,
  blockCryptominers: true,
  customBypassRules: [],
  customBlockRules: [],
  customBypassSanctionRules: [],
  warpRemoteDNS: "76.76.2.2",
  warpEndpoints: ["engage.cloudflareclient.com:2408"],
  bestWarpInterval: 30,
  xrayUdpNoises: [
    {
      type: "rand",
      packet: "50-100",
      delay: "1-1",
      applyTo: "ip",
      count: 5
    }
  ],
  knockerNoiseMode: "quic",
  noiseCountMin: 10,
  noiseCountMax: 15,
  noiseSizeMin: 5,
  noiseSizeMax: 10,
  noiseDelayMin: 1,
  noiseDelayMax: 1,
  amneziaNoiseCount: 5,
  amneziaNoiseSizeMin: 50,
  amneziaNoiseSizeMax: 100,
  panelVersion: "4.1.0"
};
async function setSettings(request, env) {
  const dataset = await getDataset(request, env);
  globalThis.settings = dataset.settings;
}
function init(request, env) {
  const { pathname } = new URL(request.url);
  const { U, P, FALLBACK, DOH_URL } = env;
  globalThis.globalConfig = {
    userID: U,
    TrPass: P,
    pathName: decodeURIComponent(pathname),
    fallbackDomain: FALLBACK || "wikipedia.com",
    dohURL: DOH_URL || "https://freedns.controld.com/p2"
  };
}
function initWs(env) {
  const { _public_proxy_ip_ } = globalThis.dict;
  globalThis.wsConfig = {
    envProxyIPs: env.PIP,
    envPrefixes: env.PREFIX,
    defaultProxyIPs: [_public_proxy_ip_],
    defaultPrefixes: [
      "[2a02:898:146:64::]",
      "[2602:fc59:b0:64::]",
      "[2602:fc59:11:64::]"
    ]
  };
}
function initHttp(request, env) {
  const { _VL_CAP_, _TR_CAP_, _website_ } = globalThis.dict;
  const { U, P, SP, S } = env;
  const { pathname, origin, searchParams, hostname } = new URL(request.url);
  if (!["/secrets", "/file.ico"].includes(decodeURIComponent(pathname))) {
    if (!U || !P) throw new Error(`Please set ${_VL_CAP_} U and ${_TR_CAP_} password first. Visit <a href="${origin}/secrets" target="_blank">here</a> to generate them.`, { cause: "init" });
    if (!isValidUUID(U)) throw new Error(`Invalid U: ${U}`, { cause: "init" });
    if (typeof S !== "object") throw new Error(`KV Dataset is not properly set! Please refer to <a href="${_website_}" target="_blank">tutorials</a>.`, { cause: "init" });
  }
  globalThis.httpConfig = {
    panelVersion: "Pro",
    defaultHttpPorts: [80, 8080, 2052, 2082, 2086, 2095, 8880],
    defaultHttpsPorts: [443, 8443, 2053, 2083, 2087, 2096],
    hostName: hostname,
    client: decodeURIComponent(searchParams.get("app") ?? ""),
    urlOrigin: origin,
    subPath: SP || U
  };
}

// node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf = new Uint8Array(size);
  let i = 0;
  for (const buffer of buffers) {
    buf.set(buffer, i);
    i += buffer.length;
  }
  return buf;
}
function encode(string) {
  const bytes = new Uint8Array(string.length);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code > 127) {
      throw new TypeError("non-ASCII string encountered in encode()");
    }
    bytes[i] = code;
  }
  return bytes;
}

// node_modules/jose/dist/webapi/lib/base64.js
function encodeBase64(input) {
  if (Uint8Array.prototype.toBase64) {
    return input.toBase64();
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i = 0; i < input.length; i += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i, i + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
}
function decodeBase64(encoded) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(encoded);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// node_modules/jose/dist/webapi/util/base64url.js
function decode(input) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(typeof input === "string" ? input : decoder.decode(input), {
      alphabet: "base64url"
    });
  }
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}
function encode2(input) {
  let unencoded = input;
  if (typeof unencoded === "string") {
    unencoded = encoder.encode(unencoded);
  }
  if (Uint8Array.prototype.toBase64) {
    return unencoded.toBase64({ alphabet: "base64url", omitPadding: true });
  }
  return encodeBase64(unencoded).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

// node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message2, options) {
    super(message2, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var JWTClaimValidationFailed = class extends JOSEError {
  static code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
var JWTExpired = class extends JOSEError {
  static code = "ERR_JWT_EXPIRED";
  code = "ERR_JWT_EXPIRED";
  claim;
  reason;
  payload;
  constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
    super(message2, { cause: { claim, reason, payload } });
    this.claim = claim;
    this.reason = reason;
    this.payload = payload;
  }
};
var JOSEAlgNotAllowed = class extends JOSEError {
  static code = "ERR_JOSE_ALG_NOT_ALLOWED";
  code = "ERR_JOSE_ALG_NOT_ALLOWED";
};
var JOSENotSupported = class extends JOSEError {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
};
var JWSInvalid = class extends JOSEError {
  static code = "ERR_JWS_INVALID";
  code = "ERR_JWS_INVALID";
};
var JWTInvalid = class extends JOSEError {
  static code = "ERR_JWT_INVALID";
  code = "ERR_JWT_INVALID";
};
var JWSSignatureVerificationFailed = class extends JOSEError {
  static code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  constructor(message2 = "signature verification failed", options) {
    super(message2, options);
  }
};

// node_modules/jose/dist/webapi/lib/crypto_key.js
var unusable = (name, prop = "algorithm.name") => new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
var isAlgorithm = (algorithm, name) => algorithm.name === name;
function getHashLength(hash) {
  return parseInt(hash.name.slice(4), 10);
}
function getNamedCurve(alg) {
  switch (alg) {
    case "ES256":
      return "P-256";
    case "ES384":
      return "P-384";
    case "ES512":
      return "P-521";
    default:
      throw new Error("unreachable");
  }
}
function checkUsage(key, usage) {
  if (usage && !key.usages.includes(usage)) {
    throw new TypeError(`CryptoKey does not support this operation, its usages must include ${usage}.`);
  }
}
function checkSigCryptoKey(key, alg, usage) {
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512": {
      if (!isAlgorithm(key.algorithm, "HMAC"))
        throw unusable("HMAC");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "RS256":
    case "RS384":
    case "RS512": {
      if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
        throw unusable("RSASSA-PKCS1-v1_5");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "PS256":
    case "PS384":
    case "PS512": {
      if (!isAlgorithm(key.algorithm, "RSA-PSS"))
        throw unusable("RSA-PSS");
      const expected = parseInt(alg.slice(2), 10);
      const actual = getHashLength(key.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    case "Ed25519":
    case "EdDSA": {
      if (!isAlgorithm(key.algorithm, "Ed25519"))
        throw unusable("Ed25519");
      break;
    }
    case "ML-DSA-44":
    case "ML-DSA-65":
    case "ML-DSA-87": {
      if (!isAlgorithm(key.algorithm, alg))
        throw unusable(alg);
      break;
    }
    case "ES256":
    case "ES384":
    case "ES512": {
      if (!isAlgorithm(key.algorithm, "ECDSA"))
        throw unusable("ECDSA");
      const expected = getNamedCurve(alg);
      const actual = key.algorithm.namedCurve;
      if (actual !== expected)
        throw unusable(expected, "algorithm.namedCurve");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key, usage);
}

// node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types) {
  types = types.filter(Boolean);
  if (types.length > 2) {
    const last = types.pop();
    msg += `one of type ${types.join(", ")}, or ${last}.`;
  } else if (types.length === 2) {
    msg += `one of type ${types[0]} or ${types[1]}.`;
  } else {
    msg += `of type ${types[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalidKeyInput = (actual, ...types) => message("Key must be ", actual, ...types);
var withAlg = (alg, actual, ...types) => message(`Key for the ${alg} algorithm must be `, actual, ...types);

// node_modules/jose/dist/webapi/lib/is_key_like.js
var isCryptoKey = (key) => {
  if (key?.[Symbol.toStringTag] === "CryptoKey")
    return true;
  try {
    return key instanceof CryptoKey;
  } catch {
    return false;
  }
};
var isKeyObject = (key) => key?.[Symbol.toStringTag] === "KeyObject";
var isKeyLike = (key) => isCryptoKey(key) || isKeyObject(key);

// node_modules/jose/dist/webapi/lib/is_disjoint.js
function isDisjoint(...headers) {
  const sources = headers.filter(Boolean);
  if (sources.length === 0 || sources.length === 1) {
    return true;
  }
  let acc;
  for (const header of sources) {
    const parameters = Object.keys(header);
    if (!acc || acc.size === 0) {
      acc = new Set(parameters);
      continue;
    }
    for (const parameter of parameters) {
      if (acc.has(parameter)) {
        return false;
      }
      acc.add(parameter);
    }
  }
  return true;
}

// node_modules/jose/dist/webapi/lib/is_object.js
var isObjectLike = (value) => typeof value === "object" && value !== null;
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

// node_modules/jose/dist/webapi/lib/check_key_length.js
function checkKeyLength(alg, key) {
  if (alg.startsWith("RS") || alg.startsWith("PS")) {
    const { modulusLength } = key.algorithm;
    if (typeof modulusLength !== "number" || modulusLength < 2048) {
      throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
    }
  }
}

// node_modules/jose/dist/webapi/lib/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "AKP": {
      switch (jwk.alg) {
        case "ML-DSA-44":
        case "ML-DSA-65":
        case "ML-DSA-87":
          algorithm = { name: jwk.alg };
          keyUsages = jwk.priv ? ["sign"] : ["verify"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
        case "EdDSA":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
async function jwkToKey(jwk) {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const keyData = { ...jwk };
  if (keyData.kty !== "AKP") {
    delete keyData.alg;
  }
  delete keyData.use;
  return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d || jwk.priv ? false : true), jwk.key_ops ?? keyUsages);
}

// node_modules/jose/dist/webapi/lib/validate_crit.js
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}

// node_modules/jose/dist/webapi/lib/validate_algorithms.js
function validateAlgorithms(option, algorithms) {
  if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
    throw new TypeError(`"${option}" option must be an array of strings`);
  }
  if (!algorithms) {
    return void 0;
  }
  return new Set(algorithms);
}

// node_modules/jose/dist/webapi/lib/is_jwk.js
var isJWK = (key) => isObject(key) && typeof key.kty === "string";
var isPrivateJWK = (key) => key.kty !== "oct" && (key.kty === "AKP" && typeof key.priv === "string" || typeof key.d === "string");
var isPublicJWK = (key) => key.kty !== "oct" && key.d === void 0 && key.priv === void 0;
var isSecretJWK = (key) => key.kty === "oct" && typeof key.k === "string";

// node_modules/jose/dist/webapi/lib/normalize_key.js
var cache;
var handleJWK = async (key, jwk, alg, freeze = false) => {
  cache ||= /* @__PURE__ */ new WeakMap();
  let cached = cache.get(key);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const cryptoKey = await jwkToKey({ ...jwk, alg });
  if (freeze)
    Object.freeze(key);
  if (!cached) {
    cache.set(key, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
var handleKeyObject = (keyObject, alg) => {
  cache ||= /* @__PURE__ */ new WeakMap();
  let cached = cache.get(keyObject);
  if (cached?.[alg]) {
    return cached[alg];
  }
  const isPublic = keyObject.type === "public";
  const extractable = isPublic ? true : false;
  let cryptoKey;
  if (keyObject.asymmetricKeyType === "x25519") {
    switch (alg) {
      case "ECDH-ES":
      case "ECDH-ES+A128KW":
      case "ECDH-ES+A192KW":
      case "ECDH-ES+A256KW":
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, isPublic ? [] : ["deriveBits"]);
  }
  if (keyObject.asymmetricKeyType === "ed25519") {
    if (alg !== "EdDSA" && alg !== "Ed25519") {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
      isPublic ? "verify" : "sign"
    ]);
  }
  switch (keyObject.asymmetricKeyType) {
    case "ml-dsa-44":
    case "ml-dsa-65":
    case "ml-dsa-87": {
      if (alg !== keyObject.asymmetricKeyType.toUpperCase()) {
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
      }
      cryptoKey = keyObject.toCryptoKey(keyObject.asymmetricKeyType, extractable, [
        isPublic ? "verify" : "sign"
      ]);
    }
  }
  if (keyObject.asymmetricKeyType === "rsa") {
    let hash;
    switch (alg) {
      case "RSA-OAEP":
        hash = "SHA-1";
        break;
      case "RS256":
      case "PS256":
      case "RSA-OAEP-256":
        hash = "SHA-256";
        break;
      case "RS384":
      case "PS384":
      case "RSA-OAEP-384":
        hash = "SHA-384";
        break;
      case "RS512":
      case "PS512":
      case "RSA-OAEP-512":
        hash = "SHA-512";
        break;
      default:
        throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg.startsWith("RSA-OAEP")) {
      return keyObject.toCryptoKey({
        name: "RSA-OAEP",
        hash
      }, extractable, isPublic ? ["encrypt"] : ["decrypt"]);
    }
    cryptoKey = keyObject.toCryptoKey({
      name: alg.startsWith("PS") ? "RSA-PSS" : "RSASSA-PKCS1-v1_5",
      hash
    }, extractable, [isPublic ? "verify" : "sign"]);
  }
  if (keyObject.asymmetricKeyType === "ec") {
    const nist = /* @__PURE__ */ new Map([
      ["prime256v1", "P-256"],
      ["secp384r1", "P-384"],
      ["secp521r1", "P-521"]
    ]);
    const namedCurve = nist.get(keyObject.asymmetricKeyDetails?.namedCurve);
    if (!namedCurve) {
      throw new TypeError("given KeyObject instance cannot be used for this algorithm");
    }
    if (alg === "ES256" && namedCurve === "P-256") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES384" && namedCurve === "P-384") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg === "ES512" && namedCurve === "P-521") {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDSA",
        namedCurve
      }, extractable, [isPublic ? "verify" : "sign"]);
    }
    if (alg.startsWith("ECDH-ES")) {
      cryptoKey = keyObject.toCryptoKey({
        name: "ECDH",
        namedCurve
      }, extractable, isPublic ? [] : ["deriveBits"]);
    }
  }
  if (!cryptoKey) {
    throw new TypeError("given KeyObject instance cannot be used for this algorithm");
  }
  if (!cached) {
    cache.set(keyObject, { [alg]: cryptoKey });
  } else {
    cached[alg] = cryptoKey;
  }
  return cryptoKey;
};
async function normalizeKey(key, alg) {
  if (key instanceof Uint8Array) {
    return key;
  }
  if (isCryptoKey(key)) {
    return key;
  }
  if (isKeyObject(key)) {
    if (key.type === "secret") {
      return key.export();
    }
    if ("toCryptoKey" in key && typeof key.toCryptoKey === "function") {
      try {
        return handleKeyObject(key, alg);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }
      }
    }
    let jwk = key.export({ format: "jwk" });
    return handleJWK(key, jwk, alg);
  }
  if (isJWK(key)) {
    if (key.k) {
      return decode(key.k);
    }
    return handleJWK(key, key, alg, true);
  }
  throw new Error("unreachable");
}

// node_modules/jose/dist/webapi/lib/check_key_type.js
var tag = (key) => key?.[Symbol.toStringTag];
var jwkMatchesOp = (alg, key, usage) => {
  if (key.use !== void 0) {
    let expected;
    switch (usage) {
      case "sign":
      case "verify":
        expected = "sig";
        break;
      case "encrypt":
      case "decrypt":
        expected = "enc";
        break;
    }
    if (key.use !== expected) {
      throw new TypeError(`Invalid key for this operation, its "use" must be "${expected}" when present`);
    }
  }
  if (key.alg !== void 0 && key.alg !== alg) {
    throw new TypeError(`Invalid key for this operation, its "alg" must be "${alg}" when present`);
  }
  if (Array.isArray(key.key_ops)) {
    let expectedKeyOp;
    switch (true) {
      case (usage === "sign" || usage === "verify"):
      case alg === "dir":
      case alg.includes("CBC-HS"):
        expectedKeyOp = usage;
        break;
      case alg.startsWith("PBES2"):
        expectedKeyOp = "deriveBits";
        break;
      case /^A\d{3}(?:GCM)?(?:KW)?$/.test(alg):
        if (!alg.includes("GCM") && alg.endsWith("KW")) {
          expectedKeyOp = usage === "encrypt" ? "wrapKey" : "unwrapKey";
        } else {
          expectedKeyOp = usage;
        }
        break;
      case (usage === "encrypt" && alg.startsWith("RSA")):
        expectedKeyOp = "wrapKey";
        break;
      case usage === "decrypt":
        expectedKeyOp = alg.startsWith("RSA") ? "unwrapKey" : "deriveBits";
        break;
    }
    if (expectedKeyOp && key.key_ops?.includes?.(expectedKeyOp) === false) {
      throw new TypeError(`Invalid key for this operation, its "key_ops" must include "${expectedKeyOp}" when present`);
    }
  }
  return true;
};
var symmetricTypeCheck = (alg, key, usage) => {
  if (key instanceof Uint8Array)
    return;
  if (isJWK(key)) {
    if (isSecretJWK(key) && jwkMatchesOp(alg, key, usage))
      return;
    throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
  }
  if (!isKeyLike(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key", "Uint8Array"));
  }
  if (key.type !== "secret") {
    throw new TypeError(`${tag(key)} instances for symmetric algorithms must be of type "secret"`);
  }
};
var asymmetricTypeCheck = (alg, key, usage) => {
  if (isJWK(key)) {
    switch (usage) {
      case "decrypt":
      case "sign":
        if (isPrivateJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation must be a private JWK`);
      case "encrypt":
      case "verify":
        if (isPublicJWK(key) && jwkMatchesOp(alg, key, usage))
          return;
        throw new TypeError(`JSON Web Key for this operation must be a public JWK`);
    }
  }
  if (!isKeyLike(key)) {
    throw new TypeError(withAlg(alg, key, "CryptoKey", "KeyObject", "JSON Web Key"));
  }
  if (key.type === "secret") {
    throw new TypeError(`${tag(key)} instances for asymmetric algorithms must not be of type "secret"`);
  }
  if (key.type === "public") {
    switch (usage) {
      case "sign":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm signing must be of type "private"`);
      case "decrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm decryption must be of type "private"`);
    }
  }
  if (key.type === "private") {
    switch (usage) {
      case "verify":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm verifying must be of type "public"`);
      case "encrypt":
        throw new TypeError(`${tag(key)} instances for asymmetric algorithm encryption must be of type "public"`);
    }
  }
};
function checkKeyType(alg, key, usage) {
  switch (alg.substring(0, 2)) {
    case "A1":
    case "A2":
    case "di":
    case "HS":
    case "PB":
      symmetricTypeCheck(alg, key, usage);
      break;
    default:
      asymmetricTypeCheck(alg, key, usage);
  }
}

// node_modules/jose/dist/webapi/lib/subtle_dsa.js
function subtleAlgorithm(alg, algorithm) {
  const hash = `SHA-${alg.slice(-3)}`;
  switch (alg) {
    case "HS256":
    case "HS384":
    case "HS512":
      return { hash, name: "HMAC" };
    case "PS256":
    case "PS384":
    case "PS512":
      return { hash, name: "RSA-PSS", saltLength: parseInt(alg.slice(-3), 10) >> 3 };
    case "RS256":
    case "RS384":
    case "RS512":
      return { hash, name: "RSASSA-PKCS1-v1_5" };
    case "ES256":
    case "ES384":
    case "ES512":
      return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
    case "Ed25519":
    case "EdDSA":
      return { name: "Ed25519" };
    case "ML-DSA-44":
    case "ML-DSA-65":
    case "ML-DSA-87":
      return { name: alg };
    default:
      throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
  }
}

// node_modules/jose/dist/webapi/lib/get_sign_verify_key.js
async function getSigKey(alg, key, usage) {
  if (key instanceof Uint8Array) {
    if (!alg.startsWith("HS")) {
      throw new TypeError(invalidKeyInput(key, "CryptoKey", "KeyObject", "JSON Web Key"));
    }
    return crypto.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
  }
  checkSigCryptoKey(key, alg, usage);
  return key;
}

// node_modules/jose/dist/webapi/lib/verify.js
async function verify(alg, key, signature, data) {
  const cryptoKey = await getSigKey(alg, key, "verify");
  checkKeyLength(alg, cryptoKey);
  const algorithm = subtleAlgorithm(alg, cryptoKey.algorithm);
  try {
    return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
  } catch {
    return false;
  }
}

// node_modules/jose/dist/webapi/jws/flattened/verify.js
async function flattenedVerify(jws, key, options) {
  if (!isObject(jws)) {
    throw new JWSInvalid("Flattened JWS must be an object");
  }
  if (jws.protected === void 0 && jws.header === void 0) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
  }
  if (jws.protected !== void 0 && typeof jws.protected !== "string") {
    throw new JWSInvalid("JWS Protected Header incorrect type");
  }
  if (jws.payload === void 0) {
    throw new JWSInvalid("JWS Payload missing");
  }
  if (typeof jws.signature !== "string") {
    throw new JWSInvalid("JWS Signature missing or incorrect type");
  }
  if (jws.header !== void 0 && !isObject(jws.header)) {
    throw new JWSInvalid("JWS Unprotected Header incorrect type");
  }
  let parsedProt = {};
  if (jws.protected) {
    try {
      const protectedHeader = decode(jws.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader));
    } catch {
      throw new JWSInvalid("JWS Protected Header is invalid");
    }
  }
  if (!isDisjoint(parsedProt, jws.header)) {
    throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jws.header
  };
  const extensions = validateCrit(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
  let b64 = true;
  if (extensions.has("b64")) {
    b64 = parsedProt.b64;
    if (typeof b64 !== "boolean") {
      throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
    }
  }
  const { alg } = joseHeader;
  if (typeof alg !== "string" || !alg) {
    throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
  }
  const algorithms = options && validateAlgorithms("algorithms", options.algorithms);
  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (b64) {
    if (typeof jws.payload !== "string") {
      throw new JWSInvalid("JWS Payload must be a string");
    }
  } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
  }
  let resolvedKey = false;
  if (typeof key === "function") {
    key = await key(parsedProt, jws);
    resolvedKey = true;
  }
  checkKeyType(alg, key, "verify");
  const data = concat(jws.protected !== void 0 ? encode(jws.protected) : new Uint8Array(), encode("."), typeof jws.payload === "string" ? b64 ? encode(jws.payload) : encoder.encode(jws.payload) : jws.payload);
  let signature;
  try {
    signature = decode(jws.signature);
  } catch {
    throw new JWSInvalid("Failed to base64url decode the signature");
  }
  const k = await normalizeKey(key, alg);
  const verified = await verify(alg, k, signature, data);
  if (!verified) {
    throw new JWSSignatureVerificationFailed();
  }
  let payload;
  if (b64) {
    try {
      payload = decode(jws.payload);
    } catch {
      throw new JWSInvalid("Failed to base64url decode the payload");
    }
  } else if (typeof jws.payload === "string") {
    payload = encoder.encode(jws.payload);
  } else {
    payload = jws.payload;
  }
  const result = { payload };
  if (jws.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jws.header !== void 0) {
    result.unprotectedHeader = jws.header;
  }
  if (resolvedKey) {
    return { ...result, key: k };
  }
  return result;
}

// node_modules/jose/dist/webapi/jws/compact/verify.js
async function compactVerify(jws, key, options) {
  if (jws instanceof Uint8Array) {
    jws = decoder.decode(jws);
  }
  if (typeof jws !== "string") {
    throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
  if (length !== 3) {
    throw new JWSInvalid("Invalid Compact JWS");
  }
  const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
  const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/webapi/lib/jwt_claims_set.js
var epoch = (date) => Math.floor(date.getTime() / 1e3);
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var year = day * 365.25;
var REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
function secs(str) {
  const matched = REGEX.exec(str);
  if (!matched || matched[4] && matched[1]) {
    throw new TypeError("Invalid time period format");
  }
  const value = parseFloat(matched[2]);
  const unit = matched[3].toLowerCase();
  let numericDate;
  switch (unit) {
    case "sec":
    case "secs":
    case "second":
    case "seconds":
    case "s":
      numericDate = Math.round(value);
      break;
    case "minute":
    case "minutes":
    case "min":
    case "mins":
    case "m":
      numericDate = Math.round(value * minute);
      break;
    case "hour":
    case "hours":
    case "hr":
    case "hrs":
    case "h":
      numericDate = Math.round(value * hour);
      break;
    case "day":
    case "days":
    case "d":
      numericDate = Math.round(value * day);
      break;
    case "week":
    case "weeks":
    case "w":
      numericDate = Math.round(value * week);
      break;
    default:
      numericDate = Math.round(value * year);
      break;
  }
  if (matched[1] === "-" || matched[4] === "ago") {
    return -numericDate;
  }
  return numericDate;
}
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
var normalizeTyp = (value) => {
  if (value.includes("/")) {
    return value.toLowerCase();
  }
  return `application/${value.toLowerCase()}`;
};
var checkAudiencePresence = (audPayload, audOption) => {
  if (typeof audPayload === "string") {
    return audOption.includes(audPayload);
  }
  if (Array.isArray(audPayload)) {
    return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
  }
  return false;
};
function validateClaimsSet(protectedHeader, encodedPayload, options = {}) {
  let payload;
  try {
    payload = JSON.parse(decoder.decode(encodedPayload));
  } catch {
  }
  if (!isObject(payload)) {
    throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
  }
  const { typ } = options;
  if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
    throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
  }
  const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options;
  const presenceCheck = [...requiredClaims];
  if (maxTokenAge !== void 0)
    presenceCheck.push("iat");
  if (audience !== void 0)
    presenceCheck.push("aud");
  if (subject !== void 0)
    presenceCheck.push("sub");
  if (issuer !== void 0)
    presenceCheck.push("iss");
  for (const claim of new Set(presenceCheck.reverse())) {
    if (!(claim in payload)) {
      throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
    }
  }
  if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
    throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
  }
  if (subject && payload.sub !== subject) {
    throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
  }
  if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
    throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
  }
  let tolerance;
  switch (typeof options.clockTolerance) {
    case "string":
      tolerance = secs(options.clockTolerance);
      break;
    case "number":
      tolerance = options.clockTolerance;
      break;
    case "undefined":
      tolerance = 0;
      break;
    default:
      throw new TypeError("Invalid clockTolerance option type");
  }
  const { currentDate } = options;
  const now = epoch(currentDate || /* @__PURE__ */ new Date());
  if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
    throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
  }
  if (payload.nbf !== void 0) {
    if (typeof payload.nbf !== "number") {
      throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
    }
    if (payload.nbf > now + tolerance) {
      throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
    }
  }
  if (payload.exp !== void 0) {
    if (typeof payload.exp !== "number") {
      throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
    }
    if (payload.exp <= now - tolerance) {
      throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
    }
  }
  if (maxTokenAge) {
    const age = now - payload.iat;
    const max = typeof maxTokenAge === "number" ? maxTokenAge : secs(maxTokenAge);
    if (age - tolerance > max) {
      throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
    }
    if (age < 0 - tolerance) {
      throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
    }
  }
  return payload;
}
var JWTClaimsBuilder = class {
  #payload;
  constructor(payload) {
    if (!isObject(payload)) {
      throw new TypeError("JWT Claims Set MUST be an object");
    }
    this.#payload = structuredClone(payload);
  }
  data() {
    return encoder.encode(JSON.stringify(this.#payload));
  }
  get iss() {
    return this.#payload.iss;
  }
  set iss(value) {
    this.#payload.iss = value;
  }
  get sub() {
    return this.#payload.sub;
  }
  set sub(value) {
    this.#payload.sub = value;
  }
  get aud() {
    return this.#payload.aud;
  }
  set aud(value) {
    this.#payload.aud = value;
  }
  set jti(value) {
    this.#payload.jti = value;
  }
  set nbf(value) {
    if (typeof value === "number") {
      this.#payload.nbf = validateInput("setNotBefore", value);
    } else if (value instanceof Date) {
      this.#payload.nbf = validateInput("setNotBefore", epoch(value));
    } else {
      this.#payload.nbf = epoch(/* @__PURE__ */ new Date()) + secs(value);
    }
  }
  set exp(value) {
    if (typeof value === "number") {
      this.#payload.exp = validateInput("setExpirationTime", value);
    } else if (value instanceof Date) {
      this.#payload.exp = validateInput("setExpirationTime", epoch(value));
    } else {
      this.#payload.exp = epoch(/* @__PURE__ */ new Date()) + secs(value);
    }
  }
  set iat(value) {
    if (value === void 0) {
      this.#payload.iat = epoch(/* @__PURE__ */ new Date());
    } else if (value instanceof Date) {
      this.#payload.iat = validateInput("setIssuedAt", epoch(value));
    } else if (typeof value === "string") {
      this.#payload.iat = validateInput("setIssuedAt", epoch(/* @__PURE__ */ new Date()) + secs(value));
    } else {
      this.#payload.iat = validateInput("setIssuedAt", value);
    }
  }
};

// node_modules/jose/dist/webapi/jwt/verify.js
async function jwtVerify(jwt, key, options) {
  const verified = await compactVerify(jwt, key, options);
  if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
    throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
  }
  const payload = validateClaimsSet(verified.protectedHeader, verified.payload, options);
  const result = { payload, protectedHeader: verified.protectedHeader };
  if (typeof key === "function") {
    return { ...result, key: verified.key };
  }
  return result;
}

// node_modules/jose/dist/webapi/lib/sign.js
async function sign(alg, key, data) {
  const cryptoKey = await getSigKey(alg, key, "sign");
  checkKeyLength(alg, cryptoKey);
  const signature = await crypto.subtle.sign(subtleAlgorithm(alg, cryptoKey.algorithm), cryptoKey, data);
  return new Uint8Array(signature);
}

// node_modules/jose/dist/webapi/jws/flattened/sign.js
var FlattenedSign = class {
  #payload;
  #protectedHeader;
  #unprotectedHeader;
  constructor(payload) {
    if (!(payload instanceof Uint8Array)) {
      throw new TypeError("payload must be an instance of Uint8Array");
    }
    this.#payload = payload;
  }
  setProtectedHeader(protectedHeader) {
    if (this.#protectedHeader) {
      throw new TypeError("setProtectedHeader can only be called once");
    }
    this.#protectedHeader = protectedHeader;
    return this;
  }
  setUnprotectedHeader(unprotectedHeader) {
    if (this.#unprotectedHeader) {
      throw new TypeError("setUnprotectedHeader can only be called once");
    }
    this.#unprotectedHeader = unprotectedHeader;
    return this;
  }
  async sign(key, options) {
    if (!this.#protectedHeader && !this.#unprotectedHeader) {
      throw new JWSInvalid("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
    }
    if (!isDisjoint(this.#protectedHeader, this.#unprotectedHeader)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...this.#protectedHeader,
      ...this.#unprotectedHeader
    };
    const extensions = validateCrit(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, this.#protectedHeader, joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
      b64 = this.#protectedHeader.b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    checkKeyType(alg, key, "sign");
    let payloadS;
    let payloadB;
    if (b64) {
      payloadS = encode2(this.#payload);
      payloadB = encode(payloadS);
    } else {
      payloadB = this.#payload;
      payloadS = "";
    }
    let protectedHeaderString;
    let protectedHeaderBytes;
    if (this.#protectedHeader) {
      protectedHeaderString = encode2(JSON.stringify(this.#protectedHeader));
      protectedHeaderBytes = encode(protectedHeaderString);
    } else {
      protectedHeaderString = "";
      protectedHeaderBytes = new Uint8Array();
    }
    const data = concat(protectedHeaderBytes, encode("."), payloadB);
    const k = await normalizeKey(key, alg);
    const signature = await sign(alg, k, data);
    const jws = {
      signature: encode2(signature),
      payload: payloadS
    };
    if (this.#unprotectedHeader) {
      jws.header = this.#unprotectedHeader;
    }
    if (this.#protectedHeader) {
      jws.protected = protectedHeaderString;
    }
    return jws;
  }
};

// node_modules/jose/dist/webapi/jws/compact/sign.js
var CompactSign = class {
  #flattened;
  constructor(payload) {
    this.#flattened = new FlattenedSign(payload);
  }
  setProtectedHeader(protectedHeader) {
    this.#flattened.setProtectedHeader(protectedHeader);
    return this;
  }
  async sign(key, options) {
    const jws = await this.#flattened.sign(key, options);
    if (jws.payload === void 0) {
      throw new TypeError("use the flattened module for creating JWS with b64: false");
    }
    return `${jws.protected}.${jws.payload}.${jws.signature}`;
  }
};

// node_modules/jose/dist/webapi/jwt/sign.js
var SignJWT = class {
  #protectedHeader;
  #jwt;
  constructor(payload = {}) {
    this.#jwt = new JWTClaimsBuilder(payload);
  }
  setIssuer(issuer) {
    this.#jwt.iss = issuer;
    return this;
  }
  setSubject(subject) {
    this.#jwt.sub = subject;
    return this;
  }
  setAudience(audience) {
    this.#jwt.aud = audience;
    return this;
  }
  setJti(jwtId) {
    this.#jwt.jti = jwtId;
    return this;
  }
  setNotBefore(input) {
    this.#jwt.nbf = input;
    return this;
  }
  setExpirationTime(input) {
    this.#jwt.exp = input;
    return this;
  }
  setIssuedAt(input) {
    this.#jwt.iat = input;
    return this;
  }
  setProtectedHeader(protectedHeader) {
    this.#protectedHeader = protectedHeader;
    return this;
  }
  async sign(key, options) {
    const sig = new CompactSign(this.#jwt.data());
    sig.setProtectedHeader(this.#protectedHeader);
    if (Array.isArray(this.#protectedHeader?.crit) && this.#protectedHeader.crit.includes("b64") && this.#protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    return sig.sign(key, options);
  }
};

// src/auth.ts
async function generateJWTToken(request, env) {
  if (request.method !== "POST") {
    return respond(false, 405, "Method not allowed.");
  }
  const password = await request.text();
  const savedPass = await env.S.get("pwd");
  if (password !== savedPass) {
    return respond(false, 401 /* UNAUTHORIZED */, "Wrong password.");
  }
  let secretKey = await env.S.get("secretKey");
  if (!secretKey) {
    secretKey = generateSecretKey();
    await env.S.put("secretKey", secretKey);
  }
  const secret = new TextEncoder().encode(secretKey);
  const { userID } = globalThis.globalConfig;
  const jwtToken = await new SignJWT({ userID }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("24h").sign(secret);
  return respond(true, 200 /* OK */, "Successfully generated Auth token", null, {
    "Set-Cookie": `jwtToken=${jwtToken}; HttpOnly; Secure; Max-Age=${7 * 24 * 60 * 60}; Path=/; SameSite=Strict`,
    "Content-Type": "text/plain"
  });
}
function generateSecretKey() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function Authenticate(request, env) {
  try {
    const secretKey = await env.S.get("secretKey");
    if (secretKey === null) {
      console.log("Secret key not found in KV.");
      return false;
    }
    const secret = new TextEncoder().encode(secretKey);
    const cookie = request.headers.get("Cookie")?.match(/(^|;\s*)jwtToken=([^;]*)/);
    const token = cookie ? cookie[2] : null;
    if (!token) {
      console.log("Unauthorized: Token not available!");
      return false;
    }
    const { payload } = await jwtVerify(token, secret);
    console.log(`Successfully authenticated, User ID: ${payload.userID}`);
    return true;
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    console.log(message2);
    return false;
  }
}
async function resetPassword(request, env) {
  let auth = await Authenticate(request, env);
  const oldPwd = await env.S.get("pwd");
  if (oldPwd && !auth) {
    return respond(false, 401 /* UNAUTHORIZED */, "Unauthorized.");
  }
  const newPwd = await request.text();
  if (newPwd === oldPwd) {
    return respond(false, 400 /* BAD_REQUEST */, "Please enter a new Password.");
  }
  await env.S.put("pwd", newPwd);
  return respond(true, 200 /* OK */, "Successfully logged in!", null, {
    "Set-Cookie": "jwtToken=; Path=/; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Content-Type": "text/plain"
  });
}

// src/cores/clash/geo-assets.ts
function getGeoAssets() {
  const {
    localDNS,
    antiSanctionDNS,
    blockMalware,
    blockPhishing,
    blockCryptominers,
    blockAds,
    blockPorn,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    bypassGoogleAi,
    bypassMicrosoft,
    bypassOracle,
    bypassDocker,
    bypassAdobe,
    bypassEpicGames,
    bypassIntel,
    bypassAmd,
    bypassNvidia,
    bypassAsus,
    bypassHp,
    bypassLenovo
  } = globalThis.settings;
  return [
    {
      rule: blockMalware,
      type: "block",
      format: "text",
      geosite: "malware",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware.txt",
      geoip: "malware-cidr",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/malware-ip.txt"
    },
    {
      rule: blockPhishing,
      type: "block",
      format: "text",
      geosite: "phishing",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing.txt",
      geoip: "phishing-cidr",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/phishing-ip.txt"
    },
    {
      rule: blockCryptominers,
      type: "block",
      format: "text",
      geosite: "cryptominers",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/cryptominers.txt"
    },
    {
      rule: blockAds,
      type: "block",
      format: "text",
      geosite: "category-ads-all",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/category-ads-all.txt"
    },
    {
      rule: blockPorn,
      type: "block",
      format: "text",
      geosite: "nsfw",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/nsfw.txt"
    },
    {
      rule: bypassIran,
      type: "direct",
      dns: localDNS,
      format: "text",
      geosite: "ir",
      geoip: "ir-cidr",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ir.txt",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-clash-rules/release/ircidr.txt"
    },
    {
      rule: bypassChina,
      type: "direct",
      dns: localDNS,
      format: "yaml",
      geosite: "cn",
      geoip: "cn-cidr",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.yaml",
      geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.yaml"
    },
    {
      rule: bypassRussia,
      type: "direct",
      dns: localDNS,
      format: "yaml",
      geosite: "ru",
      geoip: "ru-cidr",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/category-ru.yaml",
      geoipURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/ru.yaml"
    },
    {
      rule: bypassOpenAi,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "openai",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/openai.yaml"
    },
    {
      rule: bypassGoogleAi,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "googleai",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/google-deepmind.yaml"
    },
    {
      rule: bypassMicrosoft,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "microsoft",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.yaml"
    },
    {
      rule: bypassOracle,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "oracle",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/oracle.yaml"
    },
    {
      rule: bypassDocker,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "docker",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/docker.yaml"
    },
    {
      rule: bypassAdobe,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "adobe",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/adobe.yaml"
    },
    {
      rule: bypassEpicGames,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "epicgames",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/epicgames.yaml"
    },
    {
      rule: bypassIntel,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "intel",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/intel.yaml"
    },
    {
      rule: bypassAmd,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "amd",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/amd.yaml"
    },
    {
      rule: bypassNvidia,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "nvidia",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/nvidia.yaml"
    },
    {
      rule: bypassAsus,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "asus",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/asus.yaml"
    },
    {
      rule: bypassHp,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "hp",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/hp.yaml"
    },
    {
      rule: bypassLenovo,
      type: "direct",
      dns: antiSanctionDNS,
      format: "yaml",
      geosite: "lenovo",
      geositeURL: "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/lenovo.yaml"
    }
  ].filter(({ rule }) => rule);
}

// src/cores/clash/dns.ts
async function buildDNS(isChain, isWarp, isPro) {
  const {
    localDNS,
    remoteDNS,
    warpRemoteDNS,
    antiSanctionDNS,
    outProxyParams,
    remoteDnsHost,
    enableIPv6,
    fakeDNS,
    allowLANConnection
  } = globalThis.settings;
  const finalLocalDNS = localDNS === "localhost" ? "system" : `${localDNS}#DIRECT`;
  const proSign = isPro ? "Pro " : "";
  const remoteDnsDetour = isWarp ? `\u{1F4A6} Warp ${proSign}- Best Ping \u{1F680}` : isChain ? "\u{1F4A6} Best Ping \u{1F680}" : "\u2705 Selector";
  const finalRemoteDNS = `${isWarp ? warpRemoteDNS : remoteDNS}#${remoteDnsDetour}`;
  const hosts = {};
  const nameserverPolicy = {};
  if (isChain && !isWarp) {
    const { server } = outProxyParams;
    if (isDomain(server)) nameserverPolicy[server] = finalRemoteDNS;
  }
  if (remoteDnsHost.isDomain && !isWarp) {
    const { ipv4, ipv6, host } = remoteDnsHost;
    hosts[host] = ipv4.concatIf(enableIPv6, ipv6);
  }
  const geoAssets = getGeoAssets();
  const dnsRules = accDnsRules(geoAssets);
  const blockDomains = [
    ...dnsRules.block.geosites.map((geosite) => `rule-set:${geosite}`),
    ...dnsRules.block.domains.map((domain) => `+.${domain}`)
  ];
  blockDomains.forEach((value) => hosts[value] = "rcode://refused");
  const sanctionDomains = [
    ...dnsRules.bypass.antiSanctionDNS.geosites.map((geosite) => `rule-set:${geosite}`),
    ...dnsRules.bypass.antiSanctionDNS.domains.map((domain) => `+.${domain}`)
  ];
  const bypassDomains = [
    ...dnsRules.bypass.localDNS.geositeGeoips.map(({ geosite }) => `rule-set:${geosite}`),
    ...dnsRules.bypass.localDNS.geosites.map((geosite) => `rule-set:${geosite}`),
    ...dnsRules.bypass.localDNS.domains.map((domain) => `+.${domain}`)
  ];
  if (sanctionDomains.length) {
    sanctionDomains.forEach((value) => nameserverPolicy[value] = `${antiSanctionDNS}#DIRECT`);
    const { host, isHostDomain } = getDomain(antiSanctionDNS);
    if (isHostDomain) bypassDomains.push(host);
  }
  bypassDomains.forEach((value) => nameserverPolicy[value] = finalLocalDNS);
  const listen = `${allowLANConnection ? "0.0.0.0" : "127.0.0.1"}:1053`;
  let enhancedMode = "redir-host";
  let fakeDnsSettings = {};
  if (fakeDNS) {
    enhancedMode = "fake-ip";
    fakeDnsSettings = {
      "fake-ip-range": "198.18.0.1/16",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": ["+.lan", "+.local"]
    };
  }
  const dns = {
    "enable": true,
    "respect-rules": true,
    "use-system-hosts": false,
    "listen": listen,
    "ipv6": enableIPv6,
    "hosts": hosts.omitEmpty(),
    "nameserver": [finalRemoteDNS],
    "proxy-server-nameserver": [finalLocalDNS],
    "direct-nameserver": [finalLocalDNS],
    "direct-nameserver-follow-policy": true,
    "nameserver-policy": nameserverPolicy.omitEmpty(),
    "enhanced-mode": enhancedMode,
    ...fakeDnsSettings
  };
  return dns;
}

// src/cores/clash/routing.ts
function buildRoutingRules(isWarp) {
  const { blockUDP443 } = globalThis.settings;
  const geoAssets = getGeoAssets();
  const routingRules = accRoutingRules(geoAssets);
  const rules = [`GEOIP,lan,DIRECT,no-resolve`];
  if (!isWarp) {
    rules.push("NETWORK,udp,REJECT");
  } else if (blockUDP443) {
    rules.push("AND,((NETWORK,udp),(DST-PORT,443)),REJECT");
  }
  return [
    ...rules,
    ...routingRules.block.geosites.map((geosite) => `RULE-SET,${geosite},REJECT`),
    ...routingRules.block.domains.map((domain) => `DOMAIN-SUFFIX,${domain},REJECT`),
    ...routingRules.block.geoips.map((geoip) => `RULE-SET,${geoip},REJECT`),
    ...routingRules.block.ips.map((ip) => buildIpCidrRule(ip, "REJECT")),
    ...routingRules.bypass.geosites.map((geosite) => `RULE-SET,${geosite},DIRECT`),
    ...routingRules.bypass.domains.map((domain) => `DOMAIN-SUFFIX,${domain},DIRECT`),
    ...routingRules.bypass.geoips.map((geoip) => `RULE-SET,${geoip},DIRECT`),
    ...routingRules.bypass.ips.map((ip) => buildIpCidrRule(ip, "DIRECT")),
    "MATCH,\u2705 Selector"
  ];
}
function buildRuleProviders() {
  const geoAssets = getGeoAssets();
  return geoAssets.reduce((providers, asset) => {
    addRuleProvider(providers, asset);
    return providers;
  }, {}).omitEmpty();
}
function addRuleProvider(ruleProviders, ruleProvider) {
  const { geosite, geoip, geositeURL, geoipURL, format } = ruleProvider;
  const fileExtension = format === "text" ? "txt" : format;
  const defineProvider = (geo, behavior, url) => {
    ruleProviders[geo] = {
      type: "http",
      format,
      behavior,
      path: `./ruleset/${geo}.${fileExtension}`,
      interval: 86400,
      url
    };
  };
  if (geosite && geositeURL) defineProvider(geosite, "domain", geositeURL);
  if (geoip && geoipURL) defineProvider(geoip, "ipcidr", geoipURL);
}
function buildIpCidrRule(ip, proxy) {
  ip = isIPv6(ip) ? ip.replace(/\[|\]/g, "") : ip;
  const cidr = ip.includes("/") ? "" : isIPv4(ip) ? "/32" : "/128";
  return `IP-CIDR,${ip}${cidr},${proxy}`;
}

// src/cores/clash/outbounds.ts
function buildOutbound(name, type, server, port, isIPv62, tfo, tls, transport, fields) {
  return {
    "name": name,
    "type": type,
    "server": server.replace(/\[|\]/g, ""),
    "port": port,
    "ip-version": isIPv62 ? "ipv4-prefer" : "ipv4",
    "tfo": tfo,
    "udp": false,
    ...fields,
    ...tls,
    ...transport
  };
}
function buildWebsocketOutbound(protocol, remark, address, port) {
  const {
    dict: { _VL_, _TR_ },
    globalConfig: { userID, TrPass },
    settings: { fingerprint, enableTFO, enableIPv6, enableECH, echConfig }
  } = globalThis;
  const isTLS = isHttps(port);
  if (protocol === _TR_ && !isTLS) return null;
  const { host, sni, allowInsecure } = selectSniHost(address);
  const tls = isTLS ? buildTLS(protocol, "tls", allowInsecure, sni, enableECH ? echConfig : void 0, "http/1.1", fingerprint) : {};
  const transport = buildTransport("ws", void 0, generateWsPath(protocol), host, void 0, 2560);
  if (protocol === _VL_) return buildOutbound(remark, protocol, address, port, enableIPv6, enableTFO, tls, transport, {
    "uuid": userID,
    "packet-encoding": ""
  });
  return buildOutbound(remark, protocol, address, port, enableIPv6, enableTFO, tls, transport, {
    "password": TrPass
  });
}
function buildWarpOutbound(warpAccount, remark, endpoint, chain, isPro) {
  const {
    amneziaNoiseCount,
    amneziaNoiseSizeMin,
    amneziaNoiseSizeMax,
    enableIPv6
  } = globalThis.settings;
  const { host, port } = parseHostPort(endpoint, false);
  const ipVersion = enableIPv6 ? "ipv4-prefer" : "ipv4";
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = warpAccount;
  return {
    "name": remark,
    "type": "wireguard",
    "ip": "172.16.0.2/32",
    "ipv6": warpIPv6,
    "ip-version": ipVersion,
    "private-key": privateKey,
    "server": chain ? "162.159.192.1" : host,
    "port": chain ? 2408 : port,
    "public-key": publicKey,
    "allowed-ips": ["0.0.0.0/0", "::/0"],
    "reserved": reserved,
    "udp": true,
    "mtu": 1280,
    "dialer-proxy": chain || void 0,
    "amnezia-wg-option": isPro ? {
      "jc": amneziaNoiseCount,
      "jmin": amneziaNoiseSizeMin,
      "jmax": amneziaNoiseSizeMax
    } : void 0
  };
}
function buildChainOutbound() {
  const {
    dict: { _SS_, _VL_, _TR_, _VM_ },
    settings: {
      outProxy,
      outProxyParams: {
        protocol,
        server,
        port,
        user,
        pass,
        password,
        method,
        uuid,
        flow,
        security,
        type,
        sni,
        fp,
        host,
        path,
        alpn,
        pbk,
        sid,
        headerType,
        serviceName,
        aid
      }
    }
  } = globalThis;
  const { searchParams } = new URL(outProxy);
  const ed = searchParams.get("ed");
  const earlyData = ed ? +ed : void 0;
  const tls = buildTLS(protocol, security, false, sni || server, void 0, alpn, fp, pbk, sid);
  const transport = buildTransport(type, headerType, path, host, serviceName, earlyData);
  switch (protocol) {
    case "http":
      return buildOutbound("", "http", server, port, false, false, {}, {}, {
        "username": user,
        "password": pass
      });
    case "socks":
      return buildOutbound("", "socks5", server, port, false, false, {}, {}, {
        "username": user,
        "password": pass
      });
    case _SS_:
      return buildOutbound("", "ss", server, port, false, false, {}, {}, {
        "cipher": method,
        "password": password
      });
    case _VL_:
      return buildOutbound("", _VL_, server, port, false, false, tls, transport, {
        "uuid": uuid,
        "flow": flow
      });
    case _VM_:
      return buildOutbound("", _VM_, server, port, false, false, tls, transport, {
        "uuid": uuid,
        "cipher": "auto",
        "alterId": aid
      });
    case _TR_:
      if (security === "none") return void 0;
      return buildOutbound("", _TR_, server, port, false, false, tls, transport, {
        "password": password
      });
    default:
      return void 0;
  }
  ;
}
function buildUrlTest(name, proxies, isWarp) {
  const { bestWarpInterval, bestVLTRInterval } = globalThis.settings;
  return {
    "name": name,
    "type": "url-test",
    "proxies": proxies,
    "url": "https://www.google.com/generate_204",
    "interval": isWarp ? bestWarpInterval : bestVLTRInterval,
    "tolerance": 50
  };
}
function buildTLS(protocol, security, allowInsecure, sni, echConfig, alpn, fingerprint, publicKey, shortID) {
  if (!["tls", "reality"].includes(security)) return {};
  const { _TR_ } = globalThis.dict;
  const common = {
    "tls": true,
    [protocol === _TR_ ? "sni" : "servername"]: sni,
    "client-fingerprint": fingerprint === "randomized" ? "random" : fingerprint,
    "skip-cert-verify": allowInsecure
  };
  if (security === "tls") {
    return {
      ...common,
      "alpn": alpn?.split(","),
      "ech-opts": echConfig ? {
        "enable": true,
        "config": echConfig
      } : void 0
    };
  } else if (security === "reality" && publicKey && shortID) {
    return {
      ...common,
      "reality-opts": {
        "public-key": publicKey,
        "short-id": shortID
      }
    };
  } else return {};
}
function buildTransport(type, headerType, path = "/", host, serviceName, earlyData) {
  path = path?.split("?")[0];
  switch (type) {
    case "tcp":
      return headerType === "http" ? {
        "network": "http",
        "http-opts": {
          "method": "GET",
          "path": path.split(","),
          "headers": {
            "Host": host?.split(","),
            "Connection": ["keep-alive"],
            "Content-Type": ["application/octet-stream"]
          }
        }
      } : {
        "network": "tcp"
      };
    case "ws":
      return {
        "network": "ws",
        "ws-opts": {
          "path": path,
          "max-early-data": earlyData,
          "early-data-header-name": earlyData ? "Sec-WebSocket-Protocol" : void 0,
          "headers": {
            "Host": host
          }
        }
      };
    case "httpupgrade":
      const { _V2_ } = globalThis.dict;
      return {
        "network": "ws",
        "ws-opts": {
          [`${_V2_}-http-upgrade`]: true,
          [`${_V2_}-http-upgrade-fast-open`]: true,
          "path": path,
          "headers": {
            "Host": host
          }
        }
      };
    case "grpc":
      return {
        "network": "grpc",
        "grpc-opts": {
          "grpc-service-name": serviceName
        }
      };
    default:
      return {};
  }
}

// src/cores/clash/inbounds.ts
var tun = {
  "enable": true,
  "stack": "mixed",
  "auto-route": true,
  "strict-route": true,
  "auto-detect-interface": true,
  "dns-hijack": [
    "any:53",
    "tcp://any:53"
  ],
  "mtu": 9e3
};
var sniffer = {
  "enable": true,
  "force-dns-mapping": true,
  "parse-pure-ip": true,
  "override-destination": true,
  "sniff": {
    "HTTP": {
      "ports": [80, 8080, 8880, 2052, 2082, 2086, 2095]
    },
    "TLS": {
      "ports": [443, 8443, 2053, 2083, 2087, 2096]
    }
  }
};

// src/cores/clash/configs.ts
async function buildConfig(outbounds, selectorTags, proxyTags, chainTags, isChain, isWarp, isPro) {
  const { logLevel, allowLANConnection } = globalThis.settings;
  const tcpSettings = isWarp ? {} : {
    "disable-keep-alive": false,
    "keep-alive-idle": 10,
    "keep-alive-interval": 15,
    "tcp-concurrent": true
  };
  const config = {
    "mixed-port": 7890,
    "ipv6": true,
    "allow-lan": allowLANConnection,
    "unified-delay": false,
    "log-level": logLevel.replace("none", "silent"),
    "mode": "rule",
    ...tcpSettings,
    "geo-auto-update": true,
    "geo-update-interval": 168,
    "external-controller": "127.0.0.1:9090",
    "external-controller-cors": {
      "allow-origins": ["*"],
      "allow-private-network": true
    },
    "external-ui": "ui",
    "external-ui-url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
    "profile": {
      "store-selected": true,
      "store-fake-ip": true
    },
    "dns": await buildDNS(isChain, isWarp, isPro),
    "tun": tun,
    "sniffer": sniffer,
    "proxies": outbounds,
    "proxy-groups": [
      {
        "name": "\u2705 Selector",
        "type": "select",
        "proxies": selectorTags
      }
    ],
    "rule-providers": buildRuleProviders(),
    "rules": buildRoutingRules(isWarp),
    "ntp": {
      "enable": true,
      "server": "time.cloudflare.com",
      "port": 123,
      "interval": 30
    }
  };
  const name = isWarp ? `\u{1F4A6} Warp ${isPro ? "Pro " : ""}- Best Ping \u{1F680}` : "\u{1F4A6} Best Ping \u{1F680}";
  const mainUrlTest = buildUrlTest(name, proxyTags, isWarp);
  config["proxy-groups"].push(mainUrlTest);
  if (isWarp) config["proxy-groups"].push(buildUrlTest(`\u{1F4A6} WoW ${isPro ? "Pro " : ""}- Best Ping \u{1F680}`, chainTags, isWarp));
  if (isChain) config["proxy-groups"].push(buildUrlTest("\u{1F4A6} \u{1F517} Best Ping \u{1F680}", chainTags, isWarp));
  return config;
}
async function getClNormalConfig() {
  const { outProxy, ports } = globalThis.settings;
  const chainProxy = outProxy ? buildChainOutbound() : void 0;
  const isChain = !!chainProxy;
  const proxyTags = [];
  const chainTags = [];
  const outbounds = [];
  const Addresses = await getConfigAddresses(false);
  const protocols = getProtocols();
  const selectorTags = ["\u{1F4A6} Best Ping \u{1F680}"].concatIf(isChain, "\u{1F4A6} \u{1F517} Best Ping \u{1F680}");
  protocols.forEach((protocol) => {
    let protocolIndex = 1;
    ports.forEach((port) => {
      Addresses.forEach((addr) => {
        const tag2 = generateRemark(protocolIndex, port, addr, protocol, false, false);
        const outbound = buildWebsocketOutbound(protocol, tag2, addr, port);
        if (outbound) {
          proxyTags.push(tag2);
          selectorTags.push(tag2);
          outbounds.push(outbound);
          if (isChain) {
            const chainTag = generateRemark(protocolIndex, port, addr, protocol, false, true);
            let chain = structuredClone(chainProxy);
            chain["name"] = chainTag;
            chain["dialer-proxy"] = tag2;
            outbounds.push(chain);
            chainTags.push(chainTag);
            selectorTags.push(chainTag);
          }
          protocolIndex++;
        }
      });
    });
  });
  const config = await buildConfig(
    outbounds,
    selectorTags,
    proxyTags,
    chainTags,
    isChain,
    false,
    false
  );
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getClWarpConfig(request, env, isPro) {
  const { warpEndpoints } = globalThis.settings;
  const { warpAccounts } = await getDataset(request, env);
  const proxyTags = [];
  const chainTags = [];
  const outbounds = [];
  const proSign = isPro ? "Pro " : "";
  const selectorTags = [
    `\u{1F4A6} Warp ${proSign}- Best Ping \u{1F680}`,
    `\u{1F4A6} WoW ${proSign}- Best Ping \u{1F680}`
  ];
  warpEndpoints.forEach((endpoint, index) => {
    const warpTag = `\u{1F4A6} ${index + 1} - Warp ${proSign}\u{1F1EE}\u{1F1F7}`;
    proxyTags.push(warpTag);
    const wowTag = `\u{1F4A6} ${index + 1} - WoW ${proSign}\u{1F30D}`;
    chainTags.push(wowTag);
    selectorTags.push(warpTag, wowTag);
    const warpOutbound = buildWarpOutbound(warpAccounts[0], warpTag, endpoint, "", isPro);
    const wowOutbound = buildWarpOutbound(warpAccounts[1], wowTag, endpoint, warpTag, false);
    outbounds.push(warpOutbound, wowOutbound);
  });
  const config = await buildConfig(
    outbounds,
    selectorTags,
    proxyTags,
    chainTags,
    false,
    true,
    isPro
  );
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store"
    }
  });
}

// src/cores/sing-box/geo-assets.ts
function getGeoAssets2() {
  const {
    localDNS,
    antiSanctionDNS,
    blockMalware,
    blockPhishing,
    blockCryptominers,
    blockAds,
    blockPorn,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    bypassGoogleAi,
    bypassMicrosoft,
    bypassOracle,
    bypassDocker,
    bypassAdobe,
    bypassEpicGames,
    bypassIntel,
    bypassAmd,
    bypassNvidia,
    bypassAsus,
    bypassHp,
    bypassLenovo
  } = globalThis.settings;
  return [
    {
      rule: blockMalware,
      type: "block",
      geosite: "geosite-malware",
      geoip: "geoip-malware",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-malware.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-malware.srs"
    },
    {
      rule: blockPhishing,
      type: "block",
      geosite: "geosite-phishing",
      geoip: "geoip-phishing",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-phishing.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-phishing.srs"
    },
    {
      rule: blockCryptominers,
      type: "block",
      geosite: "geosite-cryptominers",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cryptominers.srs"
    },
    {
      rule: blockAds,
      type: "block",
      geosite: "geosite-category-ads-all",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ads-all.srs"
    },
    {
      rule: blockPorn,
      type: "block",
      geosite: "geosite-nsfw",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nsfw.srs"
    },
    {
      rule: bypassIran,
      type: "direct",
      dns: localDNS,
      geosite: "geosite-ir",
      geoip: "geoip-ir",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-ir.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ir.srs"
    },
    {
      rule: bypassChina,
      type: "direct",
      dns: localDNS,
      geosite: "geosite-cn",
      geoip: "geoip-cn",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-cn.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-cn.srs"
    },
    {
      rule: bypassRussia,
      type: "direct",
      dns: localDNS,
      geosite: "geosite-category-ru",
      geoip: "geoip-ru",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-category-ru.srs",
      geoipURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geoip-ru.srs"
    },
    {
      rule: bypassOpenAi,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-openai",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-openai.srs"
    },
    {
      rule: bypassGoogleAi,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-google-deepmind",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-google-deepmind.srs"
    },
    {
      rule: bypassMicrosoft,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-microsoft",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-microsoft.srs"
    },
    {
      rule: bypassOracle,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-oracle",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-oracle.srs"
    },
    {
      rule: bypassDocker,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-docker",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-docker.srs"
    },
    {
      rule: bypassAdobe,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-adobe",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-adobe.srs"
    },
    {
      rule: bypassEpicGames,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-epicgames",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-epicgames.srs"
    },
    {
      rule: bypassIntel,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-intel",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-intel.srs"
    },
    {
      rule: bypassAmd,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-amd",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-amd.srs"
    },
    {
      rule: bypassNvidia,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-nvidia",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-nvidia.srs"
    },
    {
      rule: bypassAsus,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-asus",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-asus.srs"
    },
    {
      rule: bypassHp,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-hp",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-hp.srs"
    },
    {
      rule: bypassLenovo,
      type: "direct",
      dns: antiSanctionDNS,
      geosite: "geosite-lenovo",
      geositeURL: "https://raw.githubusercontent.com/Chocolate4U/Iran-sing-box-rules/rule-set/geosite-lenovo.srs"
    }
  ].filter(({ rule }) => rule);
}

// src/cores/sing-box/dns.ts
async function buildDNS2(isWarp, isChain) {
  const {
    localDNS,
    remoteDNS,
    warpRemoteDNS,
    antiSanctionDNS,
    outProxyParams,
    remoteDnsHost,
    enableIPv6,
    fakeDNS
  } = globalThis.settings;
  const url = new URL(remoteDNS);
  const protocol = url.protocol.replace(":", "");
  const servers = [
    {
      type: isWarp ? "udp" : protocol,
      server: isWarp ? warpRemoteDNS : remoteDnsHost.host,
      detour: isWarp ? "\u{1F4A6} Warp - Best Ping \u{1F680}" : isChain ? "\u{1F4A6} Best Ping \u{1F680}" : "\u2705 Selector",
      tag: "dns-remote"
    }
  ];
  if (localDNS === "localhost") {
    addDnsServer(servers, "local", "dns-direct", void 0, void 0, void 0);
  } else {
    addDnsServer(servers, "udp", "dns-direct", localDNS, void 0, void 0);
  }
  const rules = [
    {
      clash_mode: "Direct",
      server: "dns-direct"
    },
    {
      clash_mode: "Global",
      server: "dns-remote"
    }
  ];
  if (isChain && !isWarp) {
    const { server } = outProxyParams;
    if (isDomain(server)) rules.push({
      domain: server,
      server: "dns-remote"
    });
  }
  if (remoteDnsHost.isDomain && !isWarp) {
    const { ipv4, ipv6, host } = remoteDnsHost;
    const predefined = ipv4.concatIf(enableIPv6, ipv6);
    addDnsServer(servers, "hosts", "hosts", void 0, void 0, void 0, host, predefined);
    rules.unshift({
      ip_accept_any: true,
      server: "hosts"
    });
  }
  const assets = getGeoAssets2();
  const dnsRules = accDnsRules(assets);
  const blockDomains = [
    ...dnsRules.block.geosites,
    ...dnsRules.block.domains
  ];
  if (blockDomains.length) {
    addDnsRule(
      rules,
      "reject",
      void 0,
      dnsRules.block.geosites,
      void 0,
      dnsRules.block.domains
    );
  }
  dnsRules.bypass.localDNS.geositeGeoips.forEach(({ geosite, geoip }) => {
    addDnsRule(
      rules,
      "dns-direct",
      void 0,
      [geosite],
      geoip,
      void 0
    );
  });
  const bypassDomains = [
    ...dnsRules.bypass.localDNS.geosites,
    ...dnsRules.bypass.localDNS.domains
  ];
  if (bypassDomains.length) {
    addDnsRule(
      rules,
      "dns-direct",
      void 0,
      dnsRules.bypass.localDNS.geosites,
      void 0,
      dnsRules.bypass.localDNS.domains
    );
  }
  const sanctionDomains = [
    ...dnsRules.bypass.antiSanctionDNS.geosites,
    ...dnsRules.bypass.antiSanctionDNS.domains
  ];
  if (sanctionDomains.length) {
    const dnsHost = getDomain(antiSanctionDNS);
    addDnsRule(
      rules,
      "dns-anti-sanction",
      void 0,
      dnsRules.bypass.antiSanctionDNS.geosites,
      void 0,
      dnsRules.bypass.antiSanctionDNS.domains
    );
    if (dnsHost.isHostDomain) {
      addDnsServer(servers, "https", "dns-anti-sanction", dnsHost.host, void 0, "dns-direct");
    } else {
      addDnsServer(servers, "udp", "dns-anti-sanction", antiSanctionDNS, void 0, void 0);
    }
  }
  if (fakeDNS) {
    addDnsServer(
      servers,
      "fakeip",
      "dns-fake",
      void 0,
      void 0,
      void 0,
      void 0,
      void 0,
      "198.18.0.0/15",
      enableIPv6 ? "fc00::/18" : void 0
    );
    addDnsRule(rules, "dns-fake", "tun-in", void 0, void 0, void 0, ["A", "AAAA"]);
  }
  return {
    servers,
    rules,
    strategy: enableIPv6 ? "prefer_ipv4" : "ipv4_only",
    independent_cache: true
  };
}
function addDnsServer(servers, type, tag2, server, detour, domain_resolver, host, predefined, inet4_range, inet6_range) {
  servers.push({
    type,
    server,
    detour,
    domain_resolver: domain_resolver ? {
      server: domain_resolver,
      strategy: "ipv4_only"
    } : void 0,
    predefined: host ? { [host]: predefined } : void 0,
    inet4_range,
    inet6_range,
    tag: tag2
  });
}
function addDnsRule(rules, dns, inbound, geosite, geoip, domain, query_type) {
  const isPair = geosite && geoip;
  rules.push({
    inbound,
    type: isPair ? "logical" : void 0,
    mode: isPair ? "and" : void 0,
    rules: isPair ? [
      { rule_set: geosite },
      { rule_set: geoip }
    ] : void 0,
    rule_set: geosite?.length && !geoip ? geosite : void 0,
    domain_suffix: domain?.omitEmpty(),
    query_type,
    action: dns === "reject" ? "reject" : "route",
    server: dns === "reject" ? void 0 : dns
  });
}

// src/cores/sing-box/routing.ts
function buildRoutingRules2(isWarp, isChain) {
  const { blockUDP443, enableIPv6 } = globalThis.settings;
  const rules = [
    {
      ip_cidr: "172.19.0.2",
      action: "hijack-dns"
    },
    {
      clash_mode: "Direct",
      outbound: "direct"
    },
    {
      clash_mode: "Global",
      outbound: "\u2705 Selector"
    },
    {
      action: "sniff"
    },
    {
      protocol: "dns",
      action: "hijack-dns"
    },
    {
      ip_is_private: true,
      outbound: "direct"
    }
  ];
  if (!isWarp) {
    addRoutingRule(rules, "reject", void 0, void 0, void 0, void 0, "udp");
  } else if (blockUDP443) {
    addRoutingRule(rules, "reject", void 0, void 0, void 0, void 0, "udp", "quic", 443);
  }
  const geoAssets = getGeoAssets2();
  const routingRules = accRoutingRules(geoAssets);
  const blockDomains = [
    ...routingRules.block.geosites,
    ...routingRules.block.domains
  ];
  if (blockDomains.length) {
    addRoutingRule(rules, "reject", routingRules.block.domains, void 0, routingRules.block.geosites);
  }
  const blockIPs = [
    ...routingRules.block.geoips,
    ...routingRules.block.ips
  ];
  if (blockIPs.length) {
    addRoutingRule(rules, "reject", void 0, routingRules.block.ips, void 0, routingRules.block.geoips);
  }
  const bypassDomains = [
    ...routingRules.bypass.geosites,
    ...routingRules.bypass.domains
  ];
  if (bypassDomains.length) {
    addRoutingRule(rules, "direct", routingRules.bypass.domains, void 0, routingRules.bypass.geosites);
  }
  const bypassIPs = [
    ...routingRules.bypass.geoips,
    ...routingRules.bypass.ips
  ];
  if (bypassIPs.length) {
    addRoutingRule(rules, "direct", void 0, routingRules.bypass.ips, void 0, routingRules.bypass.geoips);
  }
  const strategy = enableIPv6 ? "prefer_ipv4" : "ipv4_only";
  const ruleSets = geoAssets.reduce((sets, asset) => {
    addRuleSets(sets, asset);
    return sets;
  }, []);
  return {
    rules,
    rule_set: ruleSets.omitEmpty(),
    auto_detect_interface: true,
    default_domain_resolver: {
      server: "dns-direct",
      strategy,
      rewrite_ttl: 60
    },
    final: "\u2705 Selector"
  };
}
function addRoutingRule(rules, type, domain, ip, geosite, geoip, network, protocol, port) {
  rules.push({
    rule_set: geosite || geoip,
    domain_suffix: domain?.length ? domain : void 0,
    ip_cidr: ip?.length ? ip : void 0,
    network,
    protocol,
    port,
    action: type === "reject" ? "reject" : "route",
    outbound: type === "direct" ? "direct" : void 0
  });
}
function addRuleSets(ruleSets, geoAsset) {
  const { geosite, geositeURL, geoip, geoipURL } = geoAsset;
  const addRuleSet = (geo, url) => ruleSets.push({
    type: "remote",
    tag: geo,
    format: "binary",
    url,
    download_detour: "direct"
  });
  if (geosite && geositeURL) addRuleSet(geosite, geositeURL);
  if (geoip && geoipURL) addRuleSet(geoip, geoipURL);
}

// src/cores/sing-box/outbounds.ts
function buildOutbound2(tag2, type, server, server_port, tcp_fast_open, fields, tls, transport) {
  return {
    tag: tag2,
    type,
    server,
    server_port,
    tcp_fast_open,
    ...fields,
    tls,
    transport
  };
}
function buildWebsocketOutbound2(protocol, remark, address, port, isFragment) {
  const {
    dict: { _VL_ },
    globalConfig: { userID, TrPass },
    settings: { fingerprint, enableTFO, enableECH, echConfig }
  } = globalThis;
  const { host, sni, allowInsecure } = selectSniHost(address);
  const transport = buildTransport2("ws", "none", generateWsPath(protocol), host, void 0, 2560);
  const tls = isHttps(port) ? buildTLS2(
    "tls",
    isFragment,
    allowInsecure,
    sni,
    enableECH && !isFragment ? echConfig : void 0,
    "http/1.1",
    fingerprint
  ) : void 0;
  if (protocol === _VL_) return buildOutbound2(remark, protocol, address, port, enableTFO, {
    uuid: userID,
    packet_encoding: "",
    network: "tcp"
  }, tls, transport);
  return buildOutbound2(remark, protocol, address, port, enableTFO, {
    password: TrPass,
    network: "tcp"
  }, tls, transport);
}
function buildWarpOutbound2(warpAccount, remark, endpoint, chain) {
  const { host, port } = parseHostPort(endpoint, false);
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = warpAccount;
  return {
    tag: remark,
    detour: chain || void 0,
    type: "wireguard",
    address: [
      "172.16.0.2/32",
      warpIPv6
    ],
    mtu: 1280,
    peers: [
      {
        address: chain ? "162.159.192.1" : host,
        port: chain ? 2408 : port,
        public_key: publicKey,
        reserved: base64ToDecimal(reserved),
        allowed_ips: [
          "0.0.0.0/0",
          "::/0"
        ],
        persistent_keepalive_interval: 5
      }
    ],
    private_key: privateKey
  };
}
function buildChainOutbound2() {
  const {
    dict: { _VL_, _TR_, _SS_, _VM_ },
    settings: {
      outProxy,
      outProxyParams: {
        protocol,
        server,
        port,
        user,
        pass,
        password,
        method,
        uuid,
        flow,
        security,
        type,
        sni,
        fp,
        host,
        path,
        alpn,
        pbk,
        sid,
        headerType,
        serviceName,
        aid
      }
    }
  } = globalThis;
  const { searchParams } = new URL(outProxy);
  const ed = searchParams.get("ed");
  const earlyData = ed ? +ed : void 0;
  const tls = buildTLS2(security, false, false, sni || server, void 0, alpn, fp, pbk, sid);
  const transport = buildTransport2(type, headerType, path, host, serviceName, earlyData);
  switch (protocol) {
    case "http":
      return buildOutbound2("", protocol, server, port, false, {
        username: user,
        password: pass
      });
    case "socks":
      return buildOutbound2("", protocol, server, port, false, {
        username: user,
        password: pass,
        version: "5",
        network: "tcp"
      });
    case _SS_:
      return buildOutbound2("", protocol, server, port, false, {
        method,
        password,
        network: "tcp"
      });
    case _VL_:
      return buildOutbound2("", protocol, server, port, false, {
        uuid,
        flow,
        network: "tcp"
      }, tls, transport);
    case _VM_:
      return buildOutbound2("", protocol, server, port, false, {
        uuid,
        security: "auto",
        alter_id: aid,
        network: "tcp"
      }, tls, transport);
    case _TR_:
      return buildOutbound2("", protocol, server, port, false, {
        password,
        network: "tcp"
      }, tls, transport);
    default:
      return void 0;
  }
  ;
}
function buildUrlTest2(tag2, outboundTags, isWarp) {
  const { bestWarpInterval, bestVLTRInterval } = globalThis.settings;
  return {
    type: "urltest",
    tag: tag2,
    outbounds: outboundTags,
    url: "https://www.google.com/generate_204",
    interrupt_exist_connections: false,
    interval: isWarp ? `${bestWarpInterval}s` : `${bestVLTRInterval}s`
  };
}
function buildTLS2(security, isFragment, allowInsecure, sni, echConfig, alpn, fingerprint, publicKey, shortID) {
  if (!["tls", "reality"].includes(security)) return void 0;
  const tlsAlpns = alpn?.split(",").filter((value) => value !== "h2");
  const tls = {
    enabled: true,
    server_name: sni,
    record_fragment: isFragment,
    insecure: allowInsecure,
    alpn: tlsAlpns,
    utls: {
      enabled: !!fingerprint,
      fingerprint
    },
    ech: echConfig ? {
      enabled: true,
      config: echBase64ToPEM(echConfig)
    } : void 0
  };
  if (security === "tls") return tls;
  if (security === "reality" && publicKey && shortID) return {
    ...tls,
    reality: {
      enabled: true,
      public_key: publicKey,
      short_id: shortID
    }
  };
}
function echBase64ToPEM(config) {
  const clean = config.replace(/\s+/g, "");
  const lines = [];
  for (let i = 0; i < clean.length; i += 64) {
    lines.push(clean.slice(i, i + 64));
  }
  return [
    "-----BEGIN ECH CONFIGS-----",
    ...lines,
    "-----END ECH CONFIGS-----"
  ].join("\n");
}
function buildTransport2(type, headerType, path = "/", host, serviceName, earlyData) {
  path = path?.split("?")[0];
  switch (type) {
    case "tcp":
      if (headerType === "http") return {
        type: "http",
        host: host?.split(","),
        path,
        method: "GET",
        headers: {
          "Connection": ["keep-alive"],
          "Content-Type": ["application/octet-stream"]
        }
      };
      return void 0;
    case "ws":
      return {
        type: "ws",
        path: path?.split("?ed=")[0],
        max_early_data: earlyData,
        early_data_header_name: earlyData ? "Sec-WebSocket-Protocol" : void 0,
        headers: {
          Host: host
        }
      };
    case "httpupgrade":
      return {
        type: "httpupgrade",
        host,
        path: path?.split("?ed=")[0]
      };
    case "grpc":
      return {
        type: "grpc",
        service_name: serviceName
      };
    default:
      return void 0;
  }
}

// src/cores/sing-box/inbounds.ts
var tun2 = {
  type: "tun",
  tag: "tun-in",
  address: ["172.19.0.1/28"],
  mtu: 9e3,
  auto_route: true,
  strict_route: true,
  stack: "mixed"
};
function buildMixedInbound() {
  const { allowLANConnection } = globalThis.settings;
  return {
    type: "mixed",
    tag: "mixed-in",
    listen: allowLANConnection ? "0.0.0.0" : "127.0.0.1",
    listen_port: 2080
  };
}

// src/cores/sing-box/configs.ts
async function buildConfig2(outbounds, endpoints, selectorTags, urlTestTags, secondUrlTestTags, isWarp, isChain) {
  const { logLevel } = globalThis.settings;
  const config = {
    log: {
      disabled: logLevel === "none",
      level: logLevel === "none" ? void 0 : logLevel === "warning" ? "warn" : logLevel,
      timestamp: true
    },
    dns: await buildDNS2(isWarp, isChain),
    inbounds: [
      tun2,
      buildMixedInbound()
    ],
    outbounds: [
      ...outbounds,
      {
        type: "selector",
        tag: "\u2705 Selector",
        outbounds: selectorTags,
        interrupt_exist_connections: false
      },
      {
        type: "direct",
        tag: "direct"
      }
    ],
    endpoints: endpoints.omitEmpty(),
    route: buildRoutingRules2(isWarp, isChain),
    ntp: {
      enabled: true,
      server: "time.cloudflare.com",
      server_port: 123,
      domain_resolver: "dns-direct",
      interval: "30m",
      write_to_system: false
    },
    experimental: {
      cache_file: {
        enabled: true,
        store_fakeip: true
      },
      clash_api: {
        external_controller: "127.0.0.1:9090",
        external_ui: "ui",
        default_mode: "Rule",
        external_ui_download_url: "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
        external_ui_download_detour: "direct"
      }
    }
  };
  const tag2 = isWarp ? `\u{1F4A6} Warp - Best Ping \u{1F680}` : "\u{1F4A6} Best Ping \u{1F680}";
  const mainUrlTest = buildUrlTest2(tag2, urlTestTags, isWarp);
  config.outbounds.push(mainUrlTest);
  if (isWarp) config.outbounds.push(buildUrlTest2("\u{1F4A6} WoW - Best Ping \u{1F680}", secondUrlTestTags, isWarp));
  if (isChain) config.outbounds.push(buildUrlTest2("\u{1F4A6} \u{1F517} Best Ping \u{1F680}", secondUrlTestTags, isWarp));
  return config;
}
async function getSbCustomConfig(isFragment) {
  const { outProxy, ports } = globalThis.settings;
  const chainProxy = outProxy ? buildChainOutbound2() : void 0;
  const isChain = !!chainProxy;
  const proxyTags = [];
  const chainTags = [];
  const outbounds = [];
  const protocols = getProtocols();
  const Addresses = await getConfigAddresses(isFragment);
  const totalPorts = ports.filter((port) => !isFragment || isHttps(port));
  const selectorTags = ["\u{1F4A6} Best Ping \u{1F680}"].concatIf(isChain, "\u{1F4A6} \u{1F517} Best Ping \u{1F680}");
  protocols.forEach((protocol) => {
    let protocolIndex = 1;
    totalPorts.forEach((port) => {
      Addresses.forEach((addr) => {
        const tag2 = generateRemark(protocolIndex, port, addr, protocol, isFragment, false);
        const outbound = buildWebsocketOutbound2(protocol, tag2, addr, port, isFragment);
        outbounds.push(outbound);
        proxyTags.push(tag2);
        selectorTags.push(tag2);
        if (isChain) {
          const chainTag = generateRemark(protocolIndex, port, addr, protocol, isFragment, true);
          const chain = structuredClone(chainProxy);
          chain.tag = chainTag;
          chain.detour = tag2;
          outbounds.push(chain);
          chainTags.push(chainTag);
          selectorTags.push(chainTag);
        }
        protocolIndex++;
      });
    });
  });
  const config = await buildConfig2(
    outbounds,
    [],
    selectorTags,
    proxyTags,
    chainTags,
    false,
    isChain
  );
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getSbWarpConfig(request, env) {
  const { warpEndpoints } = globalThis.settings;
  const { warpAccounts } = await getDataset(request, env);
  const proxyTags = [];
  const chainTags = [];
  const outbounds = [];
  const selectorTags = [
    "\u{1F4A6} Warp - Best Ping \u{1F680}",
    "\u{1F4A6} WoW - Best Ping \u{1F680}"
  ];
  warpEndpoints.forEach((endpoint, index) => {
    const warpTag = `\u{1F4A6} ${index + 1} - Warp \u{1F1EE}\u{1F1F7}`;
    proxyTags.push(warpTag);
    const wowTag = `\u{1F4A6} ${index + 1} - WoW \u{1F30D}`;
    chainTags.push(wowTag);
    selectorTags.push(warpTag, wowTag);
    const warpOutbound = buildWarpOutbound2(warpAccounts[0], warpTag, endpoint);
    const wowOutbound = buildWarpOutbound2(warpAccounts[1], wowTag, endpoint, warpTag);
    outbounds.push(warpOutbound, wowOutbound);
  });
  const config = await buildConfig2(
    [],
    outbounds,
    selectorTags,
    proxyTags,
    chainTags,
    true,
    false
  );
  return new Response(JSON.stringify(config, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store"
    }
  });
}

// src/cores/xray/geo-assets.ts
function getGeoAssets3() {
  const {
    localDNS,
    antiSanctionDNS,
    blockMalware,
    blockPhishing,
    blockCryptominers,
    blockAds,
    blockPorn,
    bypassIran,
    bypassChina,
    bypassRussia,
    bypassOpenAi,
    bypassGoogleAi,
    bypassMicrosoft,
    bypassOracle,
    bypassDocker,
    bypassAdobe,
    bypassEpicGames,
    bypassIntel,
    bypassAmd,
    bypassNvidia,
    bypassAsus,
    bypassHp,
    bypassLenovo
  } = globalThis.settings;
  return [
    { rule: blockAds, type: "block", geosite: "geosite:category-ads-all" },
    { rule: blockAds, type: "block", geosite: "geosite:category-ads-ir" },
    { rule: blockPorn, type: "block", geosite: "geosite:category-porn" },
    { rule: blockMalware, type: "block", geosite: "geosite:malware", geoip: "geoip:malware" },
    { rule: blockPhishing, type: "block", geosite: "geosite:phishing", geoip: "geoip:phishing" },
    { rule: blockCryptominers, type: "block", geosite: "geosite:cryptominers" },
    { rule: bypassIran, type: "direct", geosite: "geosite:category-ir", geoip: "geoip:ir", dns: localDNS },
    { rule: bypassChina, type: "direct", geosite: "geosite:cn", geoip: "geoip:cn", dns: localDNS },
    { rule: bypassRussia, type: "direct", geosite: "geosite:category-ru", geoip: "geoip:ru", dns: localDNS },
    { rule: bypassOpenAi, type: "direct", geosite: "geosite:openai", dns: antiSanctionDNS },
    { rule: bypassGoogleAi, type: "direct", geosite: "geosite:google-deepmind", dns: antiSanctionDNS },
    { rule: bypassMicrosoft, type: "direct", geosite: "geosite:microsoft", dns: antiSanctionDNS },
    { rule: bypassOracle, type: "direct", geosite: "geosite:oracle", dns: antiSanctionDNS },
    { rule: bypassDocker, type: "direct", geosite: "geosite:docker", dns: antiSanctionDNS },
    { rule: bypassAdobe, type: "direct", geosite: "geosite:adobe", dns: antiSanctionDNS },
    { rule: bypassEpicGames, type: "direct", geosite: "geosite:epicgames", dns: antiSanctionDNS },
    { rule: bypassIntel, type: "direct", geosite: "geosite:intel", dns: antiSanctionDNS },
    { rule: bypassAmd, type: "direct", geosite: "geosite:amd", dns: antiSanctionDNS },
    { rule: bypassNvidia, type: "direct", geosite: "geosite:nvidia", dns: antiSanctionDNS },
    { rule: bypassAsus, type: "direct", geosite: "geosite:asus", dns: antiSanctionDNS },
    { rule: bypassHp, type: "direct", geosite: "geosite:hp", dns: antiSanctionDNS },
    { rule: bypassLenovo, type: "direct", geosite: "geosite:lenovo", dns: antiSanctionDNS }
  ].filter(({ rule }) => rule);
}

// src/cores/xray/dns.ts
async function buildDNS3(outboundAddrs, isWorkerLess, isWarp, domainToStaticIPs, customDns, customDnsHosts) {
  const {
    localDNS,
    remoteDNS,
    warpRemoteDNS,
    antiSanctionDNS,
    remoteDnsHost,
    enableIPv6,
    fakeDNS
  } = globalThis.settings;
  const hosts = {};
  const servers = [];
  const fakeDnsDomains = [];
  if (remoteDnsHost.isDomain && !isWorkerLess && !isWarp) {
    const { ipv4, ipv6, host } = remoteDnsHost;
    hosts[host] = ipv4.concatIf(enableIPv6, ipv6);
  }
  if (domainToStaticIPs) {
    const { ipv4, ipv6 } = await resolveDNS(domainToStaticIPs, enableIPv6);
    hosts[domainToStaticIPs] = [...ipv4, ...ipv6];
  }
  let skipFallback = true;
  let finalRemoteDNS = isWarp ? warpRemoteDNS : remoteDNS;
  if (isWorkerLess) {
    finalRemoteDNS = `https://${customDns}/dns-query`;
    if (customDns && customDnsHosts) hosts[customDns] = customDnsHosts;
    skipFallback = false;
  }
  const remoteDnsServer = buildDnsServer(finalRemoteDNS, void 0, void 0, void 0, void 0, "remote-dns");
  servers.push(remoteDnsServer);
  const geoAssets = getGeoAssets3();
  const dnsRules = accDnsRules(geoAssets);
  const blockDomains = [
    ...dnsRules.block.geosites,
    ...dnsRules.block.domains.map((domain) => `domain:${domain}`)
  ];
  blockDomains.forEach((domain) => hosts[domain] = "#3");
  dnsRules.bypass.localDNS.geositeGeoips.forEach(({ geosite, geoip }) => {
    const localDnsServer = buildDnsServer(localDNS, [geosite], [geoip], skipFallback);
    servers.push(localDnsServer);
    fakeDnsDomains.push(geosite);
  });
  const sanctionDomains = [
    ...dnsRules.bypass.antiSanctionDNS.geosites,
    ...dnsRules.bypass.antiSanctionDNS.domains.map((domain) => `domain:${domain}`)
  ];
  const bypassDomains = [
    ...dnsRules.bypass.localDNS.geosites,
    ...dnsRules.bypass.localDNS.domains.map((domain) => `domain:${domain}`),
    ...outboundAddrs.filter(isDomain).map((domain) => `full:${domain}`)
  ];
  if (sanctionDomains.length) {
    const sanctionDnsServer = buildDnsServer(antiSanctionDNS, sanctionDomains, void 0, skipFallback, true);
    servers.push(sanctionDnsServer);
    const { host, isHostDomain } = getDomain(antiSanctionDNS);
    if (isHostDomain) bypassDomains.push(`full:${host}`);
  }
  customDnsHosts?.filter(isDomain).forEach((host) => bypassDomains.push(`full:${host}`));
  if (bypassDomains.length) {
    const localDnsServer = buildDnsServer(localDNS, bypassDomains, void 0, skipFallback);
    servers.push(localDnsServer);
    fakeDnsDomains.push(...bypassDomains);
  }
  if (fakeDNS) {
    const fakeDNSServer = fakeDnsDomains.length ? buildDnsServer("fakedns", fakeDnsDomains, void 0, false, void 0) : "fakedns";
    servers.unshift(fakeDNSServer);
  }
  return {
    hosts: hosts.omitEmpty(),
    servers,
    queryStrategy: isWarp && !enableIPv6 ? "UseIPv4" : "UseIP",
    tag: "dns"
  };
}
function buildDnsServer(address, domains, expectIPs, skipFallback, finalQuery, tag2) {
  return {
    address,
    domains,
    expectIPs,
    skipFallback,
    finalQuery,
    tag: tag2
  };
}

// src/cores/xray/routing.ts
function buildRoutingRules3(isChain, isBalancer, isWorkerless, isWarp) {
  const { blockUDP443 } = globalThis.settings;
  const rules = [
    {
      inboundTag: [
        "mixed-in"
      ],
      port: 53,
      outboundTag: "dns-out",
      type: "field"
    },
    {
      inboundTag: [
        "dns-in"
      ],
      outboundTag: "dns-out",
      type: "field"
    }
  ];
  const finallOutboundTag = isChain ? "chain" : isWorkerless ? "direct" : "proxy";
  const outTag = isBalancer ? isChain ? "all-chains" : "all-proxies" : finallOutboundTag;
  const remoteDnsProxy = isBalancer ? "all-proxies" : "proxy";
  addRoutingRule2(rules, ["remote-dns"], void 0, void 0, void 0, void 0, void 0, remoteDnsProxy, isBalancer);
  addRoutingRule2(rules, ["dns"], void 0, void 0, void 0, void 0, void 0, "direct", false);
  addRoutingRule2(rules, void 0, ["geosite:private"], void 0, void 0, void 0, void 0, "direct", false);
  addRoutingRule2(rules, void 0, void 0, ["geoip:private"], void 0, void 0, void 0, "direct", false);
  if (!(isWarp || isWorkerless)) {
    addRoutingRule2(rules, void 0, void 0, void 0, void 0, "udp", void 0, "block", false);
  } else if (blockUDP443) {
    addRoutingRule2(rules, void 0, void 0, void 0, 443, "udp", void 0, "block", false);
  }
  const geoRules = getGeoAssets3();
  const routingRules = accRoutingRules(geoRules);
  const blockDomains = [
    ...routingRules.block.geosites,
    ...routingRules.block.domains.map((domain) => `domain:${domain}`)
  ];
  if (blockDomains.length) {
    addRoutingRule2(rules, void 0, blockDomains, void 0, void 0, void 0, void 0, "block");
  }
  const blockIPs = [
    ...routingRules.block.geoips,
    ...routingRules.block.ips
  ];
  if (blockIPs.length) {
    addRoutingRule2(rules, void 0, void 0, blockIPs, void 0, void 0, void 0, "block");
  }
  const bypassDomains = [
    ...routingRules.bypass.geosites,
    ...routingRules.bypass.domains.map((domain) => `domain:${domain}`)
  ];
  if (bypassDomains.length) {
    addRoutingRule2(rules, void 0, bypassDomains, void 0, void 0, void 0, void 0, "direct");
  }
  const bypassIPs = [
    ...routingRules.bypass.geoips,
    ...routingRules.bypass.ips
  ];
  if (bypassIPs.length) {
    addRoutingRule2(rules, void 0, void 0, bypassIPs, void 0, void 0, void 0, "direct");
  }
  if (isWorkerless) {
    addRoutingRule2(rules, void 0, void 0, void 0, void 0, "tcp", ["tls"], "proxy", false);
    addRoutingRule2(rules, void 0, void 0, void 0, void 0, "tcp", ["http"], "http-fragment", false);
    addRoutingRule2(rules, void 0, void 0, void 0, void 0, "udp", ["quic"], "udp-noise", false);
    addRoutingRule2(rules, void 0, void 0, void 0, "443,2053,2083,2087,2096,8443", "udp", void 0, "udp-noise", false);
  }
  const network = isWarp || isWorkerless ? "tcp,udp" : "tcp";
  addRoutingRule2(rules, void 0, void 0, void 0, void 0, network, void 0, outTag, isBalancer);
  return rules;
}
var addRoutingRule2 = (rules, inboundTag, domain, ip, port, network, protocol, outboundTag, isBalancer) => rules.push({
  inboundTag,
  domain,
  ip,
  port,
  network,
  protocol,
  balancerTag: isBalancer ? outboundTag : void 0,
  outboundTag: isBalancer ? void 0 : outboundTag,
  type: "field"
});

// src/cores/xray/inbounds.ts
function buildMixedInbound2(allowLANConnection, sniffQuic, sniffFakeDNS) {
  const destOverride = ["http", "tls"].concatIf(sniffQuic, "quic").concatIf(sniffFakeDNS, "fakedns");
  return {
    listen: allowLANConnection ? "0.0.0.0" : "127.0.0.1",
    port: 10808,
    protocol: "socks",
    settings: {
      auth: "noauth",
      udp: true
    },
    sniffing: {
      destOverride,
      enabled: true,
      routeOnly: true
    },
    tag: "mixed-in"
  };
}
function buildDokodemoInbound(allowLANConnection) {
  return {
    listen: allowLANConnection ? "0.0.0.0" : "127.0.0.1",
    port: 10853,
    protocol: "dokodemo-door",
    settings: {
      address: "1.1.1.1",
      network: "tcp,udp",
      port: 53
    },
    tag: "dns-in"
  };
}

// src/cores/xray/outbounds.ts
function buildOutbound3(protocol, tag2, enableMux, settings, streamSettings) {
  return {
    protocol,
    mux: enableMux ? {
      enabled: true,
      concurrency: 8,
      xudpConcurrency: 16,
      xudpProxyUDP443: "reject"
    } : void 0,
    settings,
    streamSettings,
    tag: tag2
  };
}
function buildFreedomOutbound(isFragment, isUdpNoises, tag2, length, interval, packets) {
  const {
    fragmentPackets,
    fragmentLengthMin,
    fragmentLengthMax,
    fragmentIntervalMin,
    fragmentIntervalMax,
    fragmentMaxSplitMin,
    fragmentMaxSplitMax,
    enableTFO,
    xrayUdpNoises,
    enableIPv6
  } = globalThis.settings;
  let freedomSettings = {};
  let streamSettings;
  if (isFragment) {
    freedomSettings = {
      fragment: {
        packets: packets || fragmentPackets,
        length: length || toRange(fragmentLengthMin, fragmentLengthMax),
        interval: interval || toRange(fragmentIntervalMin, fragmentIntervalMax),
        maxSplit: toRange(fragmentMaxSplitMin, fragmentMaxSplitMax)
      }
    };
    streamSettings = {
      sockopt: buildSockopt(true, enableTFO, "UseIP")
    };
  }
  if (isUdpNoises) {
    const freedomNoises = [];
    xrayUdpNoises.forEach((noise) => {
      const { count, ...rest } = noise;
      freedomNoises.push(...Array.from({ length: count }, () => rest));
    });
    freedomSettings = {
      ...freedomSettings,
      noises: freedomNoises,
      domainStrategy: isFragment ? void 0 : enableIPv6 ? "UseIPv4v6" : "UseIPv4"
    };
  }
  return {
    protocol: "freedom",
    settings: freedomSettings,
    streamSettings,
    tag: tag2
  };
}
function buildWebsocketOutbound3(protocol, address, port, isFragment) {
  const {
    settings: {
      fingerprint,
      enableTFO,
      enableECH,
      echConfig
    },
    globalConfig: { userID, TrPass },
    dict: { _VL_ }
  } = globalThis;
  const isTLS = isHttps(port);
  const { host, sni, allowInsecure } = selectSniHost(address);
  const tlsSettings = isTLS ? buildTlsSettings(
    sni,
    fingerprint,
    "http/1.1",
    allowInsecure,
    enableECH && !isFragment ? echConfig : void 0
  ) : void 0;
  const streamSettings = {
    network: "ws",
    ...buildTransport3("ws", "none", `${generateWsPath(protocol)}?ed=2560`, host),
    security: isTLS ? "tls" : "none",
    tlsSettings,
    sockopt: isFragment ? buildSockopt(false, false, void 0, "fragment") : buildSockopt(true, enableTFO, "UseIP")
  };
  if (protocol === _VL_) return buildOutbound3(protocol, "proxy", false, {
    vnext: [{
      address,
      port,
      users: [
        {
          id: userID,
          encryption: "none"
        }
      ]
    }]
  }, streamSettings);
  return buildOutbound3(protocol, "proxy", false, {
    servers: [{
      address,
      port,
      password: TrPass
    }]
  }, streamSettings);
}
function buildWarpOutbound3(warpAccount, endpoint, isWoW, isPro) {
  const {
    warpIPv6,
    reserved,
    publicKey,
    privateKey
  } = warpAccount;
  const { client } = globalThis.httpConfig;
  let wgSettings = {
    address: [
      "172.16.0.2/32",
      warpIPv6
    ],
    mtu: 1280,
    peers: [
      {
        endpoint: isWoW ? "162.159.192.1:2408" : endpoint,
        publicKey,
        keepAlive: 5
      }
    ],
    reserved: base64ToDecimal(reserved),
    secretKey: privateKey
  };
  const chain = isWoW ? "proxy" : isPro && client === "xray" ? "udp-noise" : "";
  const streamSettings = chain ? {
    sockopt: buildSockopt(false, false, void 0, chain)
  } : void 0;
  if (client === "xray-knocker" && !isWoW) {
    const {
      knockerNoiseMode,
      noiseCountMin,
      noiseCountMax,
      noiseSizeMin,
      noiseSizeMax,
      noiseDelayMin,
      noiseDelayMax
    } = globalThis.settings;
    wgSettings = {
      ...wgSettings,
      wnoise: knockerNoiseMode,
      wnoisecount: toRange(noiseCountMin, noiseCountMax),
      wpayloadsize: toRange(noiseSizeMin, noiseSizeMax),
      wnoisedelay: toRange(noiseDelayMin, noiseDelayMax)
    };
  }
  return {
    protocol: "wireguard",
    settings: wgSettings,
    streamSettings,
    tag: isWoW ? "chain" : "proxy"
  };
}
function buildChainOutbound3() {
  const {
    dict: { _VL_, _TR_, _SS_, _VM_ },
    settings: {
      outProxyParams: {
        protocol,
        server: address,
        port,
        user,
        pass,
        password,
        method,
        uuid,
        flow,
        security,
        type,
        sni,
        fp,
        host,
        path,
        alpn,
        pbk,
        sid,
        spx,
        headerType,
        serviceName,
        mode,
        authority
      }
    }
  } = globalThis;
  const streamSettings = {
    network: type || "raw",
    ...buildTransport3(type, headerType, path, host, serviceName, mode, authority),
    security,
    tlsSettings: security === "tls" ? buildTlsSettings(sni || address, fp, alpn, false) : void 0,
    realitySettings: security === "reality" ? buildRealitySettings(sni, fp, pbk, sid, spx) : void 0,
    sockopt: buildSockopt(false, false, "UseIPv4", "proxy")
  };
  const enableMux = !(security === "reality" || type === "grpc");
  switch (protocol) {
    case "http":
    case "socks":
      return buildOutbound3(protocol, "chain", enableMux, {
        servers: [{
          address,
          port,
          users: [{
            user,
            pass
          }]
        }]
      }, streamSettings);
    case _SS_:
      return buildOutbound3(protocol, "chain", enableMux, {
        servers: [{
          address,
          port,
          method,
          password
        }]
      }, streamSettings);
    case _VL_:
      return buildOutbound3(protocol, "chain", enableMux, {
        vnext: [{
          address,
          port,
          users: [{
            id: uuid,
            flow,
            encryption: "none"
          }]
        }]
      }, streamSettings);
    case _VM_:
      return buildOutbound3(protocol, "chain", enableMux, {
        vnext: [{
          address,
          port,
          users: [{
            id: uuid,
            security: "auto"
          }]
        }]
      }, streamSettings);
    case _TR_:
      return buildOutbound3(protocol, "chain", enableMux, {
        servers: [{
          address,
          port,
          password
        }]
      }, streamSettings);
    default:
      return void 0;
  }
}
function buildTransport3(type, headerType, path = "/", host, serviceName, mode, authority) {
  switch (type) {
    case "tcp":
    case "raw":
      return {
        rawSettings: {
          header: headerType === "http" ? {
            type: "http",
            request: {
              headers: {
                "Host": host?.split(","),
                "Accept-Encoding": ["gzip, deflate"],
                "Connection": ["keep-alive"],
                "Pragma": "no-cache"
              },
              path: path.split(","),
              method: "GET",
              version: "1.1"
            }
          } : { type: "none" }
        }
      };
    case "ws":
      return {
        wsSettings: {
          host,
          path
        }
      };
    case "httpupgrade":
      return {
        httpupgradeSettings: {
          host,
          path
        }
      };
    case "grpc":
      return {
        grpcSettings: {
          authority,
          multiMode: mode === "multi",
          serviceName
        }
      };
    default:
      return {};
  }
  ;
}
function buildSockopt(enableHappyEyeballs, tcpFastOpen, domainStrategy, dialerProxy) {
  return {
    domainStrategy,
    dialerProxy,
    tcpFastOpen: tcpFastOpen || void 0,
    happyEyeballs: enableHappyEyeballs ? {
      tryDelayMs: 250,
      prioritizeIPv6: false,
      interleave: 2,
      maxConcurrentTry: 4
    } : void 0
  };
}
function buildTlsSettings(serverName, fingerprint, alpn, allowInsecure, echConfigList) {
  return {
    serverName,
    fingerprint,
    alpn: alpn?.split(","),
    allowInsecure,
    echConfigList
  };
}
function buildRealitySettings(serverName, fingerprint, publicKey, shortId, spiderX) {
  return {
    serverName,
    fingerprint,
    publicKey,
    shortId,
    spiderX,
    show: false,
    allowInsecure: false
  };
}

// src/cores/xray/configs.ts
function buildBalancer(tag2, selector, hasFallback) {
  return {
    tag: tag2,
    selector: [selector],
    strategy: {
      type: "leastPing"
    },
    fallbackTag: hasFallback ? "proxy-2" : void 0
  };
}
async function buildConfig3(remark, outbounds, isBalancer, isChain, balancerFallback, isWarp, isWorkerLess, outboundAddrs, domainToStaticIPs, customDns, customDnsHosts) {
  const {
    fakeDNS,
    bestWarpInterval,
    bestVLTRInterval,
    logLevel,
    allowLANConnection
  } = globalThis.settings;
  let balancers, observatory;
  if (isBalancer) {
    balancers = [buildBalancer("all-proxies", "proxy", balancerFallback)].concatIf(isChain, buildBalancer("all-chains", "chain", false));
    observatory = {
      subjectSelector: isChain ? ["chain", "proxy"] : ["proxy"],
      probeUrl: "https://www.google.com/generate_204",
      probeInterval: `${isWarp ? bestWarpInterval : bestVLTRInterval}s`,
      enableConcurrency: true
    };
  }
  const config = {
    remarks: remark,
    version: {
      min: "25.10.15"
    },
    log: {
      loglevel: logLevel
    },
    dns: await buildDNS3(outboundAddrs, isWorkerLess, isWarp, domainToStaticIPs, customDns, customDnsHosts),
    inbounds: [
      buildMixedInbound2(allowLANConnection, isWorkerLess, fakeDNS),
      buildDokodemoInbound(allowLANConnection)
    ],
    outbounds: [
      ...outbounds,
      {
        protocol: "dns",
        settings: {
          nonIPQuery: "reject"
        },
        tag: "dns-out"
      },
      {
        protocol: "freedom",
        settings: {
          domainStrategy: "UseIP"
        },
        tag: "direct"
      },
      {
        protocol: "blackhole",
        settings: {
          response: {
            type: "http"
          }
        },
        tag: "block"
      }
    ],
    routing: {
      domainStrategy: "IPIfNonMatch",
      rules: buildRoutingRules3(isChain, isBalancer, isWorkerLess, isWarp),
      balancers
    },
    observatory,
    policy: {
      levels: {
        0: {
          connIdle: 300,
          handshake: 4,
          uplinkOnly: 1,
          downlinkOnly: 1
        }
      },
      system: {
        statsOutboundUplink: true,
        statsOutboundDownlink: true
      }
    },
    stats: {}
  };
  return config;
}
async function addBestPingConfigs(configs, totalAddresses, proxyOutbounds, chainOutbounds, isFragment) {
  const isChain = !!chainOutbounds.length;
  const chainSign = isChain ? "\u{1F517} " : "";
  const remark = `\u{1F4A6} ${chainSign}Best Ping F \u{1F680}`;
  const outbounds = [
    ...chainOutbounds,
    ...proxyOutbounds
  ];
  if (isFragment) {
    const fragmentOutbound = buildFreedomOutbound(true, false, "fragment");
    outbounds.push(fragmentOutbound);
  }
  const config = await buildConfig3(remark, outbounds, true, isChain, true, false, false, totalAddresses);
  if (isChain) {
    await addBestPingConfigs(configs, totalAddresses, proxyOutbounds, [], isFragment);
  }
  configs.push(config);
}
async function addBestFragmentConfigs(configs, outbound, chainProxy) {
  const {
    httpConfig: { hostName },
    settings: { fragmentIntervalMin, fragmentIntervalMax }
  } = globalThis;
  const isChain = !!chainProxy;
  const outbounds = [];
  const bestFragValues = [
    "1-5",
    "1-10",
    "10-20",
    "20-30",
    "30-40",
    "40-50",
    "50-60",
    "60-70",
    "70-80",
    "80-90",
    "90-100",
    "10-30",
    "20-40",
    "30-50",
    "40-60",
    "50-70",
    "60-80",
    "70-90",
    "80-100",
    "100-200"
  ];
  bestFragValues.forEach((fragLength, index) => {
    if (isChain) {
      const chain = modifyOutbound(chainProxy, `chain-${index + 1}`, `proxy-${index + 1}`);
      outbounds.push(chain);
    }
    const proxy = modifyOutbound(outbound, `proxy-${index + 1}`, `fragment-${index + 1}`);
    const fragInterval = toRange(fragmentIntervalMin, fragmentIntervalMax);
    const fragment = buildFreedomOutbound(true, false, `fragment-${index + 1}`, fragLength, fragInterval);
    outbounds.push(proxy, fragment);
  });
  const chainSign = isChain ? "\u{1F517} " : "";
  const config = await buildConfig3(
    `\u{1F4A6} ${chainSign}Best Fragment \u{1F60E}`,
    outbounds,
    true,
    isChain,
    false,
    false,
    false,
    [],
    hostName
  );
  if (chainProxy) {
    await addBestFragmentConfigs(configs, outbound);
  }
  configs.push(config);
}
async function addWorkerlessConfigs(configs) {
  const tlsFragment = buildFreedomOutbound(true, false, "proxy");
  const udpNoise = buildFreedomOutbound(false, true, "udp-noise");
  const httpFragment = buildFreedomOutbound(true, false, "http-fragment", void 0, void 0, "1-1");
  const outbounds = [
    tlsFragment,
    httpFragment,
    udpNoise
  ];
  const cfDnsConfig = await buildConfig3(
    `\u{1F4A6} 1 - Workerless \u2B50`,
    outbounds,
    false,
    false,
    false,
    false,
    true,
    [],
    void 0,
    "cloudflare-dns.com",
    ["cloudflare.com"]
  );
  const googleDnsConfig = await buildConfig3(
    `\u{1F4A6} 2 - Workerless \u2B50`,
    outbounds,
    false,
    false,
    false,
    false,
    true,
    [],
    void 0,
    "dns.google",
    ["8.8.8.8", "8.8.4.4"]
  );
  configs.push(cfDnsConfig, googleDnsConfig);
}
async function getXrCustomConfigs(isFragment) {
  const { outProxy, ports } = globalThis.settings;
  const chainProxy = outProxy ? buildChainOutbound3() : void 0;
  const Addresses = await getConfigAddresses(isFragment);
  const totalPorts = ports.filter((port) => !isFragment || isHttps(port));
  const protocols = getProtocols();
  const configs = [];
  const proxies = [];
  const chains = [];
  const fragment = isFragment ? [buildFreedomOutbound(true, false, "fragment")] : [];
  let index = 1;
  for (const protocol of protocols) {
    let protocolIndex = 1;
    for (const port of totalPorts) {
      for (const addr of Addresses) {
        const outbound = buildWebsocketOutbound3(protocol, addr, port, isFragment);
        const outbounds = [outbound, ...fragment];
        const proxy = modifyOutbound(outbound, `proxy-${index}`);
        proxies.push(proxy);
        const remark = generateRemark(protocolIndex, port, addr, protocol, isFragment, false);
        const config = await buildConfig3(remark, outbounds, false, false, false, false, false, [addr]);
        configs.push(config);
        if (chainProxy) {
          const remark2 = generateRemark(protocolIndex, port, addr, protocol, isFragment, true);
          const chainConfig = await buildConfig3(remark2, [chainProxy, ...outbounds], false, true, false, false, false, [addr]);
          configs.push(chainConfig);
          const chain = modifyOutbound(chainProxy, `chain-${index}`, `proxy-${index}`);
          chains.push(chain);
        }
        protocolIndex++;
        index++;
      }
    }
  }
  await addBestPingConfigs(configs, Addresses, proxies, chains, isFragment);
  if (isFragment) {
    await addBestFragmentConfigs(configs, proxies[0], chainProxy);
    await addWorkerlessConfigs(configs);
  }
  return new Response(JSON.stringify(configs, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store"
    }
  });
}
async function getXrWarpConfigs(request, env, isPro, isKnocker) {
  const { warpEndpoints } = globalThis.settings;
  const { warpAccounts } = await getDataset(request, env);
  const proIndicator = isPro ? " Pro " : " ";
  const configs = [];
  const proxies = [];
  const chains = [];
  const outboundDomains = [];
  const udpNoise = isPro && !isKnocker ? [buildFreedomOutbound(false, true, "udp-noise")] : [];
  for (const [index, endpoint] of warpEndpoints.entries()) {
    const { host } = parseHostPort(endpoint);
    if (isDomain(host)) outboundDomains.push(host);
    const warpOutbound = buildWarpOutbound3(warpAccounts[0], endpoint, false, isPro);
    const wowOutbound = buildWarpOutbound3(warpAccounts[1], endpoint, true, isPro);
    const warpConfig = await buildConfig3(
      `\u{1F4A6} ${index + 1} - Warp${proIndicator}\u{1F1EE}\u{1F1F7}`,
      [warpOutbound, ...udpNoise],
      false,
      false,
      false,
      true,
      false,
      [host]
    );
    const wowConfig = await buildConfig3(
      `\u{1F4A6} ${index + 1} - WoW${proIndicator}\u{1F30D}`,
      [wowOutbound, warpOutbound, ...udpNoise],
      false,
      true,
      false,
      true,
      false,
      [host]
    );
    configs.push(warpConfig, wowConfig);
    const proxy = modifyOutbound(warpOutbound, `proxy-${index + 1}`);
    proxies.push(proxy);
    const chain = modifyOutbound(wowOutbound, `chain-${index + 1}`, `proxy-${index + 1}`);
    chains.push(chain);
  }
  const warpBestPing = await buildConfig3(
    `\u{1F4A6} Warp${proIndicator}- Best Ping \u{1F680}`,
    [...proxies, ...udpNoise],
    true,
    false,
    false,
    true,
    false,
    outboundDomains
  );
  const wowBestPing = await buildConfig3(
    `\u{1F4A6} WoW${proIndicator}- Best Ping \u{1F680}`,
    [...chains, ...proxies, ...udpNoise],
    true,
    true,
    false,
    true,
    false,
    outboundDomains
  );
  configs.push(warpBestPing, wowBestPing);
  return new Response(JSON.stringify(configs, null, 4), {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store"
    }
  });
}
function modifyOutbound(outbound, tag2, dialerProxy) {
  const newOutbound = structuredClone(outbound);
  newOutbound.tag = tag2;
  if (dialerProxy && newOutbound.streamSettings) {
    newOutbound.streamSettings.sockopt.dialerProxy = dialerProxy;
  }
  return newOutbound;
}

// src/protocols/websocket/common.ts
import { connect } from "cloudflare:sockets";
var WS_READY_STATE_OPEN = 1;
var WS_READY_STATE_CLOSING = 2;
async function handleTCPOutBound(remoteSocket, addressRemote, portRemote, rawClientData, webSocket, VLResponseHeader, log) {
  async function connectAndWrite(address, port) {
    const tcpSocket = connect({
      hostname: address,
      port
    });
    remoteSocket.value = tcpSocket;
    log(`connected to ${address}:${port}`);
    const writer = tcpSocket.writable.getWriter();
    await writer.write(rawClientData);
    writer.releaseLock();
    return tcpSocket;
  }
  async function retry() {
    const {
      proxyMode,
      panelIPs,
      envProxyIPs,
      defaultProxyIPs,
      envPrefixes,
      defaultPrefixes
    } = globalThis.wsConfig;
    const getRandomValue = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const parseIPs = (value) => value ? value.split(",").map((val) => val.trim()).filter(Boolean) : void 0;
    if (proxyMode === "proxyip") {
      log(`direct connection failed, trying to use Proxy IP for ${addressRemote}`);
      const proxyIPs = panelIPs?.length ? panelIPs : parseIPs(envProxyIPs) ?? defaultProxyIPs;
      const proxyIP = getRandomValue(proxyIPs);
      const { host, port } = parseHostPort(proxyIP, true);
      addressRemote = host || addressRemote;
      portRemote = port || portRemote;
    } else if (proxyMode === "prefix") {
      log(`direct connection failed, trying to generate dynamic prefix for ${addressRemote}`);
      const prefixes = panelIPs?.length ? panelIPs : parseIPs(envPrefixes) ?? defaultPrefixes;
      const prefix = getRandomValue(prefixes);
      const dynamicProxyIP = await getDynamicProxyIP(addressRemote, prefix);
      if (dynamicProxyIP) {
        addressRemote = dynamicProxyIP;
      } else {
        webSocket.close(1011, "Retry connection failed: Invalid Prefix");
      }
    }
    try {
      const tcpSocket = await connectAndWrite(addressRemote, portRemote);
      tcpSocket.closed.catch((error) => console.log("retry TCP socket closed error", error)).finally(() => safeCloseWebSocket(webSocket));
      remoteSocketToWS(tcpSocket, webSocket, VLResponseHeader, null, log);
    } catch (error) {
      const message2 = error instanceof Error ? error.message : String(error);
      console.error("Retry connection failed:", error);
      webSocket.close(1011, `Retry connection failed: ${message2}`);
    }
  }
  try {
    const tcpSocket = await connectAndWrite(addressRemote, portRemote);
    remoteSocketToWS(tcpSocket, webSocket, VLResponseHeader, retry, log);
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    console.error(`Connection failed: ${error}`);
    webSocket.close(1011, `Connection failed: ${message2}`);
  }
}
async function remoteSocketToWS(remoteSocket, webSocket, VLResponseHeader, retry, log) {
  let vlHeader = VLResponseHeader;
  let hasIncomingData = false;
  const writableStream = new WritableStream({
    start() {
    },
    async write(chunk, controller) {
      hasIncomingData = true;
      if (webSocket.readyState !== WS_READY_STATE_OPEN) {
        controller.error("webSocket.readyState is not open, maybe close");
      }
      if (vlHeader) {
        webSocket.send(await new Blob([vlHeader, chunk]).arrayBuffer());
        vlHeader = null;
      } else {
        webSocket.send(chunk);
      }
    },
    close() {
      log(`remoteConnection.readable is close with hasIncomingData is ${hasIncomingData}`);
    },
    abort(reason) {
      console.error(`remoteConnection.readable abort`, reason);
      safeCloseTcpSocket(remoteSocket);
    }
  });
  try {
    await remoteSocket.readable.pipeTo(writableStream);
  } catch (error) {
    console.error("VLRemoteSocketToWS has exception.", error);
    safeCloseTcpSocket(remoteSocket);
    safeCloseWebSocket(webSocket);
  }
  if (hasIncomingData === false && retry) {
    log(`retry`);
    retry();
  }
}
function makeReadableWebSocketStream(webSocketServer, earlyDataHeader, log) {
  let readableStreamCancel = false;
  const stream = new ReadableStream({
    start(controller) {
      webSocketServer.addEventListener("message", (event) => {
        if (readableStreamCancel) return;
        const message2 = event.data;
        controller.enqueue(message2);
      });
      webSocketServer.addEventListener("close", () => {
        safeCloseWebSocket(webSocketServer);
        if (readableStreamCancel) return;
        controller.close();
      });
      webSocketServer.addEventListener("error", (err) => {
        log("webSocketServer has error");
        controller.error(err);
      });
      const { earlyData, error } = base64ToArrayBuffer(earlyDataHeader);
      if (error) {
        controller.error(error);
      } else if (earlyData) {
        controller.enqueue(earlyData);
      }
    },
    pull(_controller) {
    },
    cancel(reason) {
      if (readableStreamCancel) return;
      log(`ReadableStream was canceled, due to ${reason}`);
      readableStreamCancel = true;
      safeCloseWebSocket(webSocketServer);
    }
  });
  return stream;
}
function base64ToArrayBuffer(base64Str) {
  if (!base64Str) {
    return { earlyData: null, error: null };
  }
  try {
    base64Str = base64Str.replace(/-/g, "+").replace(/_/g, "/");
    const decode2 = atob(base64Str);
    const arryBuffer = Uint8Array.from(decode2, (c) => c.charCodeAt(0));
    return { earlyData: arryBuffer.buffer, error: null };
  } catch (error) {
    return { earlyData: null, error };
  }
}
function safeCloseTcpSocket(socket) {
  if (socket) {
    try {
      socket.close();
    } catch (error) {
      console.error("Failed to close TCP socket:", error);
    }
  }
}
function safeCloseWebSocket(socket) {
  try {
    if (socket.readyState === WS_READY_STATE_OPEN || socket.readyState === WS_READY_STATE_CLOSING) {
      socket.close();
    }
  } catch (error) {
    console.error("safeCloseWebSocket error", error);
  }
}
async function getDynamicProxyIP(address, prefix) {
  let finalAddress = address;
  if (!isIPv4(address)) {
    const { ipv4 } = await resolveDNS(address, true);
    if (ipv4.length) {
      finalAddress = ipv4[0];
    } else {
      throw new Error("Unable to find IPv4 in DNS records");
    }
  }
  return convertToNAT64IPv6(finalAddress, prefix);
}
function convertToNAT64IPv6(ipv4Address, prefix) {
  const parts = ipv4Address.split(".");
  if (parts.length !== 4) {
    throw new Error("Invalid IPv4 address");
  }
  const hex = parts.map((part) => {
    const num = parseInt(part, 10);
    if (num < 0 || num > 255) {
      throw new Error("Invalid IPv4 address");
    }
    return num.toString(16).padStart(2, "0");
  });
  const match = prefix.match(/^\[([0-9A-Fa-f:]+)\]$/);
  if (match) {
    return `[${match[1]}${hex[0]}${hex[1]}:${hex[2]}${hex[3]}]`;
  }
}

// src/protocols/websocket/vless.ts
async function VlOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = { value: null };
  let udpStreamWrite = null;
  let isDns = false;
  const writableStream = new WritableStream({
    async write(chunk) {
      if (isDns && udpStreamWrite) {
        return udpStreamWrite(chunk);
      }
      if (remoteSocketWapper.value) {
        const writer = remoteSocketWapper.value.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      const { userID } = globalThis.globalConfig;
      const {
        hasError,
        message: message2,
        portRemote = 443,
        addressRemote = "",
        rawDataIndex,
        VLVersion = new Uint8Array([0, 0]),
        isUDP
      } = parseVlHeader(chunk, userID);
      address = addressRemote;
      portWithRandomLog = `${portRemote}--${Math.random()} ${isUDP ? "udp " : "tcp "} `;
      if (hasError) {
        throw new Error(message2);
      }
      const VLResponseHeader = new Uint8Array([VLVersion[0], 0]);
      const rawClientData = chunk.slice(rawDataIndex);
      if (isUDP) {
        if (portRemote === 53) {
          isDns = true;
          const { write } = await handleUDPOutBound(webSocket, VLResponseHeader, log);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        } else {
          throw new Error("UDP proxy only enable for DNS which is port 53");
        }
      }
      handleTCPOutBound(
        remoteSocketWapper,
        addressRemote,
        portRemote,
        rawClientData,
        webSocket,
        VLResponseHeader,
        log
      );
    },
    close() {
      safeCloseTcpSocket(remoteSocketWapper.value);
    },
    abort(reason) {
      log(`readableWebSocketStream is abort`, JSON.stringify(reason));
    }
  });
  readableWebSocketStream.pipeTo(writableStream).catch((error) => {
    log("readableWebSocketStream pipeTo error", error);
    safeCloseTcpSocket(remoteSocketWapper.value);
  });
  return new Response(null, {
    status: 101,
    webSocket: client
  });
}
function parseVlHeader(VLBuffer, userID) {
  if (VLBuffer.byteLength < 24) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  const version = new Uint8Array(VLBuffer.slice(0, 1));
  const slicedBuffer = new Uint8Array(VLBuffer.slice(1, 17));
  const slicedBufferString = stringify(slicedBuffer);
  const isValidUser = slicedBufferString === userID;
  if (!isValidUser) {
    return {
      hasError: true,
      message: "invalid user"
    };
  }
  const optLength = new Uint8Array(VLBuffer.slice(17, 18))[0];
  const command = new Uint8Array(VLBuffer.slice(18 + optLength, 18 + optLength + 1))[0];
  let isUDP = false;
  if (command === 1) {
  } else if (command === 2) {
    isUDP = true;
  } else {
    return {
      hasError: true,
      message: `command ${command} is not support, command 01-tcp,02-udp,03-mux`
    };
  }
  const portIndex = 18 + optLength + 1;
  const portBuffer = VLBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  let addressIndex = portIndex + 2;
  const addressBuffer = new Uint8Array(VLBuffer.slice(addressIndex, addressIndex + 1));
  const addressType = addressBuffer[0];
  let addressLength = 0;
  let addressValueIndex = addressIndex + 1;
  let addressValue = "";
  switch (addressType) {
    case 1:
      addressLength = 4;
      addressValue = new Uint8Array(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength)).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(VLBuffer.slice(addressValueIndex, addressValueIndex + 1))[0];
      addressValueIndex += 1;
      addressValue = new TextDecoder().decode(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      break;
    case 3: {
      addressLength = 16;
      const dataView = new DataView(VLBuffer.slice(addressValueIndex, addressValueIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      addressValue = ipv6.join(":");
      break;
    }
    default:
      return {
        hasError: true,
        message: `invild  addressType is ${addressType}`
      };
  }
  if (!addressValue) {
    return {
      hasError: true,
      message: `addressValue is empty, addressType is ${addressType}`
    };
  }
  return {
    hasError: false,
    addressRemote: addressValue,
    addressType,
    portRemote,
    rawDataIndex: addressValueIndex + addressLength,
    VLVersion: version,
    isUDP
  };
}
function unsafeStringify(arr, offset = 0) {
  const byteToHex = [];
  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 256).toString(16).slice(1));
  }
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset);
  if (!isValidUUID(uuid)) {
    throw TypeError("Stringified U is invalid");
  }
  return uuid;
}
async function handleUDPOutBound(webSocket, VLResponseHeader, log) {
  let isVLHeaderSent = false;
  const transformStream = new TransformStream({
    start(_controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength; ) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPakcetLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(chunk.slice(index + 2, index + 2 + udpPakcetLength));
        index = index + 2 + udpPakcetLength;
        controller.enqueue(udpData);
      }
    },
    flush(_controller) {
    }
  });
  transformStream.readable.pipeTo(
    new WritableStream({
      async write(chunk) {
        const resp = await fetch("https://cloudflare-dns.com/dns-query", {
          method: "POST",
          headers: {
            "content-type": "application/dns-message"
          },
          body: chunk
        });
        const dnsQueryResult = await resp.arrayBuffer();
        const udpSize = dnsQueryResult.byteLength;
        const udpSizeBuffer = new Uint8Array([udpSize >> 8 & 255, udpSize & 255]);
        if (webSocket.readyState === WS_READY_STATE_OPEN) {
          log(`doh success and dns message length is ${udpSize}`);
          if (isVLHeaderSent) {
            webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          } else {
            webSocket.send(await new Blob([VLResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
            isVLHeaderSent = true;
          }
        }
      }
    })
  ).catch((error) => {
    log("dns udp has error" + error);
  });
  const writer = transformStream.writable.getWriter();
  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}

// src/protocols/websocket/trojan.ts
async function TrOverWSHandler(request) {
  const webSocketPair = new WebSocketPair();
  const [client, webSocket] = Object.values(webSocketPair);
  webSocket.accept();
  let address = "";
  let portWithRandomLog = "";
  const log = (info, event) => {
    console.log(`[${address}:${portWithRandomLog}] ${info}`, event || "");
  };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const readableWebSocketStream = makeReadableWebSocketStream(webSocket, earlyDataHeader, log);
  let remoteSocketWapper = { value: null };
  let udpStreamWrite = null;
  const writableStream = new WritableStream({
    async write(chunk, _controller) {
      if (udpStreamWrite) {
        return udpStreamWrite(chunk);
      }
      if (remoteSocketWapper.value) {
        const writer = remoteSocketWapper.value.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }
      const {
        hasError,
        message: message2,
        portRemote = 443,
        addressRemote = "",
        rawClientData
      } = parseTrHeader(chunk);
      address = addressRemote;
      portWithRandomLog = `${portRemote}--${Math.random()} tcp`;
      if (hasError) {
        throw new Error(message2);
      }
      handleTCPOutBound(
        remoteSocketWapper,
        addressRemote,
        portRemote,
        rawClientData,
        webSocket,
        null,
        log
      );
    },
    close() {
      safeCloseTcpSocket(remoteSocketWapper.value);
    },
    abort(reason) {
      log(`readableWebSocketStream is aborted`, JSON.stringify(reason));
    }
  });
  readableWebSocketStream.pipeTo(writableStream).catch((error) => {
    log("readableWebSocketStream pipeTo error", error);
    safeCloseTcpSocket(remoteSocketWapper.value);
  });
  return new Response(null, {
    status: 101,
    webSocket: client
  });
}
function parseTrHeader(buffer) {
  if (buffer.byteLength < 56) {
    return {
      hasError: true,
      message: "invalid data"
    };
  }
  let crLfIndex = 56;
  const cr = new Uint8Array(buffer.slice(crLfIndex, crLfIndex + 1))[0];
  const lf = new Uint8Array(buffer.slice(crLfIndex + 1, crLfIndex + 2))[0];
  if (cr !== 13 || lf !== 10) {
    return {
      hasError: true,
      message: "invalid header format (missing CR LF)"
    };
  }
  const password = new TextDecoder().decode(buffer.slice(0, crLfIndex));
  const { TrPass } = globalThis.globalConfig;
  if (password !== sha224(TrPass)) {
    return {
      hasError: true,
      message: "invalid password"
    };
  }
  const socks5DataBuffer = buffer.slice(crLfIndex + 2);
  if (socks5DataBuffer.byteLength < 6) {
    return {
      hasError: true,
      message: "invalid SOCKS5 request data"
    };
  }
  const view = new DataView(socks5DataBuffer);
  const cmd = view.getUint8(0);
  if (cmd !== 1) {
    return {
      hasError: true,
      message: "unsupported command, only TCP (CONNECT) is allowed"
    };
  }
  const atype = view.getUint8(1);
  let addressLength = 0;
  let addressIndex = 2;
  let address = "";
  switch (atype) {
    case 1:
      addressLength = 4;
      address = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength)).join(".");
      break;
    case 3:
      addressLength = new Uint8Array(socks5DataBuffer.slice(addressIndex, addressIndex + 1))[0];
      addressIndex += 1;
      address = new TextDecoder().decode(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      break;
    case 4: {
      addressLength = 16;
      const dataView = new DataView(socks5DataBuffer.slice(addressIndex, addressIndex + addressLength));
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(dataView.getUint16(i * 2).toString(16));
      }
      address = ipv6.join(":");
      break;
    }
    default:
      return {
        hasError: true,
        message: `invalid addressType is ${atype}`
      };
  }
  if (!address) {
    return {
      hasError: true,
      message: `address is empty, addressType is ${atype}`
    };
  }
  const portIndex = addressIndex + addressLength;
  const portBuffer = socks5DataBuffer.slice(portIndex, portIndex + 2);
  const portRemote = new DataView(portBuffer).getUint16(0);
  return {
    hasError: false,
    addressRemote: address,
    portRemote,
    rawClientData: socks5DataBuffer.slice(portIndex + 4)
  };
}
function sha224(string) {
  const rightRotate = (value, amount) => value >>> amount | value << 32 - amount;
  const h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
  const k = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ];
  const utf8Encode = (str) => {
    const utf8 = [];
    for (let i = 0; i < str.length; i++) {
      let charcode = str.charCodeAt(i);
      if (charcode < 128) {
        utf8.push(charcode);
      } else if (charcode < 2048) {
        utf8.push(192 | charcode >> 6, 128 | charcode & 63);
      } else if (charcode < 55296 || charcode >= 57344) {
        utf8.push(
          224 | charcode >> 12,
          128 | charcode >> 6 & 63,
          128 | charcode & 63
        );
      } else {
        i++;
        charcode = 65536 + ((charcode & 1023) << 10 | str.charCodeAt(i) & 1023);
        utf8.push(
          240 | charcode >> 18,
          128 | charcode >> 12 & 63,
          128 | charcode >> 6 & 63,
          128 | charcode & 63
        );
      }
    }
    return utf8;
  };
  const bytes = utf8Encode(string);
  const bitLength = bytes.length * 8;
  bytes.push(128);
  while (bytes.length % 64 !== 56) {
    bytes.push(0);
  }
  const lengthHi = Math.floor(bitLength / 4294967296);
  const lengthLo = bitLength & 4294967295;
  for (let i = 3; i >= 0; i--) {
    bytes.push(lengthHi >> i * 8 & 255);
  }
  for (let i = 3; i >= 0; i--) {
    bytes.push(lengthLo >> i * 8 & 255);
  }
  for (let offset = 0; offset < bytes.length; offset += 64) {
    const w = new Array(64).fill(0);
    for (let i = 0; i < 16; i++) {
      w[i] = bytes[offset + 4 * i] << 24 | bytes[offset + 4 * i + 1] << 16 | bytes[offset + 4 * i + 2] << 8 | bytes[offset + 4 * i + 3];
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rightRotate(w[i - 15], 7) ^ rightRotate(w[i - 15], 18) ^ w[i - 15] >>> 3;
      const s1 = rightRotate(w[i - 2], 17) ^ rightRotate(w[i - 2], 19) ^ w[i - 2] >>> 10;
      w[i] = w[i - 16] + s0 + w[i - 7] + s1 | 0;
    }
    let [a, b, c, d, e, f, g, h8] = h;
    for (let i = 0; i < 64; i++) {
      const S1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
      const ch = e & f ^ ~e & g;
      const temp1 = h8 + S1 + ch + k[i] + w[i] | 0;
      const S0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
      const maj = a & b ^ a & c ^ b & c;
      const temp2 = S0 + maj | 0;
      h8 = g;
      g = f;
      f = e;
      e = d + temp1 | 0;
      d = c;
      c = b;
      b = a;
      a = temp1 + temp2 | 0;
    }
    h[0] = h[0] + a | 0;
    h[1] = h[1] + b | 0;
    h[2] = h[2] + c | 0;
    h[3] = h[3] + d | 0;
    h[4] = h[4] + e | 0;
    h[5] = h[5] + f | 0;
    h[6] = h[6] + g | 0;
    h[7] = h[7] + h8 | 0;
  }
  return h.slice(0, 7).map((word) => ("00000000" + (word >>> 0).toString(16)).slice(-8)).join("");
}

// src/common/handlers.ts
var import_jszip = __toESM(require_jszip_min(), 1);
async function handleWebsocket(request) {
  const { pathName } = globalThis.globalConfig;
  const encodedPathConfig = pathName.replace("/", "");
  try {
    const { protocol, mode, panelIPs } = JSON.parse(atob(encodedPathConfig));
    globalThis.wsConfig = {
      ...globalThis.wsConfig,
      wsProtocol: protocol,
      proxyMode: mode,
      panelIPs
    };
    switch (protocol) {
      case "vl":
        return await VlOverWSHandler(request);
      case "tr":
        return await TrOverWSHandler(request);
      default:
        return await fallback(request);
    }
  } catch (error) {
    return new Response("Failed to parse WebSocket path config", { status: 400 /* BAD_REQUEST */ });
  }
}
async function handlePanel(request, env) {
  const { pathName } = globalThis.globalConfig;
  switch (pathName) {
    case "/app":
      return await renderPanel(request, env);
    case "/app/options":
      return await getSettings(request, env);
    case "/app/uo":
      return await updateSettings(request, env);
    case "/app/ro":
      return await resetSettings(request, env);
    case "/app/rpwd":
      return await resetPassword(request, env);
    case "/app/info":
      return await getMyIP(request);
    case "/app/uwp":
      return await updateWarpConfigs(request, env);
    case "/app/gwc":
      return await getWarpConfigs(request, env);
    default:
      return await fallback(request);
  }
}
async function renderError(error) {
  const message2 = error instanceof Error ? error.message : String(error);
  const html = await decompressHtml("H4sIAAAAAAAAA51V627TMBT+36c4M2LdpCVpuw2xkERibCAk0KZt/OBX5cYniZljR7bbriDegFfg5XgS5PSWpJu4uLkd+zv3S6O9i6s3d5+vL6GwpUh6kXuBoDKPCUqS9HpRgZQlPQCAqERLIS2oNmhj8unurfeSQNA8lLTEmMw4ziulLYFUSYvSxmTOmS1ihjOeolcTR8Alt5wKz6RUYDz0B1thlluByfn1OVxTiQJmJ/7QH0TBcn+JEVzeg0YRE54qSaDQmMUkyOjM0T5P1VaesYs1n1uhVsrCtw3tluelSigdwkTQ9P5V58xFAfUa8mxw9uL4LOuCJjS9z7WaSrYBZtkuSummKMbYE8pMQZmahzCqHur7pHoAnU/oweAIVpc/Oj3ccn/vbT4nii2ONlSd1ba7BfK8sCEMB4Pnbf11dh47KKnOuQxh0N5m3FSCLkLIBD60j75MjeXZwluVQQgpSou6DaKC59LjFkvzOCBT0noZLblYhGAWxmLpTXkbs4rmjOqDVSIP24Dd3Cyx3f0Om8UH69UW7trWCbfPqL73SsXwqcqaF9ziHyrr+OTs5cX5X1TWcOR+/1o6o9PTI9g+ni6gYtjxohW1ptGPRWytv4Vebj6ujv6Htga763bZETFDbXlKxTp9JWdMdMK/7oJjjWVTsHtGwWpqRMFyBvYil+bVRGF8BpzFBLVWui5wyiVqsh0yUTFMWsoiXuaQCmrMemQZnXYnFhU2Jm7wfVC5IglsZ2BkKiprnZWjvRlqw5UkLR1u1WbHpG4bw79iCKakQqB+RZId8HKytu0MnKaGI0HTE+d5x69ilPz6+QNuVYm24DKHOUoLc61kvhcFxagDr3atiCbJeHx5c3N1M/54eXv7+t3leBwFkw5jUDWN2tjR/DSp5pXdwoRKqbi1StMc/Rzte4vlQd916kfFsH8IcRxDHyWdCGR92N8HptJpidL6dU/X6frAjfUpY0vGusX7qzqMgrXGKFhWhysX91/6G1KnK9VbBwAA", true);
  const errorPage = html.replace("__ERROR_MESSAGE__", message2);
  return new Response(errorPage, {
    status: 200 /* OK */,
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}
async function handleLogin(request, env) {
  const { pathName } = globalThis.globalConfig;
  if (pathName === "/login") {
    return await renderLogin(request, env);
  }
  if (pathName === "/login/authenticate") {
    return await generateJWTToken(request, env);
  }
  return await fallback(request);
}
function logout() {
  return respond(true, 200 /* OK */, "Successfully logged out!", null, {
    "Set-Cookie": "jwtToken=; Secure; SameSite=None; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
    "Content-Type": "text/plain"
  });
}
async function handleSubscriptions(request, env) {
  await setSettings(request, env);
  const {
    globalConfig: { pathName },
    httpConfig: { client, subPath }
  } = globalThis;
  switch (pathName) {
    case `/sub/normal/${subPath}`:
      switch (client) {
        case "xray":
          return await getXrCustomConfigs(false);
        case "sing-box":
          return await getSbCustomConfig(false);
        case "clash":
          return await getClNormalConfig();
        default:
          break;
      }
    case `/sub/fragment/${subPath}`:
      switch (client) {
        case "xray":
          return await getXrCustomConfigs(true);
        case "sing-box":
          return await getSbCustomConfig(true);
        default:
          break;
      }
    case `/sub/warp/${subPath}`:
      switch (client) {
        case "xray":
          return await getXrWarpConfigs(request, env, false, false);
        case "sing-box":
          return await getSbWarpConfig(request, env);
        case "clash":
          return await getClWarpConfig(request, env, false);
        default:
          break;
      }
    case `/sub/warp-pro/${subPath}`:
      switch (client) {
        case "xray":
          return await getXrWarpConfigs(request, env, true, false);
        case "xray-knocker":
          return await getXrWarpConfigs(request, env, true, true);
        case "clash":
          return await getClWarpConfig(request, env, true);
        default:
          break;
      }
    default:
      return await fallback(request);
  }
}
async function updateSettings(request, env) {
  if (request.method !== "PUT") {
    return respond(false, 405 /* METHOD_NOT_ALLOWED */, "Method not allowed.");
  }
  const auth = await Authenticate(request, env);
  if (!auth) {
    return respond(false, 401 /* UNAUTHORIZED */, "Unauthorized or expired session.");
  }
  const proxySettings = await updateDataset(request, env);
  return respond(true, 200 /* OK */, "", proxySettings);
}
async function resetSettings(request, env) {
  if (request.method !== "POST") {
    return respond(false, 405 /* METHOD_NOT_ALLOWED */, "Method not allowed!");
  }
  const auth = await Authenticate(request, env);
  if (!auth) {
    return respond(false, 401 /* UNAUTHORIZED */, "Unauthorized or expired session.");
  }
  try {
    const { settings } = globalThis;
    await env.S.put("proxySettings", JSON.stringify(settings));
    return respond(true, 200 /* OK */, "", settings);
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    console.log(error);
    throw new Error(`An error occurred while updating KV: ${message2}`);
  }
}
async function getSettings(request, env) {
  const isPassSet = Boolean(await env.S.get("pwd"));
  const auth = await Authenticate(request, env);
  if (!auth) {
    return respond(false, 401 /* UNAUTHORIZED */, "Unauthorized or expired session.", { isPassSet });
  }
  const dataset = await getDataset(request, env);
  const { subPath } = globalThis.httpConfig;
  const data = {
    proxySettings: dataset.settings,
    isPassSet,
    subPath
  };
  return respond(true, 200 /* OK */, void 0, data);
}
async function fallback(request) {
  const { fallbackDomain } = globalThis.globalConfig;
  const { url, method, headers, body } = request;
  const newURL = new URL(url);
  newURL.hostname = fallbackDomain;
  newURL.protocol = "https:";
  const newRequest = new Request(newURL.toString(), {
    method,
    headers,
    body,
    redirect: "manual"
  });
  return await fetch(newRequest);
}
async function getMyIP(request) {
  const ip = await request.text();
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?nocache=${Date.now()}`);
    const geoLocation = await response.json();
    return respond(true, 200 /* OK */, "", geoLocation);
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    console.error("Error fetching IP address:", error);
    return respond(false, 500 /* INTERNAL_SERVER_ERROR */, `Error fetching IP address: ${message2}`);
  }
}
async function getWarpConfigs(request, env) {
  const {
    httpConfig: { client },
    dict: { _project_ }
  } = globalThis;
  const isPro = client === "amnezia";
  const auth = await Authenticate(request, env);
  if (!auth) {
    return new Response("Unauthorized or expired session.", { status: 401 /* UNAUTHORIZED */ });
  }
  const { warpAccounts, settings } = await getDataset(request, env);
  const { warpIPv6, publicKey, privateKey } = warpAccounts[0];
  const {
    warpEndpoints,
    warpRemoteDNS,
    amneziaNoiseCount,
    amneziaNoiseSizeMin,
    amneziaNoiseSizeMax
  } = settings;
  const zip = new import_jszip.default();
  const trimLines = (str) => str.split("\n").map((line) => line.trim()).join("\n");
  try {
    warpEndpoints?.forEach((endpoint, index) => {
      const config = `[Interface]
                PrivateKey = ${privateKey}
                Address = 172.16.0.2/32, ${warpIPv6}
                DNS = ${warpRemoteDNS}
                MTU = 1280
                ${isPro ? `Jc = ${amneziaNoiseCount}
                    Jmin = ${amneziaNoiseSizeMin}
                    Jmax = ${amneziaNoiseSizeMax}
                    S1 = 0
                    S2 = 0
                    H1 = 0
                    H2 = 0
                    H3 = 0
                    H4 = 0` : ""}
                [Peer]
                PublicKey = ${publicKey}
                AllowedIPs = 0.0.0.0/0, ::/0
                Endpoint = ${endpoint}
                PersistentKeepalive = 25`;
      zip.file(`${_project_}-Warp-${index + 1}.conf`, trimLines(config));
    });
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const arrayBuffer = await zipBlob.arrayBuffer();
    return new Response(arrayBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${_project_}-Warp-${isPro ? "Pro-" : ""}configs.zip"`
      }
    });
  } catch (error) {
    const message2 = error instanceof Error ? error.message : String(error);
    return new Response(`Error generating ZIP file: ${message2}`, { status: 500 /* INTERNAL_SERVER_ERROR */ });
  }
}
async function serveIcon() {
  const faviconBase64 = "AAABAAEAHyAAAAEAIAAoEAAAFgAAACgAAAAfAAAAQAAAAAEAIAAAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAABiAAAAkgAAAGYAAABAAAAAIgAAAA0AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAADQAAACIAAABAAAAAZgAAAJIAAABiAAAAdAAAAP8AAAD7AAAA7wAAANwAAADAAAAAngAAAHgAAABTAAAAMgAAABkAAAAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAZAAAAMwAAAFMAAAB4AAAAngAAAMAAAADcAAAA8AAAAPsAAAD/AAAAcwAAAB0AAAC3AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/AAAAO4AAADZAAAAvAAAAJsAAACAAAAAcAAAAGoAAABwAAAAgAAAAJsAAAC8AAAA2QAAAO8AAAD8AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAtgAAABwAAAAAAAAAHwAAALIAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAsgAAAB8AAAAAAAAAAAAAAAAAAAAaAAAAqQAAAP4AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD+AAAAqQAAABoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAACfAAAA/QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD9AAAAnwAAABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAJUAAAD7AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD7AAAAlQAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAAkwAAAPwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD8AAAAkwAAAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAClAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAApQAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAMgAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAxwAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEAAAA7AAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA7AAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAIsAAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/gAAAIsAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjAAAA2gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAANoAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAIAAAAD+AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP4AAAB/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArAAAA5gAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAADmAAAAKwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAKkAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAqAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjAAAA/QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/QAAAGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALwAAAOwAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAOsAAAAvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAADMAAAA/wAAAP8AAAD/AAAA/wAAAP8AAADLAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAoQAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAoAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCAAAA9gAAAP8AAAD/AAAA/wAAAPUAAABBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAN4AAAD/AAAA/wAAAP8AAADdAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAC4AAAA/wAAAP8AAAD/AAAAuAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigAAAP8AAAD/AAAA/wAAAIkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFkAAAD8AAAA/wAAAPwAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvAAAA7AAAAP8AAADsAAAALwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAM0AAAD/AAAAzQAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAACjAAAA/wAAAKMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcgAAAP8AAAByAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQAAADuAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXAAAAgAAAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//wAAD+AAAAAAAIAAAALAAAAG4AAADvAAAB74AAA+/AAAfv4AAP7/AAH+/wAB/v+AA/7/gAP+/8AH/v/AB/7/4A/+/+AP/v/gD/7/4A/+//Af/v/wH/7/8B/+//Af/v/4P/7/+D/+//g//v/4P/7/+D/+//x//v/8f/7//H/+";
  const body = Uint8Array.from(atob(faviconBase64), (c) => c.charCodeAt(0));
  return new Response(body, {
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
async function renderPanel(request, env) {
  const pwd = await env.S.get("pwd");
  if (pwd) {
    const auth = await Authenticate(request, env);
    if (!auth) {
      const { urlOrigin } = globalThis.httpConfig;
      return Response.redirect(`${urlOrigin}/login`, 302);
    }
  }
  const html = await decompressHtml("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", false);
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  });
}
async function renderLogin(request, env) {
  const auth = await Authenticate(request, env);
  if (auth) {
    const { urlOrigin } = globalThis.httpConfig;
    return Response.redirect(`${urlOrigin}/app`, 302);
  }
  const html = await decompressHtml("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", false);
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}
async function renderSecrets() {
  const html = await decompressHtml("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", false);
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8"
    }
  });
}
async function updateWarpConfigs(request, env) {
  if (request.method === "POST") {
    const auth = await Authenticate(request, env);
    if (!auth) {
      return respond(false, 401 /* UNAUTHORIZED */, "Unauthorized.");
    }
    try {
      await fetchWarpAccounts(env);
      return respond(true, 200 /* OK */, "Warp configs updated successfully!");
    } catch (error) {
      const message2 = error instanceof Error ? error.message : String(error);
      console.log(error);
      return respond(false, 500 /* INTERNAL_SERVER_ERROR */, `An error occurred while updating Warp configs: ${message2}`);
    }
  }
  return respond(false, 405 /* METHOD_NOT_ALLOWED */, "Method not allowd.");
}
async function decompressHtml(content, asString) {
  const bytes = Uint8Array.from(atob(content), (c) => c.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  if (asString) {
    const decompressedArrayBuffer = await new Response(stream).arrayBuffer();
    const decodedString = new TextDecoder().decode(decompressedArrayBuffer);
    return decodedString;
  }
  return stream;
}
async function handleDoH(request) {
  const url = new URL(request.url);
  const { subPath } = globalThis.httpConfig;
  const { dohURL } = globalThis.globalConfig;
  if (url.pathname !== `/dns-query/${subPath}`) {
    return fallback(request);
  }
  const targetURL = new URL(dohURL);
  url.searchParams.forEach((value, key) => {
    targetURL.searchParams.set(key, value);
  });
  const proxyRequest = new Request(targetURL.toString(), request);
  return fetch(proxyRequest);
}

// src/worker.ts
var worker_default = {
  async fetch(request, env) {
    try {
      const upgradeHeader = request.headers.get("Upgrade");
      init(request, env);
      if (upgradeHeader === "websocket") {
        initWs(env);
        return await handleWebsocket(request);
      } else {
        initHttp(request, env);
        const { pathName } = globalThis.globalConfig;
        const path = pathName.split("/")[1];
        switch (path) {
          case "app":
            return await handlePanel(request, env);
          case "sub":
            return await handleSubscriptions(request, env);
          case "login":
            return await handleLogin(request, env);
          case "logout":
            return logout();
          case "secrets":
            return await renderSecrets();
          case "file.ico":
            return await serveIcon();
          case `dns-query`:
            return await handleDoH(request);
          default:
            return await fallback(request);
        }
      }
    } catch (error) {
      return await renderError(error);
    }
  }
};
export {
  worker_default as default
};
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)
*/
