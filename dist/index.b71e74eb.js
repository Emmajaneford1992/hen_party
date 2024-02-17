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
})({"bTWk8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
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
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
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

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "triggerButton", ()=>triggerButton);
parcelHelpers.export(exports, "triggerInput", ()=>triggerInput);
parcelHelpers.export(exports, "triggerLetter", ()=>triggerLetter);
parcelHelpers.export(exports, "triggerGameButton", ()=>triggerGameButton);
var _buttons = require("./dom/buttons");
var _dom = require("./dom");
var _experience = require("./experience");
var _experienceDefault = parcelHelpers.interopDefault(_experience);
var _queryString = require("../queryString");
//import { getUrlParams } from "../queryString";
var _scavengerInfoJson = require("./experience/utils/scavengerInfo.json");
var _scavengerInfoJsonDefault = parcelHelpers.interopDefault(_scavengerInfoJson);
var _irlGameInfoJson = require("./experience/utils/irlGameInfo.json");
var _irlGameInfoJsonDefault = parcelHelpers.interopDefault(_irlGameInfoJson);
let game_selection = new (0, _experienceDefault.default)();
(0, _buttons.initButtons)();
let params = (0, _queryString.getUrlParams)();
let foundHeart = false;
let gameComplete = false;
Object.entries((0, _scavengerInfoJsonDefault.default)).forEach(([key, value], index)=>{
    if (value.heartToken == params) {
        console.log("found heart", params);
        localStorage.setItem(value.heartToken, "found");
        foundHeart = true;
    }
});
Object.entries((0, _irlGameInfoJsonDefault.default)).forEach(([key, value], index)=>{
    if (value.token == params) {
        console.log("game complete, token:", params);
        localStorage.setItem(key, "10");
        gameComplete = true;
    }
});
if (foundHeart) (0, _dom.revealFoundHeart)();
else if (gameComplete) (0, _dom.revealCelebration)();
else (0, _dom.revealSplash)();
(0, _dom.init)();
function triggerButton(button, game) {
    console.log("button triggered");
    console.log(button, "button triggered");
    game_selection.triggerButton(button, game);
}
function triggerInput(input) {
    game_selection.triggerInput(input);
}
function triggerLetter(letter) {
    game_selection.triggerLetter(letter);
}
function triggerGameButton(trigger) {
    game_selection.triggerGameButton(trigger);
}

},{"./dom/buttons":"8Z3Vb","./dom":"9OTgz","./experience":"47u4Z","../queryString":"51Hld","./experience/utils/scavengerInfo.json":"j2Ma8","./experience/utils/irlGameInfo.json":"gu766","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Z3Vb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButtons", ()=>initButtons);
var _dom = require("../dom");
var _index = require("../index");
let splash_button = document.querySelector(".splash_button");
let scavenger_hunt_button = document.querySelector(".scavenger_hunt_button");
let scavenger_backButton = document.querySelector(".scavenger_backButton");
let game_backButton = document.querySelector(".game_backButton");
let celebration_button = document.querySelector(".celebration button");
let foundHeart_button = document.querySelector(".foundHeart button");
let game_restartButton = document.querySelector(".game_restartButton");
function initButtons() {
    splash_button.addEventListener("click", ()=>{
        (0, _dom.hideSplash)();
        (0, _dom.revealGameSelection)();
    });
    scavenger_hunt_button.addEventListener("click", ()=>{
        (0, _dom.hideGameSelection)();
        (0, _dom.revealScavenger)();
        (0, _dom.updateScavengeScore)();
    });
    scavenger_backButton.addEventListener("click", ()=>{
        (0, _dom.hideScavenger)();
        (0, _dom.revealGameSelection)();
    });
    game_backButton.addEventListener("click", ()=>{
        (0, _dom.hideGame)();
        (0, _dom.revealGameSelection)();
    });
    game_restartButton.addEventListener("click", ()=>{
        (0, _index.triggerGameButton)("restart");
    });
    celebration_button.addEventListener("click", ()=>{
        (0, _dom.hideCelebration)();
        (0, _dom.revealGameSelection)();
    });
    foundHeart_button.addEventListener("click", ()=>{
        (0, _dom.hideFoundHeart)();
        (0, _dom.revealGameSelection)();
    });
}

},{"../dom":"9OTgz","../index":"h7u1C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OTgz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "revealSplash", ()=>revealSplash);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "hideSplash", ()=>hideSplash);
parcelHelpers.export(exports, "revealGameSelection", ()=>revealGameSelection);
parcelHelpers.export(exports, "hideGameSelection", ()=>hideGameSelection);
parcelHelpers.export(exports, "revealGame", ()=>revealGame);
parcelHelpers.export(exports, "hideGame", ()=>hideGame);
parcelHelpers.export(exports, "setGame", ()=>setGame);
parcelHelpers.export(exports, "createIrl", ()=>createIrl);
parcelHelpers.export(exports, "setGameTitle", ()=>setGameTitle);
parcelHelpers.export(exports, "setGameDescription", ()=>setGameDescription);
parcelHelpers.export(exports, "setGameScore", ()=>setGameScore);
parcelHelpers.export(exports, "setWord", ()=>setWord);
parcelHelpers.export(exports, "addLetterToScrambledWord", ()=>addLetterToScrambledWord);
parcelHelpers.export(exports, "selectScrambledLetter", ()=>selectScrambledLetter);
parcelHelpers.export(exports, "setWordGreen", ()=>setWordGreen);
parcelHelpers.export(exports, "clearGame", ()=>clearGame);
parcelHelpers.export(exports, "createGameRound", ()=>createGameRound);
parcelHelpers.export(exports, "roundComplete", ()=>roundComplete);
parcelHelpers.export(exports, "revealCelebration", ()=>revealCelebration);
parcelHelpers.export(exports, "hideCelebration", ()=>hideCelebration);
parcelHelpers.export(exports, "revealFoundHeart", ()=>revealFoundHeart);
parcelHelpers.export(exports, "hideFoundHeart", ()=>hideFoundHeart);
parcelHelpers.export(exports, "createKeyboard", ()=>createKeyboard);
parcelHelpers.export(exports, "revealScavenger", ()=>revealScavenger);
parcelHelpers.export(exports, "hideScavenger", ()=>hideScavenger);
parcelHelpers.export(exports, "initGameSelection", ()=>initGameSelection);
parcelHelpers.export(exports, "updateStars", ()=>updateStars);
parcelHelpers.export(exports, "updateHearts", ()=>updateHearts);
parcelHelpers.export(exports, "initScavenger", ()=>initScavenger);
parcelHelpers.export(exports, "updateScavengeScore", ()=>updateScavengeScore);
var _index = require("../index");
// import image1 from "../assets/images/finleys_films/1.png";
//const image1 = new URL("../assets/images/finleys_films/1.png");
var _gameInfoJson = require("../experience/utils/gameInfo.json");
var _gameInfoJsonDefault = parcelHelpers.interopDefault(_gameInfoJson);
var _irlGameInfoJson = require("../experience/utils/irlGameInfo.json");
var _irlGameInfoJsonDefault = parcelHelpers.interopDefault(_irlGameInfoJson);
var _scavengerInfoJson = require("../experience/utils/scavengerInfo.json");
var _scavengerInfoJsonDefault = parcelHelpers.interopDefault(_scavengerInfoJson);
const splash = document.querySelector(".splash");
const game_selection = document.querySelector(".game_selection");
const game_selection_games_div = document.querySelector(".game_selection_games div");
const game_selection_hand = document.querySelector(".game_selection_hand");
const game = document.querySelector(".game");
const game_main = document.querySelector(".game main");
const game_question = document.querySelector(".game_question");
const game_answer = document.querySelector(".game_answer");
const game_title = document.querySelector(".game_title");
const game_description = document.querySelector(".game_description");
const game_score = document.querySelector(".game_score");
const scavenger = document.querySelector(".scavenger");
const scavenger_clues = document.querySelector(".scavenger_clues");
const celebration = document.querySelector(".celebration");
const foundHeart = document.querySelector(".foundHeart");
const starsIcon = document.querySelector(".stars_icon");
const starsScore = document.querySelector(".stars_score");
const heartsIcon = document.querySelector(".hearts_icon");
const heartsScore = document.querySelector(".hearts_score");
const game_restartButton = document.querySelector(".game_restartButton");
const game_tick = document.querySelector(".game_tick");
let game_keyboard = document.querySelector(".game_keyboard");
let scores = [];
let irlScores = [];
let buttonTexts = [];
let irlButtonTexts = [];
let keyboardLetters = [
    [
        "q",
        "w",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p"
    ],
    [
        "a",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l"
    ],
    [
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        "\u232B"
    ]
];
let heartIcon = require("46648d6f82545e65");
let lockIcon = require("516216dd920f6846");
let heartOutline = require("81cdc96679bd7a8b");
let totalScore = 0;
let numOfQuestions = 0;
let totalHearts = 0;
let game_selection_button_images = [
    require("3a55660c2e766e56"),
    require("910c7c98b78a342f"),
    require("8885258b0269899f"),
    require("dbe11dd1d19bb64f"),
    require("598ab84f88319720")
];
let game_selection_irl_button_images = [
    require("543b2c61a6b7bb4b"),
    require("5678469a466ca804"),
    require("140840353ee94c32")
];
let finley_film_images = [
    require("2c24d209ee8ac650"),
    require("924dfd98a9a4afcc"),
    require("1bb0b31733ecd07d"),
    require("eafc87c2d4398b6b"),
    require("6fac3df1f4af5d41"),
    require("6ebcf8f404f1f0d5"),
    require("5d7fa836a86bafd5"),
    require("6d102d914c64c55f"),
    require("d2803ab0b4d9bc52")
];
let face_merge_images = [
    require("2d4e25286703ca1b"),
    require("38fc7dabbad6879c"),
    require("9342442eac11bbcf"),
    require("a4e77f26cc9473cf"),
    require("d494fac70e471d25"),
    require("a8b94377611316e5"),
    require("45bfde4a2100ff57"),
    require("e5aaef54c386f032"),
    require("f73f4bc618ec6347"),
    require("651abf224196bf7b"),
    require("f107705bbde98a48"),
    require("384f974aa0738671"),
    require("1600f214e28d491c"),
    require("cd62aebf1b247da9"),
    require("ed739f75de7c4e00"),
    require("d30c6c408573af1e")
];
let irl_images = [
    require("e581651ce9707bfb"),
    require("a301ff3420151816"),
    require("21fa55e47bb15cb5")
];
let letters = [];
let tiles = [];
let words = [];
let qWords = [];
let clues = [];
let scavengerImgs = [];
function revealSplash() {
    console.log("hide Splash");
    splash.style.display = "flex";
    document.body.style.backgroundColor = "#c8e3eb";
}
function init() {
    initGameSelection();
    initScavenger();
    createKeyboard();
}
function hideSplash() {
    console.log("hide Splash");
    splash.style.display = "none";
}
function revealGameSelection() {
    game_selection.style.display = "flex";
    document.body.style.backgroundColor = "#c8e3eb";
    updateStars();
    updateHearts();
}
game_selection_games_div.addEventListener("scroll", (event)=>{
    game_selection_hand.style.display = "none";
});
function hideGameSelection() {
    game_selection.style.display = "none";
}
function revealGame() {
    game.style.display = "flex";
    document.body.style.backgroundColor = "#68a6c5";
}
function hideGame() {
    game.style.display = "none";
}
function setGame(game) {
    document.body.style.backgroundColor = "#eaf3f5";
    if (game == "irl") {
        game_keyboard.style.display = "none";
        game_restartButton.style.display = "none";
        game_description.style.fontSize = "8vw";
        game_description.style.fontSize = "8vw";
        game_answer.style.display = "none";
    } else {
        game_restartButton.style.display = "flex";
        game_answer.style.display = "flex";
        game_description.style.fontSize = "5vw";
    }
}
function createIrl(name) {
    clearGame();
    let image = document.createElement("img");
    image.src = name == "Bra Pong" ? irl_images[0] : name == "Style Harry" ? irl_images[1] : irl_images[2];
    game_question.append(image);
}
function setGameTitle(str) {
    game_title.innerHTML = str;
}
function setGameDescription(str) {
    game_description.innerHTML = str;
}
function setGameScore(str) {
    game_score.innerHTML = str;
}
function setWord(word, correctWord) {
    console.log(word);
    tiles.forEach((tile, i)=>{
        if (i < word.length) {
            tile.style.background = "linear-gradient(#fff0bd, #d0bf88)";
            tile.innerHTML = word.charAt(i);
            tile.style.color = word.charAt(i) == correctWord.charAt(i) ? "green" : "linear-gradient(#f0f0f0, #b0b0b0)";
        } else {
            tile.style.background = "linear-gradient(#f0f0f0, #b0b0b0)";
            tile.innerHTML = "";
        }
    });
}
function addLetterToScrambledWord(charRemoved) {
    let letterAdded = false;
    letters.forEach((letter, i)=>{
        if (letter.classList.contains("letterSelect") && letter.innerHTML == charRemoved && !letterAdded) {
            letter.classList.remove("letterSelect");
            letterAdded = true;
        }
    });
}
function selectScrambledLetter(char) {
    return new Promise((resolve, reject)=>{
        let letterAdded = false;
        letters.forEach((letter, i)=>{
            if (!letter.classList.contains("letterSelect") && letter.innerHTML == char && !letterAdded) {
                letter.classList.add("letterSelect");
                letterAdded = true;
                resolve();
            }
        });
    });
}
function setWordGreen() {
    tiles.forEach((tile, i)=>{
        tile.style.background = "linear-gradient(#ffffff, #00ff00)";
    });
}
function clearGame() {
    game_tick.style.display = "none";
    game_restartButton.style.display = "flex";
    while(game_answer.firstChild)game_answer.removeChild(game_answer.lastChild);
    while(game_question.firstChild)game_question.removeChild(game_question.lastChild);
    letters = [];
    tiles = [];
    words = [];
    qWords = [];
}
function createGameRound(game, question, round, answer) {
    clearGame();
    let word = document.createElement("div");
    words.push(word);
    word.classList.add("game_word");
    game_answer.append(word);
    for(let i = 0; i < answer.length; i++)if (answer.charAt(i) == " ") {
        word = document.createElement("div");
        words.push(word);
        game_answer.append(word);
        word.classList.add("game_word");
    } else {
        let empty = document.createElement("button");
        words[words.length - 1].append(empty);
        tiles.push(empty);
        if (game == "fill_the_blanks") {
            if (question.charAt(i) != "_") empty.innerHTML = question.charAt(i);
        }
    }
    game_answer.append(word);
    if (game == "scrambled_words" || game == "fill_the_blanks") {
        let questionStr = game == "scrambled_words" ? question : "aeiou";
        console.log(questionStr);
        let qWord = document.createElement("div");
        qWords.push(qWord);
        qWord.classList.add("game_word");
        game_question.append(qWord);
        for(let i = 0; i < questionStr.length; i++)if (questionStr.charAt(i) == " ") {
            qWord = document.createElement("div");
            qWords.push(qWord);
            qWord.classList.add("game_word");
            game_question.append(qWord);
        } else {
            let letter = document.createElement("button");
            letters.push(letter);
            letter.innerHTML = questionStr.charAt(i);
            qWord.append(letter);
        }
        letters.forEach((letter, i)=>{
            letter.addEventListener("click", ()=>{
                if (!letter.classList.contains("letterSelect")) {
                    letter.classList.add("letterSelect");
                    (0, _index.triggerLetter)(letter.innerHTML);
                }
            });
        });
        game_keyboard.style.display = "none";
    } else {
        game_keyboard.style.display = "flex";
        if (game == "emoji_game") {
            console.log("create emoji game", question);
            game_question.innerHTML = question;
        } else if (game == "finleys_films" || game == "face_merge") {
            let game_image = document.createElement("img");
            game_question.append(game_image);
            game_image.src = game == "finleys_films" ? finley_film_images[round] : face_merge_images[round];
        }
    }
}
function roundComplete() {
    game_tick.style.display = "flex";
    game_restartButton.style.display = "none";
    game_keyboard.style.display = "none";
}
function revealCelebration() {
    celebration.style.display = "flex";
    document.body.style.backgroundColor = "white";
}
function hideCelebration() {
    celebration.style.display = "none";
}
function revealFoundHeart() {
    foundHeart.style.display = "flex";
    document.body.style.backgroundColor = "white";
}
function hideFoundHeart() {
    foundHeart.style.display = "none";
}
function createKeyboard() {
    keyboardLetters.forEach((row)=>{
        let div = document.createElement("div");
        game_keyboard.append(div);
        row.forEach((letter)=>{
            let button = document.createElement("button");
            button.innerHTML = letter;
            div.append(button);
            button.addEventListener("click", ()=>{
                console.log("letter", letter);
                (0, _index.triggerInput)(letter);
            });
        });
    });
}
function revealScavenger() {
    scavenger.style.display = "flex";
    document.body.style.backgroundColor = "#c8e3eb";
}
function hideScavenger() {
    scavenger.style.display = "none";
}
function initGameSelection() {
    Object.entries((0, _gameInfoJsonDefault.default)).forEach(([key, value], index)=>{
        createGameSelectionButton(value, index, key, "website");
    });
    Object.entries((0, _irlGameInfoJsonDefault.default)).forEach(([key, value], index)=>{
        createGameSelectionButton(value, index, key, "irl");
    });
}
function createGameSelectionButton(value, index, key, game) {
    let button = document.createElement("button");
    game_selection_games_div.append(button);
    let div = document.createElement("div");
    button.append(div);
    let img = document.createElement("img");
    img.src = game == "irl" ? game_selection_irl_button_images[index] : game_selection_button_images[index];
    div.append(img);
    let p = document.createElement("p");
    p.innerHTML = value.title;
    button.append(p);
    let p2 = document.createElement("p2");
    if (game == "irl") irlScores.push(p2);
    else scores.push(p2);
    let score = localStorage.getItem(key);
    if (score == null) score = "0";
    p2.innerHTML = score + "/" + 10;
    button.append(p2);
    let p3 = document.createElement("p3");
    p3.innerHTML = "Play";
    button.append(p3);
    if (game == "irl") irlButtonTexts.push(p3);
    else buttonTexts.push(p3);
    button.addEventListener("click", ()=>{
        hideGameSelection();
        (0, _index.triggerButton)(key, game);
    });
}
function updateStars() {
    totalScore = 0;
    numOfQuestions = 0;
    Object.entries((0, _gameInfoJsonDefault.default)).forEach(([key, value], index)=>{
        let score = localStorage.getItem(key);
        if (score == null) score = "0";
        numOfQuestions += Object.keys(value.rounds).length;
        totalScore += Number(score);
        scores[index].innerHTML = "\u2605" + score + "/" + Object.keys(value.rounds).length;
        if (Object.keys(value.rounds).length == Number(score)) {
            buttonTexts[index].innerHTML = "Complete";
            buttonTexts[index].style.backgroundColor = "#c8e3eb";
            buttonTexts[index].style.border = "2px solid white";
            buttonTexts[index].parentElement.style.pointerEvents = "none";
        } else {
            buttonTexts[index].innerHTML = "Play";
            buttonTexts[index].style.backgrounColor = "#68a6c5";
        }
    });
    Object.entries((0, _irlGameInfoJsonDefault.default)).forEach(([key, value], index)=>{
        let score = localStorage.getItem(key);
        if (score == null) score = "0";
        numOfQuestions += 10;
        totalScore += Number(score);
        irlScores[index].innerHTML = "\u2605" + score + "/10";
        irlButtonTexts[index].innerHTML = 0 == Number(score) ? "Complete" : "Play";
        if (10 == Number(score)) {
            irlButtonTexts[index].innerHTML = "Complete";
            irlButtonTexts[index].style.backgroundColor = "#c8e3eb";
            irlButtonTexts[index].style.border = "2px solid white";
            irlButtonTexts[index].parentElement.style.pointerEvents = "none";
        } else {
            irlButtonTexts[index].innerHTML = "Play";
            irlButtonTexts[index].style.backgrounColor = "#68a6c5";
        }
    });
    starsIcon.innerHTML = "\u2605<br/>" + totalScore.toString() + " / " + numOfQuestions;
    let percentage = (1 - totalScore / numOfQuestions) * 100;
    console.log(percentage);
    //starsScore.style.background= 'linear-gradient( #ddd '+(percentage-1)+'%,  #68a6c5 '+percentage+'%, #fff0bd '+(percentage+1)+'%, #f1c16a 100%)';
    starsScore.style.background = "linear-gradient( #ddd " + (percentage - 1) + "%,  #68a6c5 " + percentage + "%, #c8e3eb " + (percentage + 1) + "%, #ffffff 100%)";
}
function updateHearts() {
    totalHearts = 0;
    Object.entries((0, _scavengerInfoJsonDefault.default)).forEach(([key, value], index)=>{
        let heart = localStorage.getItem(value.heartToken);
        if (heart != null) totalHearts++;
    });
    heartsIcon.innerHTML = "\u2665<br/>" + totalHearts.toString() + " / " + Object.keys((0, _scavengerInfoJsonDefault.default)).length;
    let percentage = (1 - totalHearts / Object.keys((0, _scavengerInfoJsonDefault.default)).length) * 100;
    heartsScore.style.background = "linear-gradient( #ddd " + (percentage - 1) + "%,  #68a6c5 " + percentage + "%, #c8e3eb " + (percentage + 1) + "%, #ffffff 100%)";
}
function initScavenger() {
    Object.entries((0, _scavengerInfoJsonDefault.default)).forEach(([key, value], index)=>{
        let clue = document.createElement("div");
        scavenger_clues.append(clue);
        let clueText = document.createElement("p");
        clue.append(clueText);
        clues.push(clueText);
        let heart = document.createElement("img");
        heart.src = heartIcon;
        scavengerImgs.push(heart);
        clue.append(heart);
    });
}
function updateScavengeScore() {
    Object.entries((0, _scavengerInfoJsonDefault.default)).forEach(([key, value], index)=>{
        clues[index].innerHTML = totalScore > (index + 1) * 5 ? value.clue : "\u2605 " + (index + 1) * 5 + "/100 to unlock";
        let heartFound = localStorage.getItem(value.heartToken);
        // scavengerImgs[index].style.filter = heartFound == null ? 'grayscale(1)' : 'grayscale(0)';
        scavengerImgs[index].src = totalScore > (index + 1) * 5 ? heartFound == null ? heartOutline : heartIcon : lockIcon;
        scavengerImgs[index].style.opacity = heartFound != null ? "1" : "0.4";
    });
}

},{"../index":"h7u1C","../experience/utils/gameInfo.json":"iLiiY","../experience/utils/irlGameInfo.json":"gu766","../experience/utils/scavengerInfo.json":"j2Ma8","46648d6f82545e65":"eQ041","516216dd920f6846":"bIQW2","81cdc96679bd7a8b":"JCMq4","3a55660c2e766e56":"cGxvR","910c7c98b78a342f":"Kwe4i","8885258b0269899f":"gExVo","dbe11dd1d19bb64f":"dpCRP","598ab84f88319720":"fxns8","543b2c61a6b7bb4b":"51pXX","5678469a466ca804":"f8HYg","140840353ee94c32":"eZzuG","2c24d209ee8ac650":"fsvtb","924dfd98a9a4afcc":"bwcPy","1bb0b31733ecd07d":"dsQ2u","eafc87c2d4398b6b":"4eDtq","6fac3df1f4af5d41":"aSkAu","6ebcf8f404f1f0d5":"GCwAG","5d7fa836a86bafd5":"dFtSE","6d102d914c64c55f":"d33xe","d2803ab0b4d9bc52":"c4IQl","2d4e25286703ca1b":"1M6l0","38fc7dabbad6879c":"4GAlF","9342442eac11bbcf":"dyVUE","a4e77f26cc9473cf":"fiIjE","d494fac70e471d25":"3BRui","a8b94377611316e5":"bTb3z","45bfde4a2100ff57":"YarpM","e5aaef54c386f032":"l1eLv","f73f4bc618ec6347":"2vKdX","651abf224196bf7b":"ev70c","f107705bbde98a48":"5bzV3","384f974aa0738671":"k2bWL","1600f214e28d491c":"jqWDy","cd62aebf1b247da9":"fh8JF","ed739f75de7c4e00":"a95wo","d30c6c408573af1e":"6XHqv","e581651ce9707bfb":"4i1hS","a301ff3420151816":"6J2xB","21fa55e47bb15cb5":"3lMSV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLiiY":[function(require,module,exports) {
module.exports = JSON.parse('{"scrambled_words":{"title":"Scrambled","description":"Click on the letters to unscamble the wedding related word","rounds":{"0":{"question":"simdbdaire","answer":"bridesmaid"},"1":{"question":"ni sawl","answer":"in laws"},"2":{"question":"cxgginhean vwso","answer":"exchanging vows"},"3":{"question":"tbse anm","answer":"best man"},"4":{"question":"nmhaecpga sotta","answer":"champagne toast"},"5":{"question":"rtifs nacde","answer":"first dance"},"6":{"question":"itucgnt eht caek","answer":"cutting the cake"},"7":{"question":"yhoneomon","answer":"honeymoon"},"8":{"question":"saecnpa","answer":"canapes"},"9":{"question":"dinwegd dsers","answer":"wedding dress"},"10":{"question":"ttncfeio","answer":"confetti"},"11":{"question":"togepaporhrh","answer":"photographer"},"12":{"question":"mgirraae ftcierectia","answer":"marriage certificate"},"13":{"question":"idnegwd berakftas","answer":"wedding breakfast"},"14":{"question":"enh nghit","answer":"hen night"}}},"emoji_game":{"title":"Emoji game","description":"Guess the wedding related phrase from the emoji sequence","rounds":{"0":{"question":"\uD83D\uDC69 \uD83E\uDDF9 \uD83E\uDDFC \uD83C\uDFC5","answer":"maid of honour"},"1":{"question":"\u261D\uFE0F\uD83D\uDC83","answer":"first dance"},"2":{"question":"\uD83C\uDF38 \uD83D\uDC67","answer":"flower girl"},"3":{"question":"\uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7\uD83C\uDF70","answer":"three tier cake"},"4":{"question":"\uD83C\uDF6F\uD83C\uDF19","answer":"honeymoon"},"5":{"question":"\u2702\uFE0F\uD83C\uDF70","answer":"cutting the cake"},"6":{"question":"\uD83D\uDCC4\uD83D\uDC66","answer":"page boy"},"7":{"question":"\uD83D\uDC8D\uD83D\uDC3B","answer":"ring bearer"},"8":{"question":"\uD83C\uDFC6\uD83D\uDC70","answer":"trophy wife"},"9":{"question":"\uD83C\uDF7E\uD83C\uDF5E","answer":"champagne toast"},"10":{"question":"\uD83D\uDC70\u270C\uFE0F\uD83D\uDC1D","answer":"bride to be"},"11":{"question":"\uD83D\uDC70\uD83D\uDEBF","answer":"bridal shower"}}},"finleys_films":{"title":"Finley\'s Films","description":"Guess the movie finley or mabel is starring in","rounds":{"0":{"question":"","answer":"castaway"},"1":{"question":"","answer":"lady and the tramp"},"2":{"question":"","answer":"titanic"},"3":{"question":"","answer":"forest gump"},"4":{"question":"","answer":"et"},"5":{"question":"","answer":"alien"},"6":{"question":"","answer":"the lion king"},"7":{"question":"","answer":"toy story"},"8":{"question":"","answer":"american beauty"}}},"fill_the_blanks":{"title":"Fill the blanks","description":"Pick the correct vowel to fill in the blank","rounds":{"0":{"question":"_ngag_m_nt","answer":"engagement"},"1":{"question":"b_ddow p_rk","answer":"baddow park"},"2":{"question":"h_neym__n","answer":"honeymoon"},"3":{"question":"for_v_r","answer":"forever"},"4":{"question":"_nv_tat_ons","answer":"invitations"},"5":{"question":"m_rri_ge","answer":"marriage"},"6":{"question":"g_rl_nd","answer":"garland"},"7":{"question":"h_ad tabl_","answer":"head table"},"8":{"question":"bo_q_et","answer":"bouquet"},"9":{"question":"sp__ch","answer":"speech"},"10":{"question":"c_r_mony","answer":"ceremony"},"11":{"question":"r_c_ption","answer":"reception"},"12":{"question":"c_ntr_pi_c_s","answer":"centrepieces"},"13":{"question":"c_l_brat_","answer":"celebrate"},"14":{"question":"m_n_gamy","answer":"monogamy"},"15":{"question":"l_ts _f l_ve","answer":"lots of love"},"16":{"question":"j_w_ll_ry","answer":"jewellery"},"17":{"question":"b_llrop_s r_tr_at","answer":"bellropes retreat"}}},"face_merge":{"title":"Face Merge","description":"Guess the celebrity or character the beautiful brides to be\'s faces have been merged with","rounds":{"0":{"question":"","answer":"barbie"},"1":{"question":"","answer":"katniss"},"2":{"question":"","answer":"wanda"},"3":{"question":"","answer":"merida"},"4":{"question":"","answer":"adele"},"5":{"question":"","answer":"daenerys"},"6":{"question":"","answer":"princess peach"},"7":{"question":"","answer":"princess fiona"},"8":{"question":"","answer":"princess leia"},"9":{"question":"","answer":"jack sparrow"},"10":{"question":"","answer":"harley quinn"},"11":{"question":"","answer":"shakira"},"12":{"question":"","answer":"amy winehouse"},"13":{"question":"","answer":"wonder woman"},"14":{"question":"","answer":"little red riding hood"},"15":{"question":"","answer":"rapunzel"}}}}');

},{}],"gu766":[function(require,module,exports) {
module.exports = JSON.parse('{"bra_pong":{"title":"Bra Pong","description":"Go to the Bra Pong Game, Throw the ping pong balls in the bra win","token":"gnoparb1"},"style_harry":{"title":"Style Harry","description":"Go to the lifsize Harry, this game is similar to the classic pin the tail on the donkey game. Get ready to be blindfolded and spun before you attempt to style Harry Styles.","token":"yrrahelyts2"},"put_a_ring_it":{"title":"Put a ring on it","description":"Find Emma or Karly and attempt to toss rings onto their prosscco headbands.","token":"tinogniratup3"}}');

},{}],"j2Ma8":[function(require,module,exports) {
module.exports = JSON.parse('{"1":{"clue":"I dry as I get wetter.","answer":"towel","heartToken":"lewot1"},"2":{"clue":"I have hands but cannot clap?","answer":"clock","heartToken":"kcolc2"},"3":{"clue":"You cut me on a table, but I\u2019m never eaten.","answer":"cards","heartToken":"sdrac3"},"4":{"clue":"have lots of stars, but I\u2019m not the sky. I\u2019ll be sitting here quietly until you need me.","answer":"tv","heartToken":"vt4"},"5":{"clue":"I have four legs, but I don\u2019t have any feet.","answer":"table","heartToken":"elbat5"},"6":{"clue":"Adding bubbles to me is fun. You usually get in me at night before your day is done.","answer":"bath","heartToken":"thab6"},"7":{"clue":"I make two people out of one. What am I?","answer":"mirror","heartToken":"rorrim7"},"8":{"clue":"I get answered even though I never ask a question. What am I?","answer":"doorbell","heartToken":"llebrood8"},"9":{"clue":"What is full of holes but still holds water?","answer":"sponge","heartToken":"egnops9"},"10":{"clue":"If you want to eat, then take a seat","answer":"dining chair","heartToken":"riahcgninid10"},"11":{"clue":"What four-letter word begins with \'f\' and ends with \'k\'","answer":"fork","heartToken":"korf11"},"12":{"clue":"What\u2019s white, sticky, and better to spit than to swallow?","answer":"toothpaste","heartToken":"etsaphtoot12"},"13":{"clue":"What has a neck but no head","answer":"bottle","heartToken":"elttob13"},"14":{"clue":"I get bigger the more you blow me","answer":"balloon","heartToken":"noollab14"},"15":{"clue":"I have a bark, but I have no bite. I\'m rarely still, but I never wander. What am I?","answer":"tree","heartToken":"eert15"},"16":{"clue":"I\'ve got charcoal in my belly, and metal feet. Once I am hot, it\'s time to eat. What am I?","answer":"bbq","heartToken":"qbb16"},"17":{"clue":"You\'ll find me on the floor, and I\'m comfy to walk on","answer":"rug","heartToken":"gur17"},"18":{"clue":"People at the gym, often say to each other. How much do you......?","answer":"bench","heartToken":"hcneb18"},"19":{"clue":"A place to relax & chill, with lots of bubbles","answer":"jacuzzi","heartToken":"izzucaj19"},"20":{"clue":"I welcome every guest but never say a word.","answer":"welcome mat","heartToken":"tamemoclew20"}}');

},{}],"eQ041":[function(require,module,exports) {
module.exports = require("ca0ced770eaa71a6").getBundleURL("7UhFu") + "heartIcon.5cf264b0.png" + "?" + Date.now();

},{"ca0ced770eaa71a6":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"bIQW2":[function(require,module,exports) {
module.exports = require("9606dd7b56abe50b").getBundleURL("7UhFu") + "lockIcon.35f7d738.png" + "?" + Date.now();

},{"9606dd7b56abe50b":"lgJ39"}],"JCMq4":[function(require,module,exports) {
module.exports = require("8957d16a52e2dfa2").getBundleURL("7UhFu") + "heartIconOutline.0a4c326a.png" + "?" + Date.now();

},{"8957d16a52e2dfa2":"lgJ39"}],"cGxvR":[function(require,module,exports) {
module.exports = require("dccfbc3be714ae84").getBundleURL("7UhFu") + "letters.d6c28089.png" + "?" + Date.now();

},{"dccfbc3be714ae84":"lgJ39"}],"Kwe4i":[function(require,module,exports) {
module.exports = require("b9a62c9cae89d0ac").getBundleURL("7UhFu") + "emoji.c4435949.png" + "?" + Date.now();

},{"b9a62c9cae89d0ac":"lgJ39"}],"gExVo":[function(require,module,exports) {
module.exports = require("dbb3ce66c57cc5f6").getBundleURL("7UhFu") + "dog.74a4875f.png" + "?" + Date.now();

},{"dbb3ce66c57cc5f6":"lgJ39"}],"dpCRP":[function(require,module,exports) {
module.exports = require("b440764899da1648").getBundleURL("7UhFu") + "empties.056bbb55.png" + "?" + Date.now();

},{"b440764899da1648":"lgJ39"}],"fxns8":[function(require,module,exports) {
module.exports = require("d362c199712c9dd0").getBundleURL("7UhFu") + "faces.1f8840b9.png" + "?" + Date.now();

},{"d362c199712c9dd0":"lgJ39"}],"51pXX":[function(require,module,exports) {
module.exports = require("da1200d6d2350a76").getBundleURL("7UhFu") + "bra.39170688.png" + "?" + Date.now();

},{"da1200d6d2350a76":"lgJ39"}],"f8HYg":[function(require,module,exports) {
module.exports = require("c78a664f865395c4").getBundleURL("7UhFu") + "microphone.37dc462e.png" + "?" + Date.now();

},{"c78a664f865395c4":"lgJ39"}],"eZzuG":[function(require,module,exports) {
module.exports = require("d3896a2f9b98659c").getBundleURL("7UhFu") + "rings.2b119cc6.png" + "?" + Date.now();

},{"d3896a2f9b98659c":"lgJ39"}],"fsvtb":[function(require,module,exports) {
module.exports = require("d898787985b4c17d").getBundleURL("7UhFu") + "0.61dbac3d.png" + "?" + Date.now();

},{"d898787985b4c17d":"lgJ39"}],"bwcPy":[function(require,module,exports) {
module.exports = require("7ff8e40c8c3a5680").getBundleURL("7UhFu") + "1.a158ab1a.png" + "?" + Date.now();

},{"7ff8e40c8c3a5680":"lgJ39"}],"dsQ2u":[function(require,module,exports) {
module.exports = require("5d61b25853a2ebaa").getBundleURL("7UhFu") + "2.b7c8a3ca.png" + "?" + Date.now();

},{"5d61b25853a2ebaa":"lgJ39"}],"4eDtq":[function(require,module,exports) {
module.exports = require("3bcd0b61dda54af4").getBundleURL("7UhFu") + "3.3ca08897.png" + "?" + Date.now();

},{"3bcd0b61dda54af4":"lgJ39"}],"aSkAu":[function(require,module,exports) {
module.exports = require("bdc723a78d084410").getBundleURL("7UhFu") + "4.abd70e5f.png" + "?" + Date.now();

},{"bdc723a78d084410":"lgJ39"}],"GCwAG":[function(require,module,exports) {
module.exports = require("5ae1419c03afa968").getBundleURL("7UhFu") + "5.324dc662.png" + "?" + Date.now();

},{"5ae1419c03afa968":"lgJ39"}],"dFtSE":[function(require,module,exports) {
module.exports = require("e7672633099b5688").getBundleURL("7UhFu") + "6.96d60305.png" + "?" + Date.now();

},{"e7672633099b5688":"lgJ39"}],"d33xe":[function(require,module,exports) {
module.exports = require("1e4d3045112866e1").getBundleURL("7UhFu") + "7.16d27a0d.png" + "?" + Date.now();

},{"1e4d3045112866e1":"lgJ39"}],"c4IQl":[function(require,module,exports) {
module.exports = require("c27099df9d3fa3a2").getBundleURL("7UhFu") + "8.07ef5acd.png" + "?" + Date.now();

},{"c27099df9d3fa3a2":"lgJ39"}],"1M6l0":[function(require,module,exports) {
module.exports = require("a11dfc9883a4836e").getBundleURL("7UhFu") + "0.220d6165.jpg" + "?" + Date.now();

},{"a11dfc9883a4836e":"lgJ39"}],"4GAlF":[function(require,module,exports) {
module.exports = require("b07779d60f4e453b").getBundleURL("7UhFu") + "1.9bde745f.jpg" + "?" + Date.now();

},{"b07779d60f4e453b":"lgJ39"}],"dyVUE":[function(require,module,exports) {
module.exports = require("17a00983e6512fb3").getBundleURL("7UhFu") + "2.3851d6f7.jpg" + "?" + Date.now();

},{"17a00983e6512fb3":"lgJ39"}],"fiIjE":[function(require,module,exports) {
module.exports = require("62841b3e8603f5a8").getBundleURL("7UhFu") + "3.8d32340d.jpg" + "?" + Date.now();

},{"62841b3e8603f5a8":"lgJ39"}],"3BRui":[function(require,module,exports) {
module.exports = require("f992f7db1b848828").getBundleURL("7UhFu") + "4.21d2de26.jpg" + "?" + Date.now();

},{"f992f7db1b848828":"lgJ39"}],"bTb3z":[function(require,module,exports) {
module.exports = require("16994c11330a4961").getBundleURL("7UhFu") + "5.0aace4c4.jpg" + "?" + Date.now();

},{"16994c11330a4961":"lgJ39"}],"YarpM":[function(require,module,exports) {
module.exports = require("3c3f949e34e70986").getBundleURL("7UhFu") + "6.11eb6da9.jpg" + "?" + Date.now();

},{"3c3f949e34e70986":"lgJ39"}],"l1eLv":[function(require,module,exports) {
module.exports = require("b8ba62ba620073aa").getBundleURL("7UhFu") + "7.b19d5300.jpg" + "?" + Date.now();

},{"b8ba62ba620073aa":"lgJ39"}],"2vKdX":[function(require,module,exports) {
module.exports = require("5ba68868e3c49e51").getBundleURL("7UhFu") + "8.93eab6b0.jpg" + "?" + Date.now();

},{"5ba68868e3c49e51":"lgJ39"}],"ev70c":[function(require,module,exports) {
module.exports = require("e4a410fe78184e47").getBundleURL("7UhFu") + "9.268e0599.jpg" + "?" + Date.now();

},{"e4a410fe78184e47":"lgJ39"}],"5bzV3":[function(require,module,exports) {
module.exports = require("2f7ffefc4ace2c70").getBundleURL("7UhFu") + "10.ce00b8d6.jpg" + "?" + Date.now();

},{"2f7ffefc4ace2c70":"lgJ39"}],"k2bWL":[function(require,module,exports) {
module.exports = require("68abfa6235569b6c").getBundleURL("7UhFu") + "11.b61388d2.jpg" + "?" + Date.now();

},{"68abfa6235569b6c":"lgJ39"}],"jqWDy":[function(require,module,exports) {
module.exports = require("b69ccb87e91e6adc").getBundleURL("7UhFu") + "12.a3dc092b.jpg" + "?" + Date.now();

},{"b69ccb87e91e6adc":"lgJ39"}],"fh8JF":[function(require,module,exports) {
module.exports = require("3e29144e6e7e973c").getBundleURL("7UhFu") + "13.91d948de.jpg" + "?" + Date.now();

},{"3e29144e6e7e973c":"lgJ39"}],"a95wo":[function(require,module,exports) {
module.exports = require("1f50f6d8f6d353ef").getBundleURL("7UhFu") + "14.90a9ff44.jpg" + "?" + Date.now();

},{"1f50f6d8f6d353ef":"lgJ39"}],"6XHqv":[function(require,module,exports) {
module.exports = require("28d8c243f8bbc5ea").getBundleURL("7UhFu") + "15.56a2fe15.jpg" + "?" + Date.now();

},{"28d8c243f8bbc5ea":"lgJ39"}],"4i1hS":[function(require,module,exports) {
module.exports = require("d4fea57f18b3374c").getBundleURL("7UhFu") + "braPhoto.7c3787dc.png" + "?" + Date.now();

},{"d4fea57f18b3374c":"lgJ39"}],"6J2xB":[function(require,module,exports) {
module.exports = require("c5de4ebf08fd5c4f").getBundleURL("7UhFu") + "harry.5a0c83fe.png" + "?" + Date.now();

},{"c5de4ebf08fd5c4f":"lgJ39"}],"3lMSV":[function(require,module,exports) {
module.exports = require("99c2c08fc8cf7076").getBundleURL("7UhFu") + "prossecoHeadband.7279b616.png" + "?" + Date.now();

},{"99c2c08fc8cf7076":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"47u4Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../dom/index");
var _game = require("./game");
var _gameDefault = parcelHelpers.interopDefault(_game);
class Game_selection {
    constructor(){}
    triggerButton(key, game) {
        console.log("button triggered", key);
        (0, _index.revealGame)();
        this.game = new (0, _gameDefault.default)(key, game);
    }
    triggerLetter(letter) {
        this.game.triggerLetter(letter);
    }
    triggerInput(event) {
        this.game.triggerInput(event);
    }
    triggerGameButton(trigger) {
        this.game.triggerGameButton(trigger);
    }
}
exports.default = Game_selection;

},{"../dom/index":"9OTgz","./game":"g9U8P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9U8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../dom/index");
var _gameInfoJson = require("./utils/gameInfo.json");
var _gameInfoJsonDefault = parcelHelpers.interopDefault(_gameInfoJson);
var _irlGameInfoJson = require("./utils/irlGameInfo.json");
var _irlGameInfoJsonDefault = parcelHelpers.interopDefault(_irlGameInfoJson);
class Game {
    constructor(gameName, game){
        this.gameName = gameName;
        if (game != "irl") this.numOfRounds = Object.keys((0, _gameInfoJsonDefault.default)[this.gameName].rounds).length;
        this.initGame(game);
    }
    initGame(game) {
        console.log("init game", this.gameName);
        this.round = Number(localStorage.getItem(this.gameName));
        if (this.round == null) this.round = 0;
        let info = game == "irl" ? (0, _irlGameInfoJsonDefault.default) : (0, _gameInfoJsonDefault.default);
        console.log(info);
        (0, _index.setGameTitle)(info[this.gameName].title);
        (0, _index.setGameDescription)(info[this.gameName].description);
        (0, _index.setGame)(game);
        if (game == "irl") (0, _index.createIrl)(info[this.gameName].title);
        else this.generateRound();
    }
    generateRound() {
        this.question = (0, _gameInfoJsonDefault.default)[this.gameName].rounds[this.round].question;
        this.answer = (0, _gameInfoJsonDefault.default)[this.gameName].rounds[this.round].answer;
        this.answerLength = this.answer.replaceAll(" ", "").length;
        (0, _index.setGameScore)(this.round + "/" + this.numOfRounds);
        (0, _index.createGameRound)(this.gameName, this.question, this.round, this.answer);
        this.userAnswer = this.gameName == "fill_the_blanks" ? this.question.replaceAll(" ", "") : "";
    }
    triggerInput(letter) {
        console.log(letter);
        if (letter == "\u232B") {
            if (this.gameName == "scrambled_words") this.triggerBackspace();
            this.userAnswer = this.userAnswer.substring(0, this.userAnswer.length - 1);
            this.updateWord();
        } else if (letter != null) {
            if (letter.match(/[a-z]/i)) {
                if (this.gameName == "scrambled_words") {
                    let letterSelected = false;
                    for(let i = 0; i < this.question.length; i++)if (this.question.charAt(i) == letter && !letterSelected) {
                        this.question.replace(letter, "");
                        (0, _index.selectScrambledLetter)(letter).then(()=>{
                            this.userAnswer = this.userAnswer + letter;
                            this.updateWord();
                        });
                        letterSelected = true;
                    }
                } else if (this.gameName == "fill_the_blanks") {
                    let vowels = "iouea";
                    for(let i = 0; i < vowels.length; i++)if (this.question.charAt(i) == letter) {
                        this.question.replace(letter, "");
                        this.userAnswer = letter;
                    }
                } else this.userAnswer = this.userAnswer + letter;
            }
        }
        this.updateWord();
    }
    triggerLetter(letter) {
        console.log("triggerletter", letter, this.gameName);
        this.userAnswer = this.gameName == "scrambled_words" ? this.userAnswer + letter : this.userAnswer.replaceAll("_", letter);
        console.log("here", this.userAnswer);
        this.updateWord();
    }
    triggerBackspace() {
        let charRemoved = this.userAnswer.charAt(this.userAnswer.length - 1);
        (0, _index.addLetterToScrambledWord)(charRemoved);
        console.log("charRemoved", charRemoved);
    }
    updateWord() {
        (0, _index.setWord)(this.userAnswer, this.answer.replaceAll(" ", ""));
        if (this.userAnswer == this.answer.replaceAll(" ", "")) {
            console.log("ROUND COMPLETE");
            (0, _index.roundComplete)();
            setTimeout(()=>{
                if (this.round < this.numOfRounds - 1) {
                    this.round++;
                    console.log(this.gameName, this.round);
                    localStorage.setItem(this.gameName, "" + this.round);
                    this.generateRound();
                } else {
                    (0, _index.hideGame)();
                    localStorage.setItem(this.gameName, "" + this.numOfRounds);
                    (0, _index.revealCelebration)();
                }
            }, 2100);
        }
    }
    triggerGameButton(trigger) {
        if (trigger == "restart") {
            console.log("restart");
            this.generateRound();
        }
    }
}
exports.default = Game;

},{"../dom/index":"9OTgz","./utils/gameInfo.json":"iLiiY","./utils/irlGameInfo.json":"gu766","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51Hld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getUrlParams", ()=>getUrlParams);
const getUrlParams = ()=>{
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    let id = params.get("id");
    console.log("id", id);
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bTWk8","h7u1C"], "h7u1C", "parcelRequireafef")

//# sourceMappingURL=index.b71e74eb.js.map
