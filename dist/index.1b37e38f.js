// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bOz8o":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "46071e881b37e38f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fJAOe":[function(require,module,exports) {
var _variables = require("../carcatalog/variables");
var _bannerGenerate = require("../banner/bannerGenerate");
var _bannerContent = require("../banner/bannerContent");
var _bannerController = require("../banner/bannerController");
"use strict";
if (window.innerWidth > 700) {
    (0, _bannerGenerate.bannerGenerate)();
    (0, _bannerContent.bannerContent)();
    (0, _bannerController.bannerController)(_variables.brandsNames, _variables.brandsObject);
}

},{"../carcatalog/variables":"aC3lV","../banner/bannerGenerate":"iOwn7","../banner/bannerContent":"kaRJS","../banner/bannerController":"30d4m"}],"iOwn7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerGenerate", ()=>bannerGenerate);
"use strict";
function bannerGenerate() {
    document.querySelector(".carsCatalog").insertAdjacentHTML("afterbegin", `
      <div class = "subsection--content mainMenu banner ">
  
      <div class = "banner-content banner contHeigh">
      </div>
      `);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kaRJS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerContent", ()=>bannerContent);
"use strict";
function bannerContent() {
    document.querySelector(".banner-content").insertAdjacentHTML("afterbegin", `
    <div style="margin-bottom: 10px; margin-top:5px"> 
     <button class = "banner-find">
     <span class ="animate-charcter">\u{41C}\u{430}\u{440}\u{43A}\u{430}, \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{44C}</span>
     </button>
     </div>
      
     <p style="margin-top:40px;padding-bottom: 25px;"><a style="cursor:pointer;;font-size:22px; color:#1937b9; font-family:open-sans-light; " href='https://t.me/ProImportGroup/483'> \xab\u{410}\u{412}\u{422}\u{41E} \u{41F}\u{43E}\u{434} \u{417}\u{430}\u{43A}\u{430}\u{437}\xbb </a>
     <br><a href='https://t.me/ProImportGroup/483' style=" color:#1937b9;font-size:20px;font-family:open-sans-light;">\u{41F}\u{440}\u{430}\u{439}\u{441}-\u{41B}\u{438}\u{441}\u{442}</a>
     </p>
    
      <p class="banner--payment"><strong style = "color:#F90009; font-size:25px"><br>\u{41D}\u{410}\u{419}\u{414}\u{418}\u{422}\u{415} \u{421}\u{412}\u{41E}\u{419} \u{410}\u{412}\u{422}\u{41E}\u{41C}\u{41E}\u{411}\u{418}\u{41B}\u{42C} \u{41C}\u{415}\u{427}\u{422}\u{42B}
      </strong>
      <br>
      <strong style="color:#2f2f2f;"><br>\u{41E}\u{41F}\u{41B}\u{410}\u{422}\u{410} \u{41E}\u{421}\u{422}\u{410}\u{422}\u{41A}\u{410}
      <br>\u{41F}\u{41E}\u{421}\u{41B}\u{415} \u{41F}\u{420}\u{418}\u{411}\u{42B}\u{422}\u{418}\u{42F} \u{418} \u{41E}\u{421}\u{41C}\u{41E}\u{422}\u{420}\u{410}
      <br>\u{410}\u{412}\u{422}\u{41E}\u{41C}\u{41E}\u{411}\u{418}\u{41B}\u{42F} \u{41D}\u{410} \u{421}\u{412}\u{425} <br> \u{41C}\u{418}\u{41D}\u{421}\u{41A}</strong>
      </p>
   
      <p style="margin:30px 30px 0px 30px"> 
      <a href="./pages/main/shipping.html" class='banner-content-i'
      style="color:#1937b9;cursor:pointer;font-family:open-sans-light;font-size:16px">
      \u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{435}\u{435}</span> 
     </p>
  
   
    </div>`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"30d4m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerController", ()=>bannerController);
var _clearcontent = require("../globalscripts/clearcontent");
var _bannerSearchContent = require("../carsearcher/bannerSearchContent");
var _bannerBackButton = require("./bannerBackButton");
var _searcherClickButton = require("../carsearcher/searcherClickButton");
"use strict";
function bannerController(arr, obj) {
    document.querySelector(".banner-find").addEventListener("click", ()=>{
        (0, _clearcontent.clearContent)(document.querySelector(".banner-content"));
        (0, _searcherClickButton.searcherClickButton)();
        (0, _bannerSearchContent.bannerSearchContent)(arr, obj, ".banner-content");
        (0, _bannerBackButton.bannerBackButton)(".banner-content");
        (0, _searcherClickButton.searcherClickButton)();
    });
}

},{"../globalscripts/clearcontent":"dudak","../carsearcher/bannerSearchContent":"iXrrA","./bannerBackButton":"dBiOe","../carsearcher/searcherClickButton":"daeWg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXrrA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerSearchContent", ()=>bannerSearchContent);
var _searcherBackHTML = require("./searcherBackHTML");
"use strict";
function bannerSearchContent(arr, obj, elem) {
    arr.forEach((e)=>{
        document.querySelector(elem).insertAdjacentHTML("beforeend", `<div class = "banner-search banner" style=" 
        background: url('../../data/brand logos/${obj[e][0].brandtitle.toLowerCase()}.png') no-repeat 22px;
        background-size: 30px;">
    <span>${obj[e][0].brandtitle}</span>
    </div>
    `);
    });
    (0, _searcherBackHTML.searcherBackHTML)();
}

},{"./searcherBackHTML":"iV5Z0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iV5Z0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searcherBackHTML", ()=>searcherBackHTML);
"use strict";
function searcherBackHTML() {
    document.querySelector(".banner-content").insertAdjacentHTML("beforeend", `<div class = "banner-search banner banner-back">
  \u{43D}\u{430}\u{437}\u{430}\u{434}
  </div>
  `);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBiOe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerBackButton", ()=>bannerBackButton);
var _clearcontent = require("../globalscripts/clearcontent");
var _bannerContent = require("./bannerContent");
var _bannerController = require("./bannerController");
var _variables = require("../carcatalog/variables");
"use strict";
function bannerBackButton() {
    if (document.querySelector(".banner-back")) document.querySelector(".banner-back").addEventListener("click", (e)=>{
        (0, _clearcontent.clearContent)(document.querySelector(".banner-content"));
        (0, _bannerContent.bannerContent)();
        (0, _bannerController.bannerController)(_variables.brandsNames, _variables.brandsObject);
    });
}

},{"../globalscripts/clearcontent":"dudak","./bannerContent":"kaRJS","./bannerController":"30d4m","../carcatalog/variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"daeWg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searcherClickButton", ()=>searcherClickButton);
var _searcherBackHTML = require("./searcherBackHTML");
var _clearcontent = require("../globalscripts/clearcontent");
var _bannerSubSearcher = require("./bannerSubSearcher");
var _bannerBackButton = require("../banner/bannerBackButton");
var _variables = require("../carcatalog/variables");
"use strict";
function searcherClickButton() {
    document.querySelectorAll(".banner-search").forEach((e, i)=>{
        e.addEventListener("click", (e)=>{
            if (i > 0) {
                let cars;
                if (!e.target.classList.contains("banner-back")) !e.target.childNodes[1] ? cars = e.target.textContent : cars = e.target.childNodes[1].innerText;
                if (!cars) (0, _bannerBackButton.bannerBackButton)();
                cars && (cars = cars.split(" ").join(""));
                if (cars) {
                    (0, _clearcontent.clearContent)(document.querySelector(".banner-content"));
                    (0, _searcherBackHTML.searcherBackHTML)();
                    (0, _bannerSubSearcher.bannerSubSearcher)(cars, Object.values(_variables.brandsObject[cars]));
                }
            }
        });
    });
}

},{"./searcherBackHTML":"iV5Z0","../globalscripts/clearcontent":"dudak","./bannerSubSearcher":"bgSYz","../banner/bannerBackButton":"dBiOe","../carcatalog/variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgSYz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerSubSearcher", ()=>bannerSubSearcher);
var _bannerBackButtonSearcher = require("./bannerBackButtonSearcher");
var _bannerSubSearcherContent = require("./bannerSubSearcherContent");
var _bannerSubSearcherShowAllCars = require("./bannerSubSearcherShowAllCars");
var _variables = require("../carcatalog/variables");
"use strict";
function bannerSubSearcher(cars, obj) {
    (0, _bannerBackButtonSearcher.bannerBackButtonSearcher)((0, _variables.brandsNames), (0, _variables.brandsObject));
    (0, _bannerSubSearcherContent.bannerSubSearcherContent)(obj);
    (0, _bannerSubSearcherShowAllCars.bannerSubSearcherShowAllCars)(cars);
}

},{"./bannerBackButtonSearcher":"gp5E8","./bannerSubSearcherContent":"GTlQr","./bannerSubSearcherShowAllCars":"8Bqzf","../carcatalog/variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gp5E8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerBackButtonSearcher", ()=>bannerBackButtonSearcher);
var _clearcontent = require("../globalscripts/clearcontent");
var _bannerSearchContent = require("./bannerSearchContent");
var _bannerSearcherController = require("./bannerSearcherController");
"use strict";
function bannerBackButtonSearcher(brandsNames, brandsObject) {
    document.querySelector(".banner-back").addEventListener("click", (e)=>{
        (0, _clearcontent.clearContent)(document.querySelector(".banner-content"));
        (0, _bannerSearchContent.bannerSearchContent)(brandsNames, brandsObject, ".banner-content");
        (0, _bannerSearcherController.bannerSearcherController)(brandsNames, brandsObject);
    });
}

},{"../globalscripts/clearcontent":"dudak","./bannerSearchContent":"iXrrA","./bannerSearcherController":"fPJZ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPJZ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerSearcherController", ()=>bannerSearcherController);
var _searcherClickButton = require("./searcherClickButton");
var _bannerBackButton = require("../banner/bannerBackButton");
"use strict";
function bannerSearcherController(arr, obj) {
    (0, _searcherClickButton.searcherClickButton)(arr, obj);
    (0, _bannerBackButton.bannerBackButton)();
}

},{"./searcherClickButton":"daeWg","../banner/bannerBackButton":"dBiOe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GTlQr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerSubSearcherContent", ()=>bannerSubSearcherContent);
var _lazyimg = require("../carcatalog/lazyimg");
"use strict";
function bannerSubSearcherContent(obj) {
    document.querySelector(".banner-content").insertAdjacentHTML("beforeend", `
    <div class = "banner-search banner allCars" style=" 
    background: url('../../data/brand logos/${obj[0].brandtitle.toLowerCase()}.png') no-repeat 22px;
    background-size: 30px;">
    \u{412}\u{441}\u{435} \u{43C}\u{43E}\u{434}\u{435}\u{43B}\u{438} <span>${obj[0].brandtitle}</span>
    </div>
    `);
    obj.forEach((e)=>{
        const x = e.name;
        let y = x.split(" ");
        if (y[0] === "VOLKSWAGEN") y[0] = "VW";
        if (y[0] === "MERCEDES-BENZ") y[0] = "MB";
        let z = y.join("");
        (0, _lazyimg.lazyimg)(e);
        document.querySelector(".banner-content").insertAdjacentHTML("beforeend", `<div class = "allCars ${z} banner-search banner searcherGrid" style=" 
        background: url( ${e.lazyimg}) no-repeat 10px;
        background-size: 50px;">
        <span>${y.join(" ")}</span> 
    
    </a>
    `);
    });
}

},{"../carcatalog/lazyimg":"d7Dy4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Bqzf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bannerSubSearcherShowAllCars", ()=>bannerSubSearcherShowAllCars);
var _clearcontent = require("../globalscripts/clearcontent");
var _addDataBrand = require("../carcatalog/addDataBrand");
var _catalogContent = require("../carcatalog/catalogContent");
var _variables = require("../carcatalog/variables");
"use strict";
function bannerSubSearcherShowAllCars(cars) {
    document.querySelectorAll(".allCars").forEach((el)=>{
        el.addEventListener("click", (e)=>{
            (0, _clearcontent.clearContent)(document.querySelector(".carsCatalog"));
            (0, _addDataBrand.addDataBrand)(cars);
            (0, _catalogContent.catalogContent)(cars, (0, _variables.brandsObject));
            e.target.classList[1] == "banner" ? document.querySelector(".kunteynir").scrollIntoView({
                behavior: "smooth"
            }) : document.querySelector(`.${el.classList[1]}`).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

},{"../globalscripts/clearcontent":"dudak","../carcatalog/addDataBrand":"4Urj5","../carcatalog/catalogContent":"edOtl","../carcatalog/variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bOz8o","fJAOe"], "fJAOe", "parcelRequireafba")

//# sourceMappingURL=index.1b37e38f.js.map
