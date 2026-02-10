// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"ebm2U":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "419c4430349046b4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aIaTB":[function(require,module,exports,__globalThis) {
var _appScss = require("../app/app.scss");
var _gameJs = require("./core/game.js");
const game = new (0, _gameJs.Game)();
game.init();

},{"../app/app.scss":"3U8cj","./core/game.js":"jbLAf"}],"3U8cj":[function() {},{}],"jbLAf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _playerJs = require("./player.js");
var _levelJs = require("./level.js");
var _constantsJs = require("./constants.js");
var _portalJs = require("./portal.js");
var _exitScreenJs = require("./exit-screen.js");
var _splashScreenJs = require("./splash-screen.js");
var _soundtrackMp3 = require("url:../../assets/soundtrack.mp3");
var _soundtrackMp3Default = parcelHelpers.interopDefault(_soundtrackMp3);
var _armBombMp3 = require("url:../../assets/arm-bomb.mp3");
var _armBombMp3Default = parcelHelpers.interopDefault(_armBombMp3);
var _explosionMp3 = require("url:../../assets/explosion.mp3");
var _explosionMp3Default = parcelHelpers.interopDefault(_explosionMp3);
var _exitMp3 = require("url:../../assets/exit.mp3");
var _exitMp3Default = parcelHelpers.interopDefault(_exitMp3);
class Game {
    #level = new (0, _levelJs.Level)();
    #player = new (0, _playerJs.Player)();
    #portal = new (0, _portalJs.Portal)();
    #exitScreen = new (0, _exitScreenJs.ExitScreen)();
    #splashScreen = new (0, _splashScreenJs.SplashScreen)();
    #handleKeydown = (event)=>undefined;
    #inGamePlay = false;
    #audio = {
        game: {
            audioElement: document.createElement("audio"),
            sourceElement: document.createElement("source")
        },
        bomb: {
            audioElement: document.createElement("audio"),
            sourceElement: document.createElement("source")
        },
        explosion: {
            audioElement: document.createElement("audio"),
            sourceElement: document.createElement("source")
        },
        exit: {
            audioElement: document.createElement("audio"),
            sourceElement: document.createElement("source")
        }
    };
    init() {
        this.#addKeyListener();
        this.#splashScreen.render();
        this.#startSoundEffect();
    }
    #start() {
        this.#level.render();
        this.#player.render();
        this.#portal.render();
        this.#audio.game.audioElement.play();
        this.#level.onBombExplode = ()=>{
            this.#audio.explosion.audioElement.currentTime = 0;
            this.#audio.explosion.audioElement.play().catch(()=>{});
        };
    }
    #startSoundEffect() {
        const rootElement = document.getElementById("root");
        this.#audio.game.sourceElement.src = (0, _soundtrackMp3Default.default);
        this.#audio.game.sourceElement.type = "audio/mpeg";
        this.#audio.game.audioElement.loop = true;
        this.#audio.game.audioElement.autoplay = true;
        this.#audio.game.audioElement.appendChild(this.#audio.game.sourceElement);
        this.#audio.bomb.sourceElement.src = (0, _armBombMp3Default.default);
        this.#audio.bomb.sourceElement.type = "audio/mpeg";
        this.#audio.bomb.audioElement.appendChild(this.#audio.bomb.sourceElement);
        this.#audio.exit.sourceElement.src = (0, _exitMp3Default.default);
        this.#audio.exit.sourceElement.type = "audio/mpeg";
        this.#audio.exit.audioElement.appendChild(this.#audio.exit.sourceElement);
        this.#audio.explosion.sourceElement.src = (0, _explosionMp3Default.default);
        this.#audio.explosion.sourceElement.type = "audio/mpeg";
        this.#audio.explosion.audioElement.appendChild(this.#audio.explosion.sourceElement);
        rootElement.appendChild(this.#audio.game.audioElement);
        rootElement.appendChild(this.#audio.bomb.audioElement);
        rootElement.appendChild(this.#audio.explosion.audioElement);
        rootElement.appendChild(this.#audio.exit.audioElement);
    }
    #addKeyListener() {
        this.#handleKeydown = (event)=>{
            if (this.#inGamePlay === false) {
                this.#start();
                this.#splashScreen.destroy();
                this.#inGamePlay = true;
                return;
            }
            if (event.key === (0, _constantsJs.SPACE_KEY_FROM_EVENT)) {
                this.#level.armBomb(this.#player.x, this.#player.y);
                this.#audio.bomb.audioElement.play();
                return;
            }
            const direction = (0, _constantsJs.keyEventToDirection)[event.key];
            if (!direction) return;
            const canMove = this.#level.canMove(direction, this.#player.x, this.#player.y);
            this.#player.move(direction, canMove);
            if (this.#player.x === this.#portal.x && this.#player.y === this.#portal.y) this.#exitGame();
        };
        document.addEventListener("keydown", this.#handleKeydown);
    }
    #removeKeyListener() {
        document.removeEventListener("keydown", this.#handleKeydown);
    }
    #exitGame() {
        this.#removeKeyListener();
        this.#level.destroy();
        this.#player.destroy();
        this.#portal.destroy();
        this.#exitScreen.render();
        this.#audio.game.audioElement.pause();
        this.#audio.game.audioElement.currentTime = 0;
        this.#audio.exit.audioElement.currentTime = 0;
        this.#audio.exit.audioElement.play().catch(()=>{});
    }
}

},{"./player.js":"bI4VA","./level.js":"9Lul7","./constants.js":"5DmVc","./portal.js":"cOaWH","./exit-screen.js":"h7GFH","./splash-screen.js":"cC4HE","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../../assets/soundtrack.mp3":"87rVy","url:../../assets/arm-bomb.mp3":"inPiV","url:../../assets/explosion.mp3":"jMWMg","url:../../assets/exit.mp3":"ivZQh"}],"bI4VA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player);
var _playerScss = require("./player.scss");
var _constantsJs = require("./constants.js");
const MAX_FRAMES = 4;
class Player {
    x = 1;
    y = 1;
    #playerElement = document.createElement("div");
    #frame = 1;
    #direction = null;
    render() {
        this.#playerElement.classList.add("player");
        this.#playerElement.style.transform = `translate(${this.x * 50}px, ${this.y * 50}px)`;
        const rootElement = document.getElementById("root");
        rootElement.appendChild(this.#playerElement);
    }
    destroy() {
        this.#playerElement.remove();
    }
    move(newDirection, canMove) {
        this.#direction = newDirection;
        if (!canMove) {
            window.requestAnimationFrame(()=>this.#update());
            return;
        }
        switch(newDirection){
            case (0, _constantsJs.direction).LEFT:
                this.x = this.x - 1;
                break;
            case (0, _constantsJs.direction).RIGHT:
                this.x = this.x + 1;
                break;
            case (0, _constantsJs.direction).UP:
                this.y = this.y - 1;
                break;
            case (0, _constantsJs.direction).DOWN:
                this.y = this.y + 1;
                break;
        }
        window.requestAnimationFrame(()=>this.#update());
    }
    #update() {
        this.#frame++;
        if (this.#frame > MAX_FRAMES) this.#frame = 1;
        this.#playerElement.className = "player";
        this.#playerElement.classList.add(`${this.#direction}-${this.#frame}`);
        this.#playerElement.style.transform = `translate(${this.x * 50}px, ${this.y * 50}px)`;
    }
}

},{"./player.scss":"5hAdD","./constants.js":"5DmVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5hAdD":[function() {},{}],"5DmVc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "levelItemType", ()=>levelItemType);
parcelHelpers.export(exports, "direction", ()=>direction);
parcelHelpers.export(exports, "keyEventToDirection", ()=>keyEventToDirection);
parcelHelpers.export(exports, "SPACE_KEY_FROM_EVENT", ()=>SPACE_KEY_FROM_EVENT);
const levelItemType = {
    EMPTY: "Empty",
    SOFT_WALL: "SoftWall",
    HARD_WALL: "HardWall",
    OUTER_WALL: "OuterWall"
};
const direction = {
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right"
};
const keyEventToDirection = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right"
};
const SPACE_KEY_FROM_EVENT = " ";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9Lul7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Level", ()=>Level);
var _levelScss = require("./level.scss");
var _levelItemJs = require("./level-item.js");
var _constantsJs = require("./constants.js");
const LEVEL_WIDTH = 13;
const LEVEL_HEIGHT = 13;
const SOFT_WALL_RATIO = 0.3;
const MAX_FRAMES = 6;
const HALF_SECOND = 500;
const ONE_TENTH_OF_A_SECOND = 100;
class Level {
    #columns = [];
    #rootElement = document.getElementById("root");
    #levelElement = document.createElement("div");
    onBombExplode = null;
    render() {
        const createLevelItem = ()=>{
            return new (0, _levelItemJs.LevelItem)();
        };
        const createCellGroup = (column)=>{
            return new Array(LEVEL_HEIGHT).fill(null).map(createLevelItem);
        };
        this.#columns = new Array(LEVEL_WIDTH).fill(null).map(createCellGroup);
        this.#initializeWalls();
        this.#columns.forEach((column, columnIndex)=>{
            const columnElement = document.createElement("div");
            column.forEach((cell, cellIndex)=>{
                const cellElement = document.createElement("div");
                cellElement.classList.add("cell");
                cellElement.setAttribute("id", `${columnIndex},${cellIndex}`);
                switch(cell.type){
                    case (0, _constantsJs.levelItemType).SOFT_WALL:
                        cellElement.classList.add("soft-wall");
                        break;
                    case (0, _constantsJs.levelItemType).OUTER_WALL:
                        cellElement.classList.add("outer-wall");
                        break;
                    case (0, _constantsJs.levelItemType).HARD_WALL:
                        cellElement.classList.add("hard-wall");
                        break;
                }
                columnElement.appendChild(cellElement);
            });
            this.#levelElement.appendChild(columnElement);
        });
        this.#levelElement.classList.add("level");
        this.#rootElement.appendChild(this.#levelElement);
        this.#animate();
    }
    armBomb(x, y) {
        console.log("Bomb");
        const bombElement = document.createElement("div");
        bombElement.style.left = `${x * 50}px`;
        bombElement.style.top = `${y * 50}px`;
        bombElement.classList.add("bomb");
        this.#rootElement.appendChild(bombElement);
        let frame = 1;
        const animate = ()=>{
            bombElement.classList.remove(`bomb-${frame}`);
            frame = frame + 1;
            bombElement.classList.add(`bomb-${frame}`);
            if (frame === 18) {
                bombElement.remove();
                this.#removeSoftWalls(x, y);
                this.onBombExplode?.();
                return;
            }
            setTimeout(()=>{
                window.requestAnimationFrame(()=>animate(), 100);
            });
        };
        setTimeout(animate, 1000);
    }
    canMove(desiredDirection, x, y) {
        let cell = null;
        switch(desiredDirection){
            case (0, _constantsJs.direction).UP:
                cell = this.#columns[x][y - 1];
                break;
            case (0, _constantsJs.direction).DOWN:
                cell = this.#columns[x][y + 1];
                break;
            case (0, _constantsJs.direction).LEFT:
                cell = this.#columns[x - 1][y];
                break;
            case (0, _constantsJs.direction).RIGHT:
                cell = this.#columns[x + 1][y];
                break;
        }
        return cell.type === (0, _constantsJs.levelItemType).EMPTY;
    }
    destroy() {
        this.#levelElement.remove();
    }
    #initializeWalls() {
        this.#columns.forEach((column, columnIndex)=>{
            const isFirstColumn = columnIndex === 0;
            const isLastColumn = columnIndex === LEVEL_WIDTH - 1;
            column.forEach((cell, cellIndex)=>{
                if (cellIndex === 6 && columnIndex === 6) return;
                const isFirstRow = cellIndex === 0;
                const isLastRow = cellIndex === LEVEL_HEIGHT - 1;
                const isHardWall = columnIndex % 2 === 0 && cellIndex % 2 === 0;
                if (isFirstColumn || isLastColumn || isFirstRow || isLastRow) cell.type = (0, _constantsJs.levelItemType).OUTER_WALL;
                else if (isHardWall) cell.type = (0, _constantsJs.levelItemType).HARD_WALL;
                else if (Math.random() < SOFT_WALL_RATIO) cell.type = (0, _constantsJs.levelItemType).SOFT_WALL;
            });
        });
    }
    #removeSoftWalls(x, y) {
        const nodesToRemove = [];
        const right = this.#columns[x + 1]?.[y];
        if (right && right.type === (0, _constantsJs.levelItemType).SOFT_WALL) {
            right.type = (0, _constantsJs.levelItemType).EMPTY;
            const node = document.getElementById(`${x + 1},${y}`);
            nodesToRemove.push(node);
        }
        const left = this.#columns[x - 1]?.[y];
        if (left && left.type === (0, _constantsJs.levelItemType).SOFT_WALL) {
            left.type = (0, _constantsJs.levelItemType).EMPTY;
            const node = document.getElementById(`${x - 1},${y}`);
            nodesToRemove.push(node);
        }
        const up = this.#columns[x]?.[y - 1];
        if (up && up.type === (0, _constantsJs.levelItemType).SOFT_WALL) {
            up.type = (0, _constantsJs.levelItemType).EMPTY;
            const node = document.getElementById(`${x},${y - 1}`);
            nodesToRemove.push(node);
        }
        const down = this.#columns[x]?.[y + 1];
        if (down && down.type === (0, _constantsJs.levelItemType).SOFT_WALL) {
            down.type = (0, _constantsJs.levelItemType).EMPTY;
            const node = document.getElementById(`${x},${y + 1}`);
            nodesToRemove.push(node);
        }
        nodesToRemove.forEach((node)=>{
            if (node) node.classList.remove("soft-wall");
        });
    }
    #animate() {
        let frame = 1;
        const animate = ()=>{
            this.#levelElement.classList.remove(`level-${frame}`, `hard-wall-${frame}`);
            const timeout = frame === MAX_FRAMES ? HALF_SECOND : ONE_TENTH_OF_A_SECOND;
            frame = frame + 1;
            if (frame > MAX_FRAMES) frame = 1;
            this.#levelElement.classList.add(`level-${frame}`, `hard-wall-${frame}`);
            setTimeout(()=>{
                window.requestAnimationFrame(()=>animate());
            }, timeout);
        };
        animate();
    }
}

},{"./level.scss":"kycoX","./level-item.js":"4opXA","./constants.js":"5DmVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kycoX":[function() {},{}],"4opXA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LevelItem", ()=>LevelItem);
var _constantsJs = require("./constants.js");
class LevelItem {
    type = (0, _constantsJs.levelItemType).EMPTY;
}

},{"./constants.js":"5DmVc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cOaWH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Portal", ()=>Portal);
var _portalScss = require("./portal.scss");
const TOTAL_ANIMATION_FRAME = 12;
const TEN_FRAMES_PER_SECOND = 100;
class Portal {
    x = 1;
    y = 1;
    #portalElement = document.createElement("div");
    constructor(){
        this.x = this.#getRandomIndex();
        this.y = this.#getRandomIndex();
    }
    render() {
        this.#portalElement.classList.add("portal", "portal-1");
        this.#portalElement.style.cssText = `
top: ${this.y * 50}px;
left: ${this.x * 50}px;
`;
        const rootElement = document.getElementById("root");
        rootElement.appendChild(this.#portalElement);
        this.#animate();
    }
    destroy() {
        this.#portalElement.remove();
    }
    #animate() {
        let frame = 1;
        const animate = ()=>{
            this.#portalElement.classList.remove(`portal-${frame}`);
            if (frame === TOTAL_ANIMATION_FRAME) frame = 1;
            frame = frame + 1;
            this.#portalElement.classList.add(`portal-${frame}`);
            setTimeout(()=>{
                window.requestAnimationFrame(()=>animate());
            }, TEN_FRAMES_PER_SECOND);
        };
        animate();
    }
    #getRandomIndex() {
        const minIndex = 1;
        const maxIndex = 11;
        const index = Math.random() * (maxIndex - minIndex) + 1;
        const roundedIndex = Math.floor(index);
        if (roundedIndex % 2 === 0) return roundedIndex + 1;
        return roundedIndex;
    }
}

},{"./portal.scss":"3mfAq","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3mfAq":[function() {},{}],"h7GFH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExitScreen", ()=>ExitScreen);
var _exitScreenScss = require("./exit-screen.scss");
class ExitScreen {
    render() {
        const exitScreenElement = document.createElement("div");
        exitScreenElement.classList.add("exit-screen");
        const rootElement = document.getElementById("root");
        rootElement.appendChild(exitScreenElement);
    }
}

},{"./exit-screen.scss":"ayGs7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ayGs7":[function() {},{}],"cC4HE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SplashScreen", ()=>SplashScreen);
const splashScreenJpg = new URL(require("dca5f0e0f3287cc6")).toString();
const MAX_FRAMES = 2;
const HALF_SECOND = 500;
class SplashScreen {
    #splashElement = document.createElement("div");
    #animation = null;
    render() {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = `        
        .splash-screen {
    background: url("${splashScreenJpg}") no-repeat;
    background-size: 1300px 650px;
    width: 650px;
    height: 650px;
}
            
                .splash-screen-1 {
                background-position-x: 0;
        }
            
                .splash-screen-2 {
                background-position-x: -650px;
        }`;
        document.head.appendChild(styleElement);
        this.#splashElement.classList.add("splash-screen", "splash-screen-1");
        const rootElement = document.getElementById("root");
        rootElement.appendChild(this.#splashElement);
        this.#animate();
    }
    destroy() {
        this.#splashElement.remove();
        window.clearInterval(this.#animation);
    }
    #animate() {
        let frame = 1;
        const animate = ()=>{
            this.#splashElement.classList.remove(`splash-screen-${frame}`);
            frame++;
            if (frame > MAX_FRAMES) frame = 1;
            this.#splashElement.classList.add(`splash-screen-${frame}`);
        };
        this.#animation = setInterval(animate, HALF_SECOND);
    }
}

},{"dca5f0e0f3287cc6":"ab7re","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ab7re":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("splash-screen.fd341c2f.jpg") + "?" + Date.now();

},{}],"87rVy":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("soundtrack.bbbcb70e.mp3") + "?" + Date.now();

},{}],"inPiV":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("arm-bomb.c82fda31.mp3") + "?" + Date.now();

},{}],"jMWMg":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("explosion.a3cdc40c.mp3") + "?" + Date.now();

},{}],"ivZQh":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("exit.1030db0c.mp3") + "?" + Date.now();

},{}]},["ebm2U","aIaTB"], "aIaTB", "parcelRequire352e", {}, "./", "/")

//# sourceMappingURL=app.349046b4.js.map
