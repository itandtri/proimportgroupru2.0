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
})({"N8dRO":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5436c83464bf20cb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"5EGs8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _variablesJs = require("../carcatalog/variables.js");
var _carsJson = require("../model/data/json/cars.json");
var _carsJsonDefault = parcelHelpers.interopDefault(_carsJson);
var _pricelistJson = require("../model/data/json/pricelist.json");
var _pricelistJsonDefault = parcelHelpers.interopDefault(_pricelistJson);
var _jsonconvertJs = require("../globalscripts/JSONconvert.js");
var _mainCatalogMenuJs = require("../carcatalog/mainCatalogMenu.js");
var _addPriceJs = require("../globalscripts/addPrice.js");
"use strict";
(0, _jsonconvertJs.convertJSONtoObject)(_variablesJs.brandsNames, _variablesJs.brandsObject, (0, _carsJsonDefault.default));
(0, _jsonconvertJs.convertJSONtoObject)(_variablesJs.priceArr, _variablesJs.priceObject, (0, _pricelistJsonDefault.default));
(0, _addPriceJs.addPrice)(_variablesJs.brandsObject);
(0, _mainCatalogMenuJs.mainCatalogMenu)(_variablesJs.brandsNames, _variablesJs.brandsObject);

},{"../carcatalog/variables.js":"aC3lV","../model/data/json/cars.json":"v4llv","../model/data/json/pricelist.json":"bV4Wq","../globalscripts/JSONconvert.js":"kcCTL","../carcatalog/mainCatalogMenu.js":"1ZFi1","../globalscripts/addPrice.js":"5Tvwu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aC3lV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "brandsNames", ()=>brandsNames);
parcelHelpers.export(exports, "brandsObject", ()=>brandsObject);
parcelHelpers.export(exports, "stockArr", ()=>stockArr);
parcelHelpers.export(exports, "priceArr", ()=>priceArr);
parcelHelpers.export(exports, "priceObject", ()=>priceObject);
"use strict";
let brandsNames = [];
let brandsObject = {};
let stockArr = [];
let priceArr = [];
let priceObject = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"v4llv":[function(require,module,exports) {
module.exports = JSON.parse('{"cars":[{"name":"AVATR 11","brand":"AVATR","brandtitle":"AVATR","video":"https://www.youtube.com/embed/0qWF9KPzG28","img":"data/carimg/avatr11.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/52815#pvareaid=3454451","pdf":"data/pdf/avatr11.pdf"},{"name":"AVATR 12","brand":"AVATR","brandtitle":"AVATR","video":"https://www.youtube.com/embed/0qWF9KPzG28","img":"data/carimg/avatr12.png","type":"ev","pdf":"data/pdf/avatr12.pdf","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=8834"},{"name":"BMW i3","brand":"BMW","brandtitle":"BMW","img":"data/carimg/bmwi3.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/54899#pvareaid=3454451","pdf":"data/pdf/bmwi3.pdf"},{"name":"BMW i4","brand":"BMW","brandtitle":"BMW","img":"data/carimg/bmwi4.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/51513#pvareaid=3454451","pdf":"data/pdf/bmwi4.pdf"},{"name":"BMW i7","brand":"BMW","brandtitle":"BMW","img":"data/carimg/bmwi7.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4296"},{"name":"BMW iX","brand":"BMW","brandtitle":"BMW","img":"data/carimg/bmwix.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/50210#pvareaid=3454451","pdf":"data/pdf/bmwiX.pdf"},{"name":"BMW iX3","brand":"BMW","brandtitle":"BMW","img":"data/carimg/bmwix3.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/53240#pvareaid=3454451","pdf":"data/pdf/bmwiX3.pdf"},{"name":"BMW XM","brand":"BMW","brandtitle":"BMW","img":"data/carimg/bmwxm.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4772","pdf":"data/pdf/bmwxm.pdf"},{"name":"BYD DESTROYER 05","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/DtprCb-Beno","img":"data/carimg/byddestroyer05.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/52587#pvareaid=3454451","pdf":"data/pdf/byddestroyer05.pdf"},{"name":"BYD HAN EV","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/VUnsPd--xB4","img":"data/carimg/bydhanev.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/42643?appversion=","pdf":"data/pdf/bydhanev.pdf"},{"name":"BYD HAN HYBRID","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/62Fq73b1UOM","img":"data/carimg/bydhanhybrid.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/55313?appversion=","pdf":"data/pdf/bydhanhybrid.pdf"},{"name":"DENZA D9","brand":"DENZA","brandtitle":"DENZA","img":"data/carimg/denzad9.png","type":"hybrid"},{"name":"BYD QIN PLUS EV","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/uzNyhU0D_Gs","img":"data/carimg/bydqinev.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4899","pdf":"data/pdf/bydqinev.pdf"},{"name":"BYD QIN PLUS HYBRID","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/8MIZgLmYN-c","img":"data/carimg/bydqindm-i.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/49499?appversion=","pdf":"data/pdf/bydqinhybrid.pdf"},{"name":"BYD SEAL DM-i","brand":"BYD","brandtitle":"BYD","img":"data/carimg/bydsealdm-i.png","type":"Hybrid"},{"name":"BYD SONG MAX DM-i","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/rhbh9OguC88","img":"data/carimg/bydsongmaxdm-i.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=2887","pdf":"data/pdf/bydsongmaxdm-i.pdf"},{"name":"BYD SONG PLUS DM-i","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/mB2-OW6oOkk","img":"data/carimg/bydsongplusdm-i.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4865","pdf":"data/pdf/bydsongplusdm-i.pdf"},{"name":"BYD SONG PLUS DM-i 2023","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/zT0kuyy0xc4","img":"data/carimg/bydsongplusdmi2023.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4865&selected_color=%23010141&selected_sub_color=%23EAE6E6&selected_car_id=90459","pdf":"data/pdf/bydsongplusdmi2023.pdf"},{"name":"BYD SONG PLUS EV","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/mB2-OW6oOkk","img":"data/carimg/bydsongplusev.png","type":"ev","pano":"https://vr.yiche.com/vr/PanoInnerNew.html?albumId=5235&c=m&app_ver=10.65.0","pdf":"data/pdf/bydsongplusev.pdf"},{"name":"BYD SONG PLUS EV 2023","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/3mpImJ_fUJw","img":"data/carimg/bydsongplusev2023.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4865&selected_color=%23010141&selected_sub_color=%23EAE6E6&selected_car_id=90459","pdf":"data/pdf/bydsongplusev2023.pdf"},{"name":"BYD SONG PRO DM-i","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/zG1x-WW9cM8","img":"data/carimg/bydsongprodm-i.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=3504&selected_color=%23000000&selected_sub_color=&selected_car_id=38643","pdf":"data/pdf/bydsongprodm-i.pdf"},{"name":"BYD TANG EV","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/VQOgwGbjXPA","img":"data/carimg/bydtangev.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/56236?appversion=","pdf":"data/pdf/bydtangev.pdf"},{"name":"BYD TANG HYBRID","brand":"BYD","brandtitle":"BYD","video":"https://www.youtube.com/embed/CbFoMH4OO9o","img":"data/carimg/bydtangdmp.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/46572?appversion=","pdf":"data/pdf/bydtanghybrid.pdf"},{"name":"BYD YUAN PLUS","brand":"BYD","brandtitle":"BYD","img":"data/carimg/bydyuanplus.png","type":"Hybrid"},{"name":"CADILLAC LYRIQ","brand":"CADILLAC","brandtitle":"CADILLAC","img":"data/carimg/cadillaclyriq.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5358&selected_car_id=56550","pdf":"data/pdf/cadillaclyriq.pdf"},{"name":"CHANGAN CS75 PLUS","brand":"CHANGAN","brandtitle":"CHANGAN","video":"https://www.youtube.com/embed/dZolkfNWguQ","img":"data/carimg/changancs75plus.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=3196","pdf":"data/pdf/changancs75plus.pdf"},{"name":"CHANGAN OSHAN Z6 iDD","brand":"CHANGAN","brandtitle":"CHANGAN","video":"https://www.youtube.com/embed/u7ZOy-GCO1o","img":"data/carimg/oshanz6idd.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5857","pdf":"data/pdf/oshanz6idd.pdf"},{"name":"CHANGAN UNI-K","brand":"CHANGAN","brandtitle":"CHANGAN","video":"https://www.youtube.com/embed/vVUsvafJPuM","img":"data/carimg/changanunik.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/49850#pvareaid=3454451","pdf":"data/pdf/changanunik.pdf"},{"name":"CHANGAN UNI-K iDD","brand":"CHANGAN","brandtitle":"CHANGAN","video":"https://www.youtube.com/embed/T8h5oM70fME","img":"data/carimg/changanunikidd.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5216&selected_color=%239797BE&selected_sub_color=%23CFCFCF&selected_car_id=86087","pdf":"data/pdf/changanunikidd.pdf"},{"name":"CHANGAN UNI-T","brand":"CHANGAN","brandtitle":"CHANGAN","video":"https://www.youtube.com/embed/bXdqN15kdCQ","img":"data/carimg/changanunit.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/52301#pvareaid=3454451","pdf":"data/pdf/changanunit.pdf"},{"name":"CHANGAN UNI-V","brand":"CHANGAN","brandtitle":"CHANGAN","img":"data/carimg/changanuniv.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/56122#pvareaid=3454451","pdf":"data/pdf/changanuniv.pdf"},{"name":"CHANGAN UNI-V iDD","brand":"CHANGAN","brandtitle":"CHANGAN","img":"data/carimg/changanunividd.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5923","pdf":"data/pdf/changanuniv.pdf"},{"name":"CHERY ARRIZO 8","brand":"CHERY","brandtitle":"CHERY","img":"data/carimg/cheryarrizo8.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/54408?appversion="},{"name":"CHERY OMODA 5","brand":"CHERY","brandtitle":"CHERY","img":"data/carimg/cheryomoda.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/51329#pvareaid=3454451","pdf":"data/pdf/cheryomoda5.pdf"},{"name":"CHERY TIGGO 7 PLUS","brand":"CHERY","brandtitle":"CHERY","img":"data/carimg/cherytiggo7plus.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5242"},{"name":"CHERY TIGGO 8 PLUS e+","brand":"CHERY","brandtitle":"CHERY","img":"data/carimg/cherytiggo8pluse+.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5001"},{"name":"CHERY TIGGO 9","brand":"CHERY","brandtitle":"CHERY","img":"data/carimg/cherytiggo9.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6227"},{"name":"FORD EXPLORER","brand":"FORD","brandtitle":"FORD","img":"data/carimg/fordexplorer.png","type":"benzin"},{"name":"GAC GS8","brand":"GAC","brandtitle":"GAC","img":"data/carimg/gacgs8.png","type":"benzin"},{"name":"GEELY BINYUE","brand":"GEELY","brandtitle":"GEELY","img":"data/carimg/geelybinyue.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=2975","pdf":"data/pdf/geelybinyue.pdf"},{"name":"GEELY BOYUE L","brand":"GEELY","brandtitle":"GEELY","img":"data/carimg/geelyboyuel.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/51397?appversion=","pdf":"data/pdf/geelyboyuel.pdf"},{"name":"GEELY ICON","brand":"GEELY","brandtitle":"GEELY","img":"data/carimg/geelyicon.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=2880","pdf":"data/pdf/geelyicon.pdf"},{"name":"GEELY MONJARO","brand":"GEELY","brandtitle":"GEELY","video":"https://www.youtube.com/embed/MHcB2hla8IA","img":"data/carimg/geelymonjaro.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4857&selected_color=%23000000&selected_sub_color=%234C7179&selected_car_id=52089&position=rear_vr","pdf":"data/pdf/geelymonjaro.pdf"},{"name":"GEELY MONJARO PHEV","brand":"GEELY","brandtitle":"GEELY","video":"https://www.youtube.com/embed/Fn0H3GMOggM","img":"data/carimg/geelymonjarophev.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/55837?appversion=","pdf":"data/pdf/geelyxingyuelhip.pdf"},{"name":"GEELY XING RUI","brand":"GEELY","brandtitle":"GEELY","img":"data/carimg/geelyxingrui.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=3476","pdf":"data/pdf/geelyxingrui.pdf"},{"name":"GEELY XINGYUE S","brand":"GEELY","brandtitle":"GEELY","img":"data/carimg/geelyxingyues.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5225&selected_color=%23089C08&selected_sub_color=&selected_car_id=54950","pdf":"data/pdf/geelyxingyues.pdf"},{"name":"HAVAL H5","brand":"HAVAL","brandtitle":"HAVAL","img":"data/carimg/havalh5.png","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6321","type":"benzin","pdf":"data/pdf/havalh5.pdf"},{"name":"HiPHi X","brand":"HIPHI","brandtitle":"HIPHI","img":"data/carimg/hiphix.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/50428#pvareaid=3454451","pdf":"data/pdf/hiphix.pdf"},{"name":"HiPHi Z","brand":"HIPHI","brandtitle":"HIPHI","img":"data/carimg/hiphiz.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5431"},{"name":"HONGQI E-HS9","brand":"HONGQI","brandtitle":"HONGQI","img":"data/carimg/hongqiehs9.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/54515#pvareaid=3454451","pdf":"data/pdf/hongqiehs9.pdf"},{"name":"HONGQI H9","brand":"HONGQI","brandtitle":"HONGQI","img":"data/carimg/hongqih9.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4355"},{"name":"HONGQI HQ9","brand":"HONGQI","brandtitle":"HONGQI","img":"data/carimg/hongqihq9.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5905"},{"name":"HONGQI HS5","brand":"HONGQI","brandtitle":"HONGQI","img":"data/carimg/hongqihs5.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=3159"},{"name":"HUAWEI AITO M5","brand":"HUAWEIAITO","brandtitle":"HUAWEI AITO","video":"https://www.youtube.com/embed/CDBOQGJbdpQ","img":"data/carimg/aitom5.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/53200?appversion=","pdf":"data/pdf/aitom5.pdf"},{"name":"HUAWEI AITO M7","brand":"HUAWEIAITO","brandtitle":"HUAWEI AITO","video":"https://www.youtube.com/embed/liXPBRn5niI","img":"data/carimg/aitom7.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5820&selected_car_id=75798","pdf":"data/pdf/aitom7.pdf"},{"name":"IM MOTORS L7","brand":"IMMOTORS","brandtitle":"IM MOTORS","video":"https://www.youtube.com/embed/tsrgYOq1xSQ","img":"data/carimg/iml7.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/56346#pvareaid=3454451","pdf":"data/pdf/iml7.pdf"},{"name":"LEAPMOTOR C11 EV","brand":"LEAPMOTOR","brandtitle":"LEAPMOTOR","img":"data/carimg/leapmotorc11ev.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4731","pdf":"data/pdf/leapmotorc11ev.pdf"},{"name":"LEAPMOTOR C11 Гибрид","brand":"LEAPMOTOR","brandtitle":"LEAPMOTOR","img":"data/carimg/leapmotorc11.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4731"},{"name":"LEOPARD 5","brand":"LEOPARD","brandtitle":"LEOPARD","img":"data/carimg/leopard5.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=8884","pdf":"data/pdf/leopard5.pdf"},{"name":"LIXIANG L7","brand":"LIXIANG","brandtitle":"LIXIANG","video":"https://www.youtube.com/embed/ANiL_LVxy0M","img":"data/carimg/lixiangl7.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6173","pdf":"data/pdf/li.pdf"},{"name":"LIXIANG L8","brand":"LIXIANG","brandtitle":"LIXIANG","video":"https://www.youtube.com/embed/-PWSiq2-ShM","img":"data/carimg/lixiangl8.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6095&selected_color=%23F9845D&selected_sub_color=&selected_car_id=77724","pdf":"data/pdf/li.pdf"},{"name":"LIXIANG L9","brand":"LIXIANG","brandtitle":"LIXIANG","video":"https://www.youtube.com/embed/RCT2y7xRSSs","img":"data/carimg/lixiangl9.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5227&selected_color=%23FFFFFF&selected_sub_color=&selected_car_id=72710","pdf":"data/pdf/li.pdf"},{"name":"LIXIANG ONE","brand":"LIXIANG","brandtitle":"LIXIANG","video":"https://www.youtube.com/embed/J2o6_hktqIw","img":"data/carimg/lixiangone.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/51328?appversion=","pdf":"data/pdf/LiOne.pdf"},{"name":"LOTUS ELETRE","brand":"LOTUS","brandtitle":"LOTUS","img":"data/carimg/lotuseletre.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5825&selected_color=%23FF0000&selected_sub_color=&selected_car_id=71921","pdf":"data/pdf/lotuseletre.pdf"},{"name":"Lync & Co 09 EM-P","brand":"LYNK","brandtitle":"LYNK","img":"data/carimg/lynk&co09em-p.png"},{"name":"Lynk & Co 01","brand":"LYNK","brandtitle":"LYNK","img":"data/carimg/lynk&co01.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=1622"},{"name":"Lynk & Co 02","brand":"LYNK","brandtitle":"LYNK","img":"data/carimg/lynk&co02.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4970"},{"name":"Lynk & Co 03 EM-F","brand":"LYNK","brandtitle":"LYNK","video":"https://www.youtube.com/embed/kg8vuDANQC0","img":"data/carimg/lynk&co03.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=1623","pdf":"data/pdf/lynk&co03em-f.pdf"},{"name":"Lynk & Co 05","brand":"LYNK","brandtitle":"LYNK","img":"data/carimg/lynk&co05.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=3463"},{"name":"Lynk & Co 06 PHEV","brand":"LYNK","brandtitle":"LYNK","img":"data/carimg/lynk&co06phev.png","type":"benzin","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4340"},{"name":"M-TERRAIN 917","brand":"MTERRAIN","brandtitle":"MTERRAIN","img":"data/carimg/mterrain917.png","type":"hybrid"},{"name":"MAXUS EV30","brand":"ГРУЗОВЫЕ","brandtitle":"ГРУЗОВЫЕ","img":"data/carimg/maxusev30.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/1014131#pvareaid=3454451","pdf":"data/pdf/maxusev30.pdf","specialbrand":"maxus","speciallogo":"TRUE"},{"name":"MAXUS EV90","brand":"ГРУЗОВЫЕ","brandtitle":"ГРУЗОВЫЕ","img":"data/carimg/maxusev90.png","type":"Ev","specialbrand":"maxus","speciallogo":"TRUE"},{"name":"MERCEDES-BENZ EQE","brand":"MERCEDESBENZ","brandtitle":"MERCEDES BENZ","img":"data/carimg/mbeqe.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5813"},{"name":"MERCEDES-BENZ EQE SUV","brand":"MERCEDESBENZ","brandtitle":"MERCEDES BENZ","img":"data/carimg/mercedes-benzeqesuv.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6208","pdf":"data/pdf/mbeqesuv.pdf"},{"name":"MERCEDES-BENZ EQS","brand":"MERCEDESBENZ","brandtitle":"MERCEDES BENZ","img":"data/carimg/mbeqs.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4668"},{"name":"MERCEDES-BENZ EQS SUV","brand":"MERCEDESBENZ","brandtitle":"MERCEDES BENZ","img":"data/carimg/mbeqssuv.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5805&selected_car_id=80841","pdf":"data/pdf/mbeqssuv.pdf"},{"name":"NIO EC6","brand":"NIO","brandtitle":"NIO","img":"data/carimg/nioec6.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/57710#pvareaid=3454451","pdf":"data/pdf/nioec6.pdf"},{"name":"NIO ET5","brand":"NIO","brandtitle":"NIO","img":"data/carimg/nioet5.png","type":"Ev"},{"name":"NIO ET7","brand":"NIO","brandtitle":"NIO","img":"data/carimg/nioet7.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/49483#pvareaid=3454451","pdf":"data/pdf/nioet7.pdf"},{"name":"POLAR STONE 01","brand":"POLARSTONE","brandtitle":"POLAR STONE","img":"data/carimg/polarstone01.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=9131","pdf":"data/pdf/polarstone01.pdf"},{"name":"POLESTAR 2","brand":"POLESTAR","brandtitle":"POLESTAR","img":"data/carimg/polestar2.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/37469","pdf":"data/pdf/polestar2.pdf"},{"name":"TANK 400 Hi4-T","brand":"TANK","brandtitle":"TANK","img":"data/carimg/tank400hi4-t.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=8964","pdf":"data/pdf/tank400hi4-t.pdf"},{"name":"TANK 500 BUSINESS","brand":"TANK","brandtitle":"TANK","video":"https://www.youtube.com/embed/6wbVGPmtGiM","img":"data/carimg/tank500.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/54483?appversion=","pdf":"data/pdf/tank500.pdf"},{"name":"TANK 500 Hi4-T","brand":"TANK","brandtitle":"TANK","video":"https://www.youtube.com/embed/XShMD1FlBi4","img":"data/carimg/tank500hi4-t.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/54483?appversion=","pdf":"data/pdf/tank500.pdf"},{"name":"TANK 500 SPORT","brand":"TANK","brandtitle":"TANK","video":"https://www.youtube.com/embed/gXlfSQexhlY","img":"data/carimg/tank500sport.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/54483?appversion=","pdf":"data/pdf/tank500.pdf"},{"name":"TESLA MODEL Y","brand":"TESLA","brandtitle":"TESLA","img":"data/carimg/teslamodely.png","type":"Ev"},{"name":"TOYOTA BZ4X","brand":"TOYOTA","brandtitle":"TOYOTA","img":"data/carimg/toyotabz4x.png","type":"Ev"},{"name":"TOYOTA CAMRY","brand":"TOYOTA","brandtitle":"TOYOTA","img":"data/carimg/toyotacamry.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/57445#pvareaid=3454451","pdf":"data/pdf/toyotacamry.pdf"},{"name":"VOLKSWAGEN ID 4","brand":"VOLKSWAGEN","brandtitle":"VOLKSWAGEN","img":"data/carimg/vwid4.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/49181#pvareaid=2042304","pdf":"data/pdf/vwid4.pdf"},{"name":"VOLKSWAGEN ID 6","brand":"VOLKSWAGEN","brandtitle":"VOLKSWAGEN","img":"data/carimg/vwid6.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/56429#pvareaid=3454451","pdf":"data/pdf/vwid6.pdf"},{"name":"VOLKSWAGEN PASSAT","brand":"VOLKSWAGEN","brandtitle":"VOLKSWAGEN","img":"data/carimg/vwpassat.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/59488#pvareaid=3454451","pdf":"data/pdf/vwpassat2023.pdf"},{"name":"VOLKSWAGEN PASSAT PHEV","brand":"VOLKSWAGEN","brandtitle":"VOLKSWAGEN","img":"data/carimg/vwpassatphev.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/55601?appversion=","pdf":"data/pdf/vwpassatphev.pdf"},{"name":"VOLKSWAGEN TIGUAN L","brand":"VOLKSWAGEN","brandtitle":"VOLKSWAGEN","img":"data/carimg/vwtiguanl.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/59075#pvareaid=3454451","pdf":"data/pdf/vwtiguanallspace.pdf"},{"name":"VOLKSWAGEN TIGUAN X","brand":"VOLKSWAGEN","brandtitle":"VOLKSWAGEN","img":"data/carimg/vwtiguanx.png","type":"benzin","pano":"https://pano.autohome.com.cn/car/pano/59083#pvareaid=3454451","pdf":"data/pdf/vwtiguanx.pdf"},{"name":"BLUE ELECTRIC e5","brand":"BLUEELECTRIC","brandtitle":"BLUE ELECTRIC","img":"data/carimg/blueelectrice5.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6204&position=rear_vr&selected_color=%23B7AE82&select_color_name=胡桃棕&selected_sub_color=&select_sub_color_name=&selected_car_id=81217","pdf":"data/pdf/blueelectrice5.pdf"},{"name":"VOYAH CHASING LIGHT PHEV","brand":"VOYAH","brandtitle":"VOYAH","img":"data/carimg/voyahchasinglightphev.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=9167&selected_color=%23000000&select_color_name=黑色&selected_sub_color=%23ABA47A&select_sub_color_name=棕色&selected_car_id=91328","pdf":"data/pdf/voyahchasinglightphev.pdf"},{"name":"VOYAH DREAMER","brand":"VOYAH","brandtitle":"VOYAH","video":"https://www.youtube.com/embed/E1ubaOwfN60","img":"data/carimg/voyahdreamer.png","type":"hybrid","pano":"https://pano.autohome.com.cn/car/pano/53874#pvareaid=3454451","pdf":"data/pdf/voyahdreamer.pdf"},{"name":"VOYAH FREE","brand":"VOYAH","brandtitle":"VOYAH","video":"https://youtu.be/2E20rNHyQSU","img":"data/carimg/voyahfreeev.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/54077#pvareaid=3454451","pdf":"data/pdf/voyahfree.pdf"},{"name":"VOYAH FREE 2024","brand":"VOYAH","brandtitle":"VOYAH","video":"https://youtu.be/2E20rNHyQSU","img":"data/carimg/voyahfree2024.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=4760&selected_color=%238C7E7B&selected_sub_color=%23658091&selected_car_id=92033","pdf":"data/pdf/voyahfree2024.pdf"},{"name":"WEY BLUE MOUNTAIN","brand":"WEY","brandtitle":"WEY","img":"data/carimg/weybluemountain.png","type":"hybrid","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6206","pdf":"data/pdf/weybluemountain.pdf"},{"name":"XPENG G6","brand":"XPENG","brandtitle":"XPENG","img":"data/carimg/xpengg6.png","type":"hybrid"},{"name":"XPENG G9","brand":"XPENG","brandtitle":"XPENG","img":"data/carimg/xpengg9.png","type":"hybrid"},{"name":"YANGWANG U8","brand":"YANGWANG","brandtitle":"YANGWANG","img":"data/carimg/yangwangu8.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=6235"},{"name":"ZEEKR 001","brand":"ZEEKR","brandtitle":"ZEEKR","video":"https://www.youtube.com/embed/JBZHsoku1Vw","img":"data/carimg/zeekr001.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/50437#pvareaid=2042304","pdf":"data/pdf/zeekr001.pdf"},{"name":"ZEEKR 009","brand":"ZEEKR","brandtitle":"ZEEKR","video":"https://www.youtube.com/embed/G6ce1yvClpg","img":"data/carimg/zeekr009.png","type":"ev","pano":"https://m.dcdapp.com/motor/inapp/pano-new/inner.html?series_id=5878"},{"name":"ZEEKR X","brand":"ZEEKR","brandtitle":"ZEEKR","video":"https://www.youtube.com/embed/K0BB1ld4WW4","img":"data/carimg/zeekrx.png","type":"ev","pano":"https://pano.autohome.com.cn/car/pano/60492?appversion=","pdf":"data/pdf/zeekrx.pdf"}]}');

},{}],"bV4Wq":[function(require,module,exports) {
module.exports = JSON.parse('{"cars":[{"name":"YANGWANG U8","brand":"YANGWANG","priceRU":"187.200","priceKZ":"158.800"},{"name":"LOTUS ELETRE","brand":"LOTUS","priceRU":"143.800","priceKZ":"119.500"},{"name":"HiPHi Z","brand":"HIPHI","priceRU":"105.900","priceKZ":"87.300"},{"name":"LIXIANG L7","brand":"LIXIANG","priceRU":"54.100","priceKZ":"48.200"},{"name":"LIXIANG L8","brand":"LIXIANG","priceRU":"56.500","priceKZ":"50.700"},{"name":"LIXIANG L9","brand":"LIXIANG","priceRU":"67.200","priceKZ":"60.500"},{"name":"AVATR 11","brand":"AVATR","priceRU":"54.700","priceKZ":"44.900"},{"name":"ZEEKR 009","brand":"ZEEKR","priceRU":"92.500","priceKZ":"82.800"},{"name":"ZEEKR 001","brand":"ZEEKR","priceRU":"63.300","priceKZ":"52.800"},{"name":"ZEEKR X","brand":"ZEEKR","priceRU":"37.300","priceKZ":"29.800"},{"name":"VOYAH FREE 2024","brand":"VOYAH","priceRU":"46.800","priceKZ":"40.200"},{"name":"VOYAH DREAMER","brand":"VOYAH","priceRU":"68.100","priceKZ":"59.300"},{"name":"XPENG G9","brand":"XPENG","priceRU":"68.600","priceKZ":"58.200"},{"name":"XPENG G6","brand":"XPENG","priceRU":"52.100","priceKZ":"41.700"},{"name":"BYD TANG EV","brand":"BYD","priceRU":"52.300","priceKZ":"44.400"},{"name":"BYD SONG PLUS EV 2023","brand":"BYD","priceRU":"36.700","priceKZ":"29.200"},{"name":"BYD SONG PLUS DM-i 2023","brand":"BYD","priceRU":"33.600","priceKZ":"30.400"},{"name":"BYD YUAN PLUS","brand":"BYD","priceRU":"32.600","priceKZ":"25.500"},{"name":"BYD SEAL DM-i","brand":"BYD","priceRU":"39.600","priceKZ":"36.300"},{"name":"VOLKSWAGEN ID 4","brand":"VOLKSWAGEN","priceRU":"41.700","priceKZ":"34.400"},{"name":"VOLKSWAGEN ID 6","brand":"VOLKSWAGEN","priceRU":"49.800","priceKZ":"40.200"},{"name":"GEELY MONJARO","brand":"GEELY","priceRU":"37.900","priceKZ":"39.200"},{"name":"TANK 500 Hi4-T","brand":"TANK","priceRU":"56.900","priceKZ":"56.200"},{"name":"TANK 400 Hi4-T","brand":"TANK","priceRU":"50.500","priceKZ":"47.900"},{"name":"NIO ET5","brand":"NIO","priceRU":"60.400","priceKZ":"50.600"},{"name":"TESLA MODEL Y","brand":"TESLA","priceRU":"60.700","priceKZ":"50.900"},{"name":"TOYOTA BZ4X","brand":"TOYOTA","priceRU":"38.100","priceKZ":"30.600"},{"name":"DENZA D9","brand":"DENZA","priceRU":"75.600","priceKZ":"65.800"},{"name":"CHANGAN UNI-K iDD","brand":"CHANGAN","priceRU":"35.800","priceKZ":"32.900"},{"name":"HAVAL H5","brand":"HAVAL","priceRU":"33.700","priceKZ":"34.900"},{"name":"POLAR STONE 01","brand":"POLARSTONE","priceRU":"56.200","priceKZ":"50.900"},{"name":"Lync & Co 09 EM-P","brand":"LYNK","priceRU":"52.500","priceKZ":"52.100"},{"name":"MERCEDES-BENZ EQE SUV","brand":"MERCEDESBENZ","priceRU":"82.100","priceKZ":"66.500"},{"name":"MERCEDES-BENZ EQS SUV","brand":"MERCEDESBENZ","priceRU":"106.200","priceKZ":"87.900"},{"name":"FORD EXPLORER","brand":"FORD","priceRU":"66.200","priceKZ":"76.900"},{"name":"GAC GS8","brand":"GAC","priceRU":"39.500","priceKZ":"41.900"},{"name":"LEOPARD 5","brand":"LEOPARD","priceRU":"60.500","priceKZ":"59.200"}]}');

},{}],"kcCTL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertJSONtoObject", ()=>convertJSONtoObject);
"use strict";
function convertJSONtoObject(arr, obj, jsonname) {
    jsonname.cars.forEach((e)=>obj[e.brand] = []);
    jsonname.cars.forEach((e)=>obj[e.brand].push(e));
    jsonname.cars.forEach((e)=>{
        if (!arr.includes(e.brand)) arr.push(e.brand);
    });
    arr.sort();
    let arr1 = [];
    arr.unshift(...arr1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZFi1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mainCatalogMenu", ()=>mainCatalogMenu);
var _carsMenu = require("./carsMenu");
var _lazyload = require("../globalscripts/lazyload");
var _lazyimg = require("./lazyimg");
var _clearcontent = require("../globalscripts/clearcontent");
"use strict";
function mainCatalogMenu(arr, obj) {
    document.querySelector(".navigation-catalog").style.display = "none";
    (0, _clearcontent.clearContent)(document.querySelector(".carsCatalog"));
    document.querySelectorAll(".navigation-catalog-button").textContent = "Все";
    arr.forEach((e, i)=>{
        (0, _lazyimg.lazyimg)(Object.values(obj[e])[0]);
        document.querySelector(".carsCatalog").insertAdjacentHTML("beforeend", `<div class = "subsection--content mainMenu" data-catalog=${e} style="animation-name: delayingActive;
          animation-duration: 2s;">
          <img src="../data/brand logos/${obj[e][0].brandtitle.toLowerCase()}.png" : ""
          " style="height:32px;margin-left:0;">
          <img class="subsection--img catalog__item-a lazy-img" src=${Object.values(obj[e])[0].lazyimg ? Object.values(obj[e])[0].lazyimg : ""} data-src=${Object.values(obj[e])[0].img ? Object.values(obj[e])[0].img : ""} />
          <h3> ${Object.values(obj[e])[0].brandtitle ? Object.values(obj[e])[0].brandtitle : ""}</h3>
          <button class = 'carinfo__button catalog__item-e'> 
                                          
                                              ${obj[e][0].brandtitle !== "ЗАПЧАСТИ" ? "модели комплектации цены" : "подробнее"}
                                          
                                      </button>
          </div>`);
    });
    (0, _carsMenu.carsMenu)();
    let imgTargets = document.querySelectorAll("img[data-src]");
    imgTargets.forEach((0, _lazyload.lazyLoad));
}

},{"./carsMenu":"70pOO","../globalscripts/lazyload":"kZEqh","./lazyimg":"d7Dy4","../globalscripts/clearcontent":"dudak","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70pOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "carsMenu", ()=>carsMenu);
var _addDataBrand = require("./addDataBrand");
var _clearcontent = require("../globalscripts/clearcontent");
var _catalogContent = require("./catalogContent");
var _variables = require("./variables");
"use strict";
function carsMenu() {
    document.querySelectorAll(".subsection--content").forEach((e, i)=>{
        e.addEventListener("click", (e)=>{
            if (e.target.classList.length > 0 && !e.target.classList.contains("banner") && !e.target.classList.contains("banner-find")) {
                let cars;
                !e.target.parentNode.dataset.catalog ? cars = e.target.dataset.catalog : cars = e.target.parentNode.dataset.catalog;
                (0, _clearcontent.clearContent)(document.querySelector(".subsection.carsCatalog"));
                (0, _addDataBrand.addDataBrand)(cars);
                (0, _catalogContent.catalogContent)(cars, (0, _variables.brandsObject));
                document.querySelector(".kunteynir").scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

},{"./addDataBrand":"4Urj5","../globalscripts/clearcontent":"dudak","./catalogContent":"edOtl","./variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Urj5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addDataBrand", ()=>addDataBrand);
"use strict";
function addDataBrand(x) {
    document.querySelectorAll(".navigation-catalog-button").forEach((e)=>{
        e.dataset.brand = x;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dudak":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearContent", ()=>clearContent);
"use strict";
function clearContent(content) {
    content.innerHTML = "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edOtl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catalogContent", ()=>catalogContent);
var _backbtnHTML = require("./backbtnHTML");
var _catalogContentCar = require("./catalogContentCar");
var _lazyload = require("../globalscripts/lazyload");
var _variables = require("./variables");
"use strict";
function catalogContent(cars, obj) {
    document.querySelector(".subsection.carsCatalog").style.marginTop = "0";
    document.querySelector(".navigation-catalog").style.display = "flex";
    if (obj[cars].length === 0) {
        document.querySelectorAll(".navigation-catalog-button")[0].textContent = (0, _variables.brandsObject)[cars][0].brandtitle;
        document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand;
        document.querySelector(".subsection.carsCatalog").insertAdjacentHTML("beforeend", `
      <div class="subsection--noCars">
              
                  <img src="logo small.36503edb.svg" style="width:40px;margin-left: auto;margin-right: auto; margin-bottom: 10px;">
                 <div style="font-style:italic"> Автомобили с данным типом двигателя в разделе не представлены </div>
     <img src="полоски.677b7c40.svg" style="width:230px; max-height:16px; margin-left:auto;margin-right:auto;margin-top: 25px;">
  
  </div> `);
    } else {
        if (Array.isArray(cars)) cars.forEach((cars, i)=>{
            if (i > 0) document.querySelector(".subsection.carsCatalog").insertAdjacentHTML("beforeend", `
      <div class = "subsection--content header--brand" >
  
  
      <img src="/полоски.677b7c40.svg" style="height:20px;max-width:300px;margin-left: auto;margin-right: auto;">
  
              </div> `);
            (0, _catalogContentCar.catalogContentCar)(obj, cars, `carsCatalog`);
        });
        if (!Array.isArray(cars)) (0, _catalogContentCar.catalogContentCar)(obj, cars, "carsCatalog");
    }
    (0, _backbtnHTML.backBtnHTML)();
    let imgTargets = document.querySelectorAll("img[data-src]");
    imgTargets.forEach((0, _lazyload.lazyLoad));
}

},{"./backbtnHTML":"61Yu5","./catalogContentCar":"aLS3A","../globalscripts/lazyload":"kZEqh","./variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61Yu5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backBtnHTML", ()=>backBtnHTML);
"use strict";
function backBtnHTML() {
    document.querySelector(".carsCatalog").insertAdjacentHTML("beforeend", `
          <a href='' class = "subsection--content backBtn " data-catalog="back">
                   главное меню каталога
                  </a> `);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aLS3A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catalogContentCar", ()=>catalogContentCar);
var _catalogFilter = require("./catalogFilter");
var _lazyimg = require("./lazyimg");
var _videoEvent = require("./videoEvent");
var _clearcontent = require("../globalscripts/clearcontent");
"use strict";
function catalogContentCar(obj, cars, querySelector) {
    if (window.innerWidth < 700) {
        (0, _clearcontent.clearContent)(document.querySelector(".stockContainer"));
        document.querySelector(".stockContainer").style.display = "none";
    }
    if (document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand !== "all") document.querySelectorAll(".navigation-catalog-button")[0].textContent = obj[cars][0].brandtitle;
    if (document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand === "all") navigationcatalogButton[0].textContent = "Все";
    (0, _catalogFilter.catalogFilter)(document.querySelectorAll(".navigation-catalog-button"));
    obj[cars].forEach((e, i)=>{
        const x = e.name;
        (0, _lazyimg.lazyimg)(e);
        let y = x.split(" ").join("");
        document.querySelector(`.${querySelector}`).insertAdjacentHTML("beforeend", `
  
          <div class = " ${y} subsection--content content--${cars}" style="animation-name: delayingActive;
          animation-duration: 2s;">
  
          <div class="headerKunteynirCarArr" style="display:grid;grid-template-columns:auto auto;">
  <img src="../data/brand logos/${e.brandtitle.toLowerCase()}.png" style="width:32px;margin-left:0;">
  
  <a href=${e.pano ? e.pano : e.pdf} class ="pano__button">${e.pano ? "3D" : ""}</a>
  </div>
         
  
  
          
          <img class="subsection--img catalog__item-a lazy-img" src=${e.lazyimg} data-src=${e.img} />
     
  
              <div class="subsection--title catalog__item-b"> 
              <div class ="video__button ${e.name.replace(/\s/g, "")}" style="visibility:${e.video ? "visible" : "hidden"}"> ${e.video ? "видео" : ""} </div>
              <div class ="video__button__back ${e.name.replace(/\s/g, "")}"> назад  </div>
             <a href="https://wa.me/+79818005080?text=Здравствуйте,интересует%20цена%20на%20автомобиль%20${e.name}." class ="price__button">${!e.priceRU ? "узнать цену" : "от " + e.priceRU + " " + "USD"}</a>
  
              </div>
              <h3>${e.name}</h3>
  
             
  
        <a href=${e.pdf ? e.pdf : `https://wa.me/+79818005080?text=Здравствуйте,интересует%20цена%20на%20автомобиль%20${e.name}.`} class = 'carinfo__button catalog__item-e'> 
                  
                     ${!e.pdf ? "узнать подробнее" : "комплектации и опции"} 
                  
              </a>
  
      
          
          </div> 
          `);
        (0, _videoEvent.videoEvent)(e, y);
    });
}

},{"./catalogFilter":"hpVpk","./lazyimg":"d7Dy4","./videoEvent":"9J8Ui","../globalscripts/clearcontent":"dudak","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpVpk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catalogFilter", ()=>catalogFilter);
var _variables = require("./variables");
var _clearcontent = require("../globalscripts/clearcontent");
var _catalogContent = require("./catalogContent");
"use strict";
function catalogFilter(kunteynir) {
    let object = {};
    let autos = [];
    let cars = document.querySelectorAll(".navigation-catalog-button")[0].dataset.brand;
    kunteynir.forEach((e, i)=>{
        e.addEventListener("click", (e)=>{
            (0, _variables.brandsObject)[cars].forEach((el)=>{
                if (el.type === e.target.dataset.engine || !e.target.dataset.engine) autos.push(el);
            });
            object[cars] = autos;
            (0, _clearcontent.clearContent)(document.querySelector(".carsCatalog"));
            (0, _catalogContent.catalogContent)(cars, object);
        });
    });
}

},{"./variables":"aC3lV","../globalscripts/clearcontent":"dudak","./catalogContent":"edOtl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7Dy4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lazyimg", ()=>lazyimg);
"use strict";
function lazyimg(e) {
    e.lazyimg = `data/carimg/lazyimg/${e.name.split(" ").join("").toLowerCase()}.png`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9J8Ui":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "videoEvent", ()=>videoEvent);
var _videoEventBack = require("./videoEventBack");
"use strict";
function videoEvent(object, carName) {
    document.querySelectorAll(".video__button").forEach((e)=>{
        e.addEventListener("click", (el)=>{
            if (object.name.replace(/\s/g, "") == el.target.classList[1]) {
                el.target.parentNode.parentNode.childNodes.forEach((elem)=>{
                    if (elem.outerHTML === `<img class="subsection--img catalog__item-a" src="${object.img}" data-src="${object.img}">`) elem.outerHTML = ` <iframe class="video subsection--img catalog__item-a" src=${object.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
                });
                e.style.display = "none";
                [
                    ...el.target.parentNode.childNodes
                ].forEach((e)=>{
                    if (e.className === `video__button__back ${object.name.replace(/\s/g, "")}`) {
                        e.style.display = "block";
                        (0, _videoEventBack.videoEventBack)(object, carName);
                    }
                });
            }
        });
    });
}

},{"./videoEventBack":"3nkqc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nkqc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "videoEventBack", ()=>videoEventBack);
var _videoEvent = require("./videoEvent");
"use strict";
function videoEventBack(object, carName) {
    document.querySelectorAll(".video__button__back").forEach((e, i)=>{
        e.addEventListener("click", (el)=>{
            if (object.name.replace(/\s/g, "") == el.target.classList[1]) {
                el.target.parentNode.parentNode.childNodes.forEach((elem)=>{
                    if (elem.outerHTML === `<iframe class="video subsection--img catalog__item-a" src="${object.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>`) elem.outerHTML = `<img class="subsection--img catalog__item-a" src="${object.img}" data-src="${object.img}">`;
                });
                e.style.display = "none";
                [
                    ...el.target.parentNode.childNodes
                ].forEach((e)=>{
                    if (e.className === `video__button ${object.name.replace(/\s/g, "")}`) {
                        e.style.display = "block";
                        (0, _videoEvent.videoEvent)(object, carName);
                    }
                });
            }
        });
    });
}

},{"./videoEvent":"9J8Ui","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Tvwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addPrice", ()=>addPrice);
var _variables = require("../carcatalog/variables");
"use strict";
function addPrice(objectname) {
    (0, _variables.priceArr).forEach((e)=>{
        (0, _variables.priceObject)[e].forEach((el)=>{
            if (objectname === (0, _variables.brandsObject)) objectname[e].forEach((elem)=>{
                if (elem.name == el.name) elem.priceRU = el.priceRU;
            });
            if (objectname === (0, _variables.stockArr)) objectname.forEach((elem)=>{
                if (elem.name == el.name) elem.priceRU = el.priceRU;
            });
        });
    });
}

},{"../carcatalog/variables":"aC3lV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["N8dRO","5EGs8"], "5EGs8", "parcelRequiref68e")

//# sourceMappingURL=index.64bf20cb.js.map
