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
})({"2uzF8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dcfd9636953d1690";
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

},{}],"dMeSN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _variables = require("../carcatalog/variables");
var _stockJson = require("../model/data/json/stock.json");
var _stockJsonDefault = parcelHelpers.interopDefault(_stockJson);
var _convertStockJSONJs = require("../globalscripts/convertStockJSON.js");
var _stockSliderCreate = require("../newcars_slider/stockSliderCreate");
var _stockSliderContent = require("../newcars_slider/stockSliderContent");
var _stockSliderContainer = require("../newcars_slider/stockSliderContainer");
var _carSliderButtons = require("../newcars_slider/carSliderButtons");
var _stockSliderTranslateX = require("../newcars_slider/stockSliderTranslateX");
var _carSliderListeners = require("../newcars_slider/carSliderListeners");
var _lazyStockSlider = require("../newcars_slider/lazyStockSlider");
var _addPriceJs = require("../globalscripts/addPrice.js");
"use strict";
(0, _convertStockJSONJs.convertStockJSON)((0, _stockJsonDefault.default), (0, _variables.stockArr));
(0, _addPriceJs.addPrice)((0, _variables.stockArr));
if (window.innerWidth > 700) (0, _stockSliderCreate.stockSliderCreate)(document.querySelector(".banner"));
if (window.innerWidth < 700) (0, _stockSliderCreate.stockSliderCreate)(document.querySelector(".navActive"));
(0, _stockSliderContainer.stockSliderContainer)();
(0, _stockSliderContent.stockSliderContent)((0, _variables.stockArr));
(0, _stockSliderTranslateX.stockSliderTranslateX)();
(0, _carSliderButtons.carSliderButtons)();
(0, _carSliderListeners.carSliderListeners)();
(0, _lazyStockSlider.lazyStockSlider)();

},{"../carcatalog/variables":"aC3lV","../model/data/json/stock.json":"5U93E","../globalscripts/convertStockJSON.js":"bKNf9","../newcars_slider/stockSliderCreate":"95gvb","../newcars_slider/stockSliderContent":"9e9px","../newcars_slider/stockSliderContainer":"1IJBw","../newcars_slider/carSliderButtons":"fD8PO","../newcars_slider/stockSliderTranslateX":"7wcuw","../newcars_slider/carSliderListeners":"bmB9u","../newcars_slider/lazyStockSlider":"hdCq9","../globalscripts/addPrice.js":"5Tvwu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5U93E":[function(require,module,exports) {
module.exports = JSON.parse('{"cars":[{"name":"LIXIANG L7","brand":"LIXIANG","city":"\u0410\u041B\u041C\u0410\u0422\u042B","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["/data/stock_cars/lil7pro/lil7.png"],"type":"\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0433\u0438\u0431\u0440\u0438\u0434","nedc":"1100 km","edition":"PRO","engine":"449 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/li.pdf","phone":"+79818005080","youtube":"https://youtu.be/xbTuJiEHPFM?si=vbPEL_UD72PGADdV"},{"name":"LEOPARD 5","brand":"LEOPARD","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["data/carimg/leopard5.png"],"type":"PHEV","edition":"exploration","engine":"194 + 660 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/leopard5.pdf","phone":"+79818005080","review":"","fuel":"1.8 \u043B/100\u043A\u043C"},{"name":"MERCEDES-BENZ EQE SUV","brand":"MERCEDESBENZ","city":"\u0410\u041B\u041C\u0410\u0422\u042B","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["data/carimg/mercedes-benzeqesuv.png"],"type":"\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0431\u0438\u043B\u044C","nedc":"609 km","edition":"500 4MATIC","engine":"408 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/mbeqesuv.pdf","phone":"+79818005080"},{"name":"HAVAL H5","brand":"HAVAL","city":"\u0410\u041B\u041C\u0410\u0422\u042B","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["data/carimg/havalh5.png"],"type":"\u0431\u0435\u043D\u0437\u0438\u043D","edition":"2.0T AWD","fuel":"8.8 \u043B/100 \u043A\u043C","engine":"224 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/havalh5.pdf","phone":"+79818005080"},{"name":"POLAR STONE 01","brand":"POLARSTONE","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["/data/carimg/polarstone01.png"],"type":"\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0433\u0438\u0431\u0440\u0438\u0434","edition":"7 seats version","engine":"476 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/polarstone01.pdf","phone":"+79818005080","review":"","nedc":"1115 km"},{"name":"AVATR 11","brand":"AVATR","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["/data/stock_cars/avatr11/avatr11.png"],"edition":"116kw AWD 5-seats","type":"\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0431\u0438\u043B\u044C","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","nedc":"700 km","engine":"578 \u043B/\u0441","details":"/data/pdf/avatr11.pdf","phone":"+79818005080"},{"name":"VOYAH FREE 2024","brand":"VOYAH","status":"\u0412 \u041D\u0410\u041B\u0418\u0427\u0418\u0418","year":"2022","img":["/data/carimg/voyahfree2024.png"],"type":"\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0433\u0438\u0431\u0440\u0438\u0434","nedc":"860 km","edition":"exclusive luxury","engine":"694 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/voyahfree.pdf","phone":"+79110024444","review":"","youtube":"https://youtu.be/2E20rNHyQSU?si=Hrv7A4GfEZkeWl-T"},{"name":"TANK 400 Hi4-T","brand":"TANK","status":"\u0426\u0435\u043D\u0430 \'\u041F\u043E\u0434 \u041A\u043B\u044E\u0447\'","year":"2023","img":["/data/stock_cars/tank400/tank400hi4-t.png"],"type":"PHEV","edition":"functional","engine":"415 \u043B/\u0441","drive":"\u043F\u043E\u043B\u043D\u044B\u0439","details":"/data/pdf/tank400hi4-t.pdf","phone":"+79818005080","review":"","fuel":"2.6 \u043B/100\u043A\u043C"}]}');

},{}],"bKNf9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertStockJSON", ()=>convertStockJSON);
"use strict";
function convertStockJSON(database, stockArr) {
    database.cars.forEach((e)=>stockArr.push(e));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"95gvb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stockSliderCreate", ()=>stockSliderCreate);
"use strict";
function stockSliderCreate(container) {
    container.insertAdjacentHTML("beforebegin", `
<div class = 'stockContainer subsection--content'>
</div>
`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9e9px":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stockSliderContent", ()=>stockSliderContent);
var _stockSliderVars = require("./stockSliderVars");
"use strict";
function stockSliderContent(database) {
    database.forEach((e)=>{
        let x = e.name.split(" ").join("");
        (0, _stockSliderVars.arrNames).push(x);
    });
}

},{"./stockSliderVars":"F2Pgz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"F2Pgz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrNames", ()=>arrNames);
parcelHelpers.export(exports, "carName", ()=>carName);
parcelHelpers.export(exports, "curslide", ()=>curslide);
parcelHelpers.export(exports, "maxslide", ()=>maxslide);
parcelHelpers.export(exports, "isFalse", ()=>isFalse);
"use strict";
let arrNames = [];
let carName;
let curslide = 0;
const maxslide = document.querySelectorAll(".stockSlider").length - 1;
let isFalse = false;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1IJBw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stockSliderContainer", ()=>stockSliderContainer);
var _variables = require("../carcatalog/variables");
var _stockSliderVars = require("./stockSliderVars");
"use strict";
function stockSliderContainer() {
    (0, _variables.stockArr).forEach((e, i)=>{
        let arr = [];
        let arr2 = [];
        let y;
        let q;
        let carName = e.name.split(" ").join("");
        e.img.forEach((el, i)=>{
            arr.push(`<img class="stockSlider__photos__img lazystockslider ${carName} slide-${i} " src="${el}" >`);
            arr2.push(`<button class="dots__dot" data-dots="${i}"></button>`);
        });
        y = arr.join(" ");
        q = arr2.join(" ");
        document.querySelector(".stockContainer").insertAdjacentHTML("beforeend", `
<div class ='stockSlider'>
<div class = 'stockSlider__container contHeigh'>

<h3 style='font-weight:bold; color:#2f2f2f'> \u{413}\u{41E}\u{420}\u{42F}\u{427}E\u{415} \u{41F}\u{420}\u{415}\u{414}\u{41B}\u{41E}\u{416}\u{415}\u{41D}\u{418}E</h3>

 <div class = 'stockSlider__photoslider'>
  <div class = 'stockSlider__photos'>
    
${y}

  </div>
  
  <!--<div class = 'stockSlider__dotscontainer '>
 ${q}
 </div>-->
 </div>

 

  <div class = 'stockSlider__name'> <h3>${e.name}</h3> <h3 style="margin-top:10px;font-weight:normal;font-size:18px">  ${e.edition}</h3></div>

  <div class = 'stockSlider__textContainer'>




  <div class='stockSlider__textDescription'>
  <h2 style="color:red;font-size:20px"> ${e.status} </h2>
  <p>\u{2022} <b> \u{433}\u{43E}\u{434}:</b> ${e.year}</p>
  <p>\u{2022} <b> \u{442}\u{438}\u{43F}:</b> ${e.type}</p>
  <p>\u{2022} <b> \u{43C}\u{43E}\u{449}\u{43D}\u{43E}\u{441}\u{442}\u{44C}:</b> ${e.engine}</p>
  <p>\u{2022} <b> ${e.nedc ? "\u0437\u0430\u043F\u0430\u0441 \u0445\u043E\u0434\u0430:" : "\u0440\u0430\u0441\u0445\u043E\u0434 \u0442\u043E\u043F\u043B\u0438\u0432\u0430:"}</b> ${e.nedc ? e.nedc : e.fuel}</p>
  <p>\u{2022} <b> \u{43F}\u{440}\u{438}\u{432}\u{43E}\u{434}:</b> ${e.drive}</p>
  </div>

   


  


 

</div>
<div class='stockSlider__bottomButtons'>
<div class="media_block stock">
<div class="submenu_button stock"><a href="${e.telegram ? e.telegram : "https://t.me/ProImportGroup"}"><img src="/data/telegram.png" ></a></div>
<div class=" submenu_button stock"><a href="https://wa.me/${e.phone}?text=\u{417}\u{434}\u{440}\u{430}\u{432}\u{441}\u{442}\u{432}\u{443}\u{439}\u{442}\u{435},%20\u{438}\u{43D}\u{442}\u{435}\u{440}\u{435}\u{441}\u{443}\u{435}\u{442}%20\u{432}\u{430}\u{448}\u{435}%20\u{43E}\u{431}\u{44A}\u{44F}\u{432}\u{43B}\u{435}\u{43D}\u{438}\u{435}%20\u{43E}%20\u{43F}\u{440}\u{43E}\u{434}\u{430}\u{436}\u{435}%20\u{43C}\u{430}\u{448}\u{438}\u{43D}\u{44B}%20${e.name}. "><img src="/data/whatsapp.png" ></a></div>
<div class=" submenu_button stock"><a href="https://vk.com/proimportgroup"><img src="/data/vk.png" ></a></div>

<div class=" submenu_button stock"><a href="${e.youtube ? e.youtube : "https://www.youtube.com/channel/UCQuilD9fF_lgUBmitNJM7nQ"}"><img src="/data/youtube.png" ></a></div>

</div>

<div class = 'stockSLider__price'><a href="${e.details}"> ${e.price ? e.price + " " + "USD" : e.priceRU + " " + "USD"} </a></div>
</div>

<p class="stock-details" style="text-align:center"> 
<a href="${e.details}" style="color:#1937b9;cursor:pointer;font-family:open-sans-light;font-size:16px;margin-left:auto;margin-right:auto;">
\u{43F}\u{43E}\u{434}\u{440}\u{43E}\u{431}\u{43D}\u{435}\u{435}</a> 
</p>

</div>

`);
    });
}

},{"../carcatalog/variables":"aC3lV","./stockSliderVars":"F2Pgz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fD8PO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "carSliderButtons", ()=>carSliderButtons);
"use strict";
function carSliderButtons() {
    document.querySelector(".stockContainer").insertAdjacentHTML("beforeend", `
    <div class ='stockSlider__button__container'>
    <button class='stockSLider__button stockBtnLeft'> \u{2190} </button>
    <button class='stockSLider__button stockBtnRight'> \u{2192} </button>
    </div>`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wcuw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stockSliderTranslateX", ()=>stockSliderTranslateX);
var _stockSliderVars = require("./stockSliderVars");
"use strict";
function stockSliderTranslateX() {
    document.querySelectorAll(`.stockSlider`).forEach((s, i)=>{
        s.style.transform = `translateX(${100 * i}%)`;
    });
    document.querySelectorAll(`img.stockSlider__photos__img.${(0, _stockSliderVars.carName)}`).forEach((s, i)=>{
        s.style.transform = `translateX(${100 * i}%)`;
    });
    (0, _stockSliderVars.arrNames).forEach((e)=>{
        document.querySelectorAll(`.${e}`).forEach((s, i)=>{
            s.style.transform = `translateX(${100 * i}%)`;
        });
    });
}

},{"./stockSliderVars":"F2Pgz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmB9u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "carSliderListeners", ()=>carSliderListeners);
"use strict";
function carSliderListeners() {
    let curslide = 0;
    const maxslide = document.querySelectorAll(".stockSlider").length - 1;
    let isFalse = false;
    const intervalSLider = setInterval(()=>{
        if (!isFalse) {
            if (curslide === maxslide) {
                curslide = 0;
                document.querySelectorAll(".stockSlider").forEach((s, i)=>{
                    s.style.transform = `translateX(${100 * (i - curslide)}%)`;
                });
            } else {
                curslide++;
                document.querySelectorAll(".stockSlider").forEach((s, i)=>{
                    s.style.transform = `translateX(${100 * (i - curslide)}%)`;
                });
            }
        }
    }, 8000);
    document.querySelector(".stockContainer").addEventListener("mouseover", ()=>{
        isFalse = true;
    });
    document.querySelector(".stockContainer").addEventListener("mouseout", ()=>{
        isFalse = false;
    });
    document.querySelector(".stockContainer").addEventListener("touchstart", ()=>{
        isFalse = true;
    });
    document.querySelector(".stockContainer").addEventListener("touchmove", ()=>{
        isFalse = true;
    });
    document.querySelector(".stockContainer").addEventListener("touchend", ()=>{
        isFalse = false;
    });
    document.querySelector(".stockBtnRight").addEventListener("click", ()=>{
        if (curslide === maxslide) {
            curslide = 0;
            document.querySelectorAll(".stockSlider").forEach((s, i)=>{
                s.style.transform = `translateX(${100 * (i - curslide)}%)`;
            });
        } else {
            curslide++;
            document.querySelectorAll(".stockSlider").forEach((s, i)=>{
                s.style.transform = `translateX(${100 * (i - curslide)}%)`;
            });
        }
    });
    document.querySelector(".stockBtnLeft").addEventListener("click", ()=>{
        if (curslide === 0) {
            curslide = maxslide;
            document.querySelectorAll(".stockSlider").forEach((s, i)=>{
                s.style.transform = `translateX(${100 * (i - curslide)}%)`;
            });
        } else {
            curslide--;
            document.querySelectorAll(".stockSlider").forEach((s, i)=>{
                s.style.transform = `translateX(${100 * (i - curslide)}%)`;
            });
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdCq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lazyStockSlider", ()=>lazyStockSlider);
"use strict";
function lazyStockSlider() {
    document.querySelectorAll(`img.stockSlider__photos__img`).forEach((e)=>{
        e.addEventListener("load", (el)=>el.target.classList.remove("lazystockslider"));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2uzF8","dMeSN"], "dMeSN", "parcelRequireafba")

//# sourceMappingURL=index.953d1690.js.map
