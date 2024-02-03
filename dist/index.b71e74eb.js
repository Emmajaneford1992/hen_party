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
let game_selection = new (0, _experienceDefault.default)();
(0, _buttons.initButtons)();
let params = (0, _queryString.getUrlParams)();
if (params == null) {
    console.log("splash");
    (0, _dom.revealSplash)();
} else {
    console.log("found heart", params);
    (0, _dom.revealFoundHeart)();
}
function triggerButton(button) {
    console.log("button triggered");
    console.log(button, "button triggered");
    game_selection.triggerButton(button);
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

},{"./dom/buttons":"8Z3Vb","./experience":"47u4Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../queryString":"51Hld","./dom":"9OTgz"}],"8Z3Vb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButtons", ()=>initButtons);
var _dom = require("../dom");
var _index = require("../index");
let game_backButton = document.querySelector(".game_backButton");
let celebration_button = document.querySelector(".celebration button");
let foundHeart_button = document.querySelector(".foundHeart button");
let game_restartButton = document.querySelector(".game_restartButton");
let buttonNames = [
    "splash_button",
    "scavenger_hunt_button",
    "scrambled_words_button",
    "fill_the_blanks_button",
    "emoji_game_button",
    "harry_hunt_button",
    "finleys_films_button",
    "face_merge_button",
    "ring_toss_button",
    "bra_pong_button",
    "photo_challenge_button"
];
function initButtons() {
    buttonNames.forEach((buttonName)=>{
        let button = document.querySelector("." + buttonName);
        button.addEventListener("click", ()=>{
            console.log(buttonName, "pressed");
            if (buttonName == "splash_button") {
                (0, _dom.hideSplash)();
                (0, _dom.revealGameSelection)();
            } else {
                (0, _dom.hideGameSelection)();
                (0, _index.triggerButton)(buttonName);
            }
        });
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
parcelHelpers.export(exports, "hideSplash", ()=>hideSplash);
parcelHelpers.export(exports, "revealGameSelection", ()=>revealGameSelection);
parcelHelpers.export(exports, "hideGameSelection", ()=>hideGameSelection);
parcelHelpers.export(exports, "revealGame", ()=>revealGame);
parcelHelpers.export(exports, "hideGame", ()=>hideGame);
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
var _lottieInteractivity = require("@lottiefiles/lottie-interactivity");
var _index = require("../index");
// import image1 from "../assets/images/finleys_films/1.png";
//const image1 = new URL("../assets/images/finleys_films/1.png");
const splash = document.querySelector(".splash");
const game_selection = document.querySelector(".game_selection");
const game = document.querySelector(".game");
const game_question = document.querySelector(".game_question");
const game_answer = document.querySelector(".game_answer");
const game_title = document.querySelector(".game_title");
const game_description = document.querySelector(".game_description");
const game_score = document.querySelector(".game_score");
const celebration = document.querySelector(".celebration");
const foundHeart = document.querySelector(".foundHeart");
const game_restartButton = document.querySelector(".game_restartButton");
const game_tick = document.querySelector(".game_tick");
let game_input;
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
    require("6fab4ab8cf3ac61f"),
    require("d3789ea8b7715083"),
    require("85f158f0d7f77e5e"),
    require("f46ce4f095d41820"),
    require("2bbfa46d810b2fe3"),
    require("b62f4ee0b522f245"),
    require("6991d8ecf6927def"),
    require("52f7863484617a87"),
    require("a971fa284d22359b"),
    require("4baec8a8fbe7a309"),
    require("325b5779367d5d68"),
    require("33a669443db921cd"),
    require("6bd45606d8e4817"),
    require("679f3d22db7e728b"),
    require("31ac1d91d9cfb6e9"),
    require("9fb802b9f1c36158")
];
let letters = [];
let tiles = [];
let words = [];
let qWords = [];
function revealSplash() {
    console.log("hide Splash");
    splash.style.display = "flex";
}
function hideSplash() {
    console.log("hide Splash");
    splash.style.display = "none";
}
function revealGameSelection() {
    game_selection.style.display = "flex";
}
function hideGameSelection() {
    game_selection.style.display = "none";
}
function revealGame() {
    game.style.display = "flex";
}
function hideGame() {
    game.style.display = "none";
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
function setWord(word) {
    console.log(word);
    game_input.value = word;
    tiles.forEach((tile, i)=>{
        if (i < word.length) {
            tile.style.background = "linear-gradient(#fff0bd, #d0bf88)";
            tile.innerHTML = word.charAt(i);
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
    }
    game_answer.append(word);
    let game_inputGroup = document.createElement("div");
    game_inputGroup.classList.add("inputGroup");
    game_answer.append(game_inputGroup);
    game_input = document.createElement("input");
    game_input.style.height = words.length * 12 + "vw";
    game_input.maxLength = answer.replaceAll(" ", "").length;
    game_inputGroup.append(game_input);
    game_input.addEventListener("input", (event)=>{
        (0, _index.triggerInput)(event);
    });
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
    } else if (game == "emoji_game") {
        console.log("create emoji game", question);
        game_question.innerHTML = question;
    } else if (game == "finleys_films" || game == "face_merge") {
        let game_image = document.createElement("img");
        game_question.append(game_image);
        game_image.src = game == "finleys_films" ? finley_film_images[round] : face_merge_images[round];
    }
}
function roundComplete() {
    game_tick.style.display = "flex";
    game_restartButton.style.display = "none";
    let player = document.getElementById(".game_tick");
    player.addEventListener("ready", ()=>{
        (0, _lottieInteractivity.LottieInteractivity).create({
            player: ".game_tick",
            mode: "cursor",
            actions: [
                {
                    type: "click",
                    forceFlag: false
                }
            ]
        });
    });
}
function revealCelebration() {
    celebration.style.display = "flex";
}
function hideCelebration() {
    celebration.style.display = "none";
}
function revealFoundHeart() {
    foundHeart.style.display = "flex";
}
function hideFoundHeart() {
    foundHeart.style.display = "none";
}

},{"../index":"h7u1C","2c24d209ee8ac650":"fsvtb","924dfd98a9a4afcc":"bwcPy","1bb0b31733ecd07d":"dsQ2u","eafc87c2d4398b6b":"4eDtq","6fac3df1f4af5d41":"aSkAu","6ebcf8f404f1f0d5":"GCwAG","5d7fa836a86bafd5":"dFtSE","6d102d914c64c55f":"d33xe","d2803ab0b4d9bc52":"c4IQl","6fab4ab8cf3ac61f":"9q8YV","d3789ea8b7715083":"jGExb","85f158f0d7f77e5e":"lrocG","f46ce4f095d41820":"aLkx8","2bbfa46d810b2fe3":"h9Pzi","b62f4ee0b522f245":"9Q7cN","6991d8ecf6927def":"kty8P","52f7863484617a87":"cnjwc","a971fa284d22359b":"2cXa0","4baec8a8fbe7a309":"3D5fI","325b5779367d5d68":"gODXW","33a669443db921cd":"7mnZc","6bd45606d8e4817":"8PWnl","679f3d22db7e728b":"gpfw7","31ac1d91d9cfb6e9":"4iOu7","9fb802b9f1c36158":"lkS4c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@lottiefiles/lottie-interactivity":"l9f7Z"}],"fsvtb":[function(require,module,exports) {
module.exports = require("d898787985b4c17d").getBundleURL("7UhFu") + "0.61dbac3d.png" + "?" + Date.now();

},{"d898787985b4c17d":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"bwcPy":[function(require,module,exports) {
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

},{"c27099df9d3fa3a2":"lgJ39"}],"9q8YV":[function(require,module,exports) {
module.exports = require("c5f6655d3409fe62").getBundleURL("7UhFu") + "0.432a2572.png" + "?" + Date.now();

},{"c5f6655d3409fe62":"lgJ39"}],"jGExb":[function(require,module,exports) {
module.exports = require("aef654b51e21473").getBundleURL("7UhFu") + "1.1e8066b1.png" + "?" + Date.now();

},{"aef654b51e21473":"lgJ39"}],"lrocG":[function(require,module,exports) {
module.exports = require("c145b9ead3628c7b").getBundleURL("7UhFu") + "2.98eda960.png" + "?" + Date.now();

},{"c145b9ead3628c7b":"lgJ39"}],"aLkx8":[function(require,module,exports) {
module.exports = require("a0808849342353e6").getBundleURL("7UhFu") + "3.79442784.png" + "?" + Date.now();

},{"a0808849342353e6":"lgJ39"}],"h9Pzi":[function(require,module,exports) {
module.exports = require("448f5e9371c89fb6").getBundleURL("7UhFu") + "4.202fdb5e.png" + "?" + Date.now();

},{"448f5e9371c89fb6":"lgJ39"}],"9Q7cN":[function(require,module,exports) {
module.exports = require("121203e3c9e3fb5").getBundleURL("7UhFu") + "5.f4b208c0.png" + "?" + Date.now();

},{"121203e3c9e3fb5":"lgJ39"}],"kty8P":[function(require,module,exports) {
module.exports = require("d57283f4aa471dda").getBundleURL("7UhFu") + "6.7f8b8b7e.png" + "?" + Date.now();

},{"d57283f4aa471dda":"lgJ39"}],"cnjwc":[function(require,module,exports) {
module.exports = require("4c68ce1d537b96a0").getBundleURL("7UhFu") + "7.4e8316d2.png" + "?" + Date.now();

},{"4c68ce1d537b96a0":"lgJ39"}],"2cXa0":[function(require,module,exports) {
module.exports = require("6be6465404a95524").getBundleURL("7UhFu") + "8.c789e091.png" + "?" + Date.now();

},{"6be6465404a95524":"lgJ39"}],"3D5fI":[function(require,module,exports) {
module.exports = require("9ce3f771786c7f79").getBundleURL("7UhFu") + "9.b7f9c275.png" + "?" + Date.now();

},{"9ce3f771786c7f79":"lgJ39"}],"gODXW":[function(require,module,exports) {
module.exports = require("15ee6b53c7b2b3b2").getBundleURL("7UhFu") + "10.759c578e.png" + "?" + Date.now();

},{"15ee6b53c7b2b3b2":"lgJ39"}],"7mnZc":[function(require,module,exports) {
module.exports = require("d0198648e8e8aea4").getBundleURL("7UhFu") + "11.b2e2ab85.png" + "?" + Date.now();

},{"d0198648e8e8aea4":"lgJ39"}],"8PWnl":[function(require,module,exports) {
module.exports = require("2c2613314e88774f").getBundleURL("7UhFu") + "12.2017167a.png" + "?" + Date.now();

},{"2c2613314e88774f":"lgJ39"}],"gpfw7":[function(require,module,exports) {
module.exports = require("dae1071e10de9afe").getBundleURL("7UhFu") + "13.f2a0fe72.png" + "?" + Date.now();

},{"dae1071e10de9afe":"lgJ39"}],"4iOu7":[function(require,module,exports) {
module.exports = require("14c923d76a9e72fc").getBundleURL("7UhFu") + "14.bea6a23b.png" + "?" + Date.now();

},{"14c923d76a9e72fc":"lgJ39"}],"lkS4c":[function(require,module,exports) {
module.exports = require("b64ee85ed103b32f").getBundleURL("7UhFu") + "15.65df20bf.png" + "?" + Date.now();

},{"b64ee85ed103b32f":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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

},{}],"l9f7Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LottieInteractivity", ()=>l);
parcelHelpers.export(exports, "create", ()=>M);
function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(t);
}
function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function n(e, t) {
    for(var n = 0; n < t.length; n++){
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
function a(e, t) {
    if (null == e) return {};
    var n, i, a = function(e, t) {
        if (null == e) return {};
        var n, i, a = {}, r = Object.keys(e);
        for(i = 0; i < r.length; i++)n = r[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        for(i = 0; i < r.length; i++)n = r[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
function r(e, t) {
    var n = t.get(e);
    if (!n) throw new TypeError("attempted to get private field on non-instance");
    return n.get ? n.get.call(e) : n.value;
}
var o = {
    player: "lottie-player"
}, s = "[lottieInteractivity]:", l = function() {
    function l() {
        var n = this, M = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o, C = M.actions, A = M.container, T = M.mode, H = M.player, O = a(M, [
            "actions",
            "container",
            "mode",
            "player"
        ]);
        if (t(this, l), c.set(this, {
            writable: !0,
            value: function() {
                if (n.player) {
                    var e = function() {
                        n.player.addEventListener("enterFrame", r(n, E)), n.container.addEventListener("mouseenter", r(n, g)), n.container.addEventListener("mouseleave", r(n, w)), n.container.addEventListener("touchstart", r(n, g), {
                            passive: !0
                        }), n.container.addEventListener("touchend", r(n, w), {
                            passive: !0
                        });
                    }, t = function() {
                        n.container.addEventListener("mouseenter", r(n, g)), n.container.addEventListener("mouseleave", r(n, w)), n.container.addEventListener("touchstart", r(n, g), {
                            passive: !0
                        }), n.container.addEventListener("touchend", r(n, w), {
                            passive: !0
                        });
                    };
                    n.stateHandler.set("loop", function() {
                        n.actions[n.interactionIdx].loop ? n.player.loop = parseInt(n.actions[n.interactionIdx].loop) - 1 : n.player.loop = !0, n.player.autoplay = !0;
                    }), n.stateHandler.set("autoplay", function() {
                        n.player.loop = !1, n.player.autoplay = !0;
                    }), n.stateHandler.set("click", function() {
                        n.player.loop = !1, n.player.autoplay = !1, n.container.addEventListener("click", r(n, p));
                    }), n.stateHandler.set("hover", function() {
                        n.player.loop = !1, n.player.autoplay = !1, n.container.addEventListener("mouseenter", r(n, p)), n.container.addEventListener("touchstart", r(n, p), {
                            passive: !0
                        });
                    }), n.stateHandler.set("hold", t), n.stateHandler.set("pauseHold", t), n.transitionHandler.set("click", function() {
                        n.container.addEventListener("click", r(n, h));
                    }), n.transitionHandler.set("hover", function() {
                        n.container.addEventListener("mouseenter", r(n, h)), n.container.addEventListener("touchstart", r(n, h), {
                            passive: !0
                        });
                    }), n.transitionHandler.set("hold", e), n.transitionHandler.set("pauseHold", e), n.transitionHandler.set("repeat", function() {
                        n.player.loop = !0, n.player.autoplay = !0;
                        n.player.addEventListener("loopComplete", function e() {
                            r(n, f).call(n, {
                                handler: e
                            });
                        });
                    }), n.transitionHandler.set("onComplete", function() {
                        "loop" === n.actions[n.interactionIdx].state ? n.player.addEventListener("loopComplete", r(n, m)) : n.player.addEventListener("complete", r(n, m));
                    }), n.transitionHandler.set("seek", function() {
                        n.player.stop(), n.player.addEventListener("enterFrame", r(n, L)), n.container.addEventListener("mousemove", r(n, y)), n.container.addEventListener("touchmove", r(n, u), {
                            passive: !1
                        }), n.container.addEventListener("mouseout", r(n, v));
                    });
                }
            }
        }), p.set(this, {
            writable: !0,
            value: function() {
                var e = n.actions[n.interactionIdx].forceFlag;
                e || !0 !== n.player.isPaused ? e && r(n, x).call(n, !0) : r(n, x).call(n, !0);
            }
        }), d.set(this, {
            writable: !0,
            value: function() {
                0 === n.clickCounter ? (n.player.play(), n.clickCounter++) : (n.clickCounter++, n.player.setDirection(-1 * n.player.playDirection), n.player.play());
            }
        }), h.set(this, {
            writable: !0,
            value: function() {
                var e = n.actions[n.interactionIdx].forceFlag, t = n.actions[n.interactionIdx].state, i = n.actions[n.interactionIdx].transition;
                if ("chain" === n.mode) {
                    if (n.actions[n.interactionIdx].count) {
                        var a = parseInt(n.actions[n.interactionIdx].count);
                        if (n.clickCounter < a - 1) return void (n.clickCounter += 1);
                    }
                    return n.clickCounter = 0, !e && "click" === i && "click" === t || "hover" === i && "hover" === t ? n.transitionHandler.get("onComplete").call() : n.nextInteraction(), n.container.removeEventListener("click", r(n, h)), void n.container.removeEventListener("mouseenter", r(n, h));
                }
                e || !0 !== n.player.isPaused ? e && n.player.goToAndPlay(0, !0) : n.player.goToAndPlay(0, !0);
            }
        }), y.set(this, {
            writable: !0,
            value: function(e) {
                r(n, S).call(n, e.clientX, e.clientY);
            }
        }), u.set(this, {
            writable: !0,
            value: function(e) {
                e.cancelable && e.preventDefault(), r(n, S).call(n, e.touches[0].clientX, e.touches[0].clientY);
            }
        }), v.set(this, {
            writable: !0,
            value: function() {
                r(n, S).call(n, -1, -1);
            }
        }), m.set(this, {
            writable: !0,
            value: function() {
                "loop" === n.actions[n.interactionIdx].state ? n.player.removeEventListener("loopComplete", r(n, m)) : n.player.removeEventListener("complete", r(n, m)), n.nextInteraction();
            }
        }), f.set(this, {
            writable: !0,
            value: function(e) {
                var t = e.handler, i = 1;
                n.actions[n.interactionIdx].repeat && (i = n.actions[n.interactionIdx].repeat), n.playCounter >= i - 1 ? (n.playCounter = 0, n.player.removeEventListener("loopComplete", t), n.player.loop = !1, n.player.autoplay = !1, n.nextInteraction()) : n.playCounter += 1;
            }
        }), L.set(this, {
            writable: !0,
            value: function() {
                var e = n.actions[n.interactionIdx].frames;
                e && n.player.currentFrame >= parseInt(e[1]) - 1 && (n.player.removeEventListener("enterFrame", r(n, L)), n.container.removeEventListener("mousemove", r(n, y)), n.container.removeEventListener("mouseout", r(n, v)), setTimeout(n.nextInteraction, 0));
            }
        }), E.set(this, {
            writable: !0,
            value: function() {
                var e = n.actions[n.interactionIdx].frames;
                (e && n.player.currentFrame >= e[1] || n.player.currentFrame >= n.player.totalFrames - 1) && (n.player.removeEventListener("enterFrame", r(n, E)), n.container.removeEventListener("mouseenter", r(n, g)), n.container.removeEventListener("mouseleave", r(n, w)), n.container.removeEventListener("touchstart", r(n, g), {
                    passive: !0
                }), n.container.removeEventListener("touchend", r(n, w), {
                    passive: !0
                }), n.player.pause(), n.holdStatus = !1, n.nextInteraction()), -1 === n.player.playDirection && e && n.player.currentFrame < e[0] && n.player.pause();
            }
        }), g.set(this, {
            writable: !0,
            value: function() {
                -1 !== n.player.playDirection && null !== n.holdStatus && n.holdStatus || (n.player.setDirection(1), n.player.play(), n.holdStatus = !0);
            }
        }), w.set(this, {
            writable: !0,
            value: function() {
                "hold" === n.actions[n.interactionIdx].transition || "hold" === n.actions[n.interactionIdx].state || "hold" === n.actions[0].type ? (n.player.setDirection(-1), n.player.play()) : "pauseHold" !== n.actions[n.interactionIdx].transition && "pauseHold" !== n.actions[n.interactionIdx].state && "pauseHold" !== n.actions[0].type || n.player.pause(), n.holdStatus = !1;
            }
        }), I.set(this, {
            writable: !0,
            value: function() {
                if (n.container.removeEventListener("click", r(n, h)), n.container.removeEventListener("click", r(n, p)), n.container.removeEventListener("mouseenter", r(n, h)), n.container.removeEventListener("touchstart", r(n, h)), n.container.removeEventListener("touchmove", r(n, u)), n.container.removeEventListener("mouseenter", r(n, p)), n.container.removeEventListener("touchstart", r(n, p)), n.container.removeEventListener("mouseenter", r(n, g)), n.container.removeEventListener("touchstart", r(n, g)), n.container.removeEventListener("mouseleave", r(n, w)), n.container.removeEventListener("mousemove", r(n, y)), n.container.removeEventListener("mouseout", r(n, v)), n.container.removeEventListener("touchend", r(n, w)), n.player) try {
                    n.player.removeEventListener("loopComplete", r(n, m)), n.player.removeEventListener("complete", r(n, m)), n.player.removeEventListener("enterFrame", r(n, L)), n.player.removeEventListener("enterFrame", r(n, E));
                } catch (e) {}
            }
        }), i(this, "jumpToInteraction", function(e) {
            r(n, I).call(n), n.interactionIdx = e, n.interactionIdx < 0 ? n.interactionIdx = 0 : n.interactionIdx, n.nextInteraction(!1);
        }), i(this, "nextInteraction", function() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            n.oldInterctionIdx = n.interactionIdx, r(n, I).call(n), n.player.loop = !1;
            var t = n.actions[n.interactionIdx].jumpTo;
            t ? t >= 0 && t < n.actions.length ? (n.interactionIdx = t, r(n, k).call(n, {
                ignorePath: !1
            })) : (n.interactionIdx = 0, n.player.goToAndStop(0, !0), r(n, k).call(n, {
                ignorePath: !1
            })) : (e && n.interactionIdx++, n.interactionIdx >= n.actions.length ? n.actions[n.actions.length - 1].reset ? (n.interactionIdx = 0, n.player.resetSegments(!0), n.actions[n.interactionIdx].frames ? n.player.goToAndStop(n.actions[n.interactionIdx].frames, !0) : n.player.goToAndStop(0, !0), r(n, k).call(n, {
                ignorePath: !1
            })) : (n.interactionIdx = n.actions.length - 1, r(n, k).call(n, {
                ignorePath: !1
            })) : r(n, k).call(n, {
                ignorePath: !1
            })), n.container.dispatchEvent(new CustomEvent("transition", {
                bubbles: !0,
                composed: !0,
                detail: {
                    oldIndex: n.oldInterctionIdx,
                    newIndex: n.interactionIdx
                }
            }));
        }), x.set(this, {
            writable: !0,
            value: function(e) {
                var t = n.actions[n.interactionIdx].frames;
                if (!t) return n.player.resetSegments(!0), void n.player.goToAndPlay(0, !0);
                "string" == typeof t ? n.player.goToAndPlay(t, e) : n.player.playSegments(t, e);
            }
        }), b.set(this, {
            writable: !0,
            value: function() {
                var t = n.actions[n.interactionIdx].path;
                if (!t) {
                    if ("object" === e(n.enteredPlayer) && "AnimationItem" === n.enteredPlayer.constructor.name) {
                        if (t = n.enteredPlayer, n.player === t) return void r(n, k).call(n, {
                            ignorePath: !0
                        });
                    } else {
                        var i = (t = n.loadedAnimation).substr(t.lastIndexOf("/") + 1);
                        if (i = i.substr(0, i.lastIndexOf(".json")), n.player.fileName === i) return void r(n, k).call(n, {
                            ignorePath: !0
                        });
                    }
                }
                var a = n.container.getBoundingClientRect(), o = "width: " + a.width + "px !important; height: " + a.height + "px !important; background: " + n.container.style.background;
                if (n.container.setAttribute("style", o), "object" !== e(n.enteredPlayer) || "AnimationItem" !== n.enteredPlayer.constructor.name) {
                    if ("string" == typeof n.enteredPlayer) {
                        var l = document.querySelector(n.enteredPlayer);
                        l && "LOTTIE-PLAYER" === l.nodeName && (n.attachedListeners || (l.addEventListener("ready", function() {
                            n.container.style.width = "", n.container.style.height = "";
                        }), l.addEventListener("load", function() {
                            n.player = l.getLottie(), r(n, k).call(n, {
                                ignorePath: !0
                            });
                        }), n.attachedListeners = !0), l.load(t));
                    } else n.enteredPlayer instanceof HTMLElement && "LOTTIE-PLAYER" === n.enteredPlayer.nodeName && (n.attachedListeners || (n.enteredPlayer.addEventListener("ready", function() {
                        n.container.style.width = "", n.container.style.height = "";
                    }), n.enteredPlayer.addEventListener("load", function() {
                        n.player = n.enteredPlayer.getLottie(), r(n, k).call(n, {
                            ignorePath: !0
                        });
                    }), n.attachedListeners = !0), n.enteredPlayer.load(t));
                    if (!n.player) throw new Error("".concat(s, " Specified player is invalid."), n.enteredPlayer);
                } else {
                    if (!window.lottie) throw new Error("".concat(s, " A Lottie player is required."));
                    n.stop(), n.container.innerHTML = "", "object" === e(t) && "AnimationItem" === t.constructor.name ? n.player = window.lottie.loadAnimation({
                        loop: !1,
                        autoplay: !1,
                        animationData: t.animationData,
                        container: n.container
                    }) : n.player = window.lottie.loadAnimation({
                        loop: !1,
                        autoplay: !1,
                        path: t,
                        container: n.container
                    }), n.player.addEventListener("DOMLoaded", function() {
                        n.container.style.width = "", n.container.style.height = "", r(n, k).call(n, {
                            ignorePath: !0
                        });
                    });
                }
                n.clickCounter = 0, n.playCounter = 0;
            }
        }), k.set(this, {
            writable: !0,
            value: function(e) {
                var t = e.ignorePath, i = n.actions[n.interactionIdx].frames, a = n.actions[n.interactionIdx].state, o = n.actions[n.interactionIdx].transition, s = n.actions[n.interactionIdx].path, l = n.stateHandler.get(a), c = n.transitionHandler.get(o), p = n.actions[n.interactionIdx].speed ? n.actions[n.interactionIdx].speed : 1, d = n.actions[n.interactionIdx].delay ? n.actions[n.interactionIdx].delay : 0;
                t || !(s || n.actions[n.actions.length - 1].reset && 0 === n.interactionIdx) ? setTimeout(function() {
                    i && (n.player.autoplay = !1, n.player.resetSegments(!0), n.player.goToAndStop(i[0], !0)), l ? l.call() : "none" === a && (n.player.loop = !1, n.player.autoplay = !1), c && c.call(), n.player.autoplay && (n.player.resetSegments(!0), r(n, x).call(n, !0)), n.player.setSpeed(p);
                }, d) : r(n, b).call(n);
            }
        }), S.set(this, {
            writable: !0,
            value: function(e, t) {
                if (-1 !== e && -1 !== t) {
                    var i = n.getContainerCursorPosition(e, t);
                    e = i.x, t = i.y;
                }
                var a = n.actions.find(function(n) {
                    var i = n.position;
                    if (i) {
                        if (Array.isArray(i.x) && Array.isArray(i.y)) return e >= i.x[0] && e <= i.x[1] && t >= i.y[0] && t <= i.y[1];
                        if (!Number.isNaN(i.x) && !Number.isNaN(i.y)) return e === i.x && t === i.y;
                    }
                    return !1;
                });
                if (a) {
                    if ("seek" === a.type || "seek" === a.transition) {
                        var r = (e - a.position.x[0]) / (a.position.x[1] - a.position.x[0]), o = (t - a.position.y[0]) / (a.position.y[1] - a.position.y[0]);
                        n.player.playSegments(a.frames, !0), a.position.y[0] < 0 && a.position.y[1] > 1 ? n.player.goToAndStop(Math.floor(r * n.player.totalFrames), !0) : n.player.goToAndStop(Math.ceil((r + o) / 2 * n.player.totalFrames), !0);
                    } else "loop" === a.type ? n.player.playSegments(a.frames, !0) : "play" === a.type ? (!0 === n.player.isPaused && n.player.resetSegments(), n.player.playSegments(a.frames)) : "stop" === a.type && (n.player.resetSegments(!0), n.player.goToAndStop(a.frames[0], !0));
                }
            }
        }), P.set(this, {
            writable: !0,
            value: function() {
                var e = n.getContainerVisibility(), t = n.actions.find(function(t) {
                    var n = t.visibility;
                    return e >= n[0] && e <= n[1];
                });
                if (t) {
                    if ("seek" === t.type) {
                        var i = t.frames[0], a = 2 == t.frames.length ? t.frames[1] : n.player.totalFrames - 1;
                        null !== n.assignedSegment && (n.player.resetSegments(!0), n.assignedSegment = null), n.player.goToAndStop(i + Math.round((e - t.visibility[0]) / (t.visibility[1] - t.visibility[0]) * (a - i)), !0);
                    } else if ("loop" === t.type) n.player.loop = !0, (null === n.assignedSegment || n.assignedSegment !== t.frames || !0 === n.player.isPaused) && (n.player.playSegments(t.frames, !0), n.assignedSegment = t.frames);
                    else if ("play" === t.type || "playOnce" === t.type) {
                        if ("playOnce" === t.type && !n.scrolledAndPlayed) return n.scrolledAndPlayed = !0, n.player.resetSegments(!0), void (t.frames ? n.player.playSegments(t.frames, !0) : n.player.play());
                        "play" === t.type && n.player.isPaused && (n.player.resetSegments(!0), t.frames ? n.player.playSegments(t.frames, !0) : n.player.play());
                    } else "stop" === t.type && n.player.goToAndStop(t.frames[0], !0);
                }
            }
        }), this.enteredPlayer = H, "object" !== e(H) || "AnimationItem" !== H.constructor.name) {
            if ("string" == typeof H) {
                var W = document.querySelector(H);
                W && "LOTTIE-PLAYER" === W.nodeName && (H = W.getLottie());
            } else H instanceof HTMLElement && "LOTTIE-PLAYER" === H.nodeName && (H = H.getLottie());
            if (!H) {
                var F = s + "Specified player:" + H + " is invalid.";
                throw new Error(F);
            }
        }
        "string" == typeof A && (A = document.querySelector(A)), A || (A = H.wrapper), this.player = H, this.loadedAnimation = this.player.path + this.player.fileName + ".json", this.attachedListeners = !1, this.container = A, this.mode = T, this.actions = C, this.options = O, this.assignedSegment = null, this.scrolledAndPlayed = !1, this.interactionIdx = 0, this.oldInterctionIdx = 0, this.clickCounter = 0, this.playCounter = 0, this.stateHandler = new Map, this.transitionHandler = new Map;
    }
    var M, C, A;
    return M = l, C = [
        {
            key: "getContainerVisibility",
            value: function() {
                var e = this.container.getBoundingClientRect(), t = e.top, n = e.height;
                return (window.innerHeight - t) / (window.innerHeight + n);
            }
        },
        {
            key: "getContainerCursorPosition",
            value: function(e, t) {
                var n = this.container.getBoundingClientRect(), i = n.top;
                return {
                    x: (e - n.left) / n.width,
                    y: (t - i) / n.height
                };
            }
        },
        {
            key: "initScrollMode",
            value: function() {
                this.player.stop(), window.addEventListener("scroll", r(this, P), !0);
            }
        },
        {
            key: "initCursorMode",
            value: function() {
                this.actions && 1 === this.actions.length ? "click" === this.actions[0].type ? (this.player.loop = !1, this.player.stop(), this.container.addEventListener("click", r(this, h))) : "hover" === this.actions[0].type ? (this.player.loop = !1, this.player.stop(), this.container.addEventListener("mouseenter", r(this, h)), this.container.addEventListener("touchstart", r(this, h), {
                    passive: !0
                })) : "toggle" === this.actions[0].type ? (this.player.loop = !1, this.player.stop(), this.container.addEventListener("click", r(this, d))) : "hold" === this.actions[0].type || "pauseHold" === this.actions[0].type ? (this.container.addEventListener("mouseenter", r(this, g)), this.container.addEventListener("mouseleave", r(this, w)), this.container.addEventListener("touchstart", r(this, g), {
                    passive: !0
                }), this.container.addEventListener("touchend", r(this, w), {
                    passive: !0
                })) : "seek" === this.actions[0].type && (this.player.loop = !0, this.player.stop(), this.container.addEventListener("mousemove", r(this, y)), this.container.addEventListener("touchmove", r(this, u), {
                    passive: !1
                }), this.container.addEventListener("mouseout", r(this, v))) : (this.player.loop = !0, this.player.stop(), this.container.addEventListener("mousemove", r(this, y)), this.container.addEventListener("mouseleave", r(this, v)), r(this, S).call(this, -1, -1));
            }
        },
        {
            key: "initChainMode",
            value: function() {
                r(this, c).call(this), this.player.loop = !1, this.player.stop(), r(this, k).call(this, {
                    ignorePath: !1
                });
            }
        },
        {
            key: "start",
            value: function() {
                var e = this;
                "scroll" === this.mode ? this.player.isLoaded ? this.initScrollMode() : this.player.addEventListener("DOMLoaded", function() {
                    e.initScrollMode();
                }) : "cursor" === this.mode ? this.player.isLoaded ? this.initCursorMode() : this.player.addEventListener("DOMLoaded", function() {
                    e.initCursorMode();
                }) : "chain" === this.mode && (this.player.isLoaded ? this.initChainMode() : this.player.addEventListener("DOMLoaded", function() {
                    e.initChainMode();
                }));
            }
        },
        {
            key: "redefineOptions",
            value: function(t) {
                var n = t.actions, i = t.container, r = t.mode, o = t.player, l = a(t, [
                    "actions",
                    "container",
                    "mode",
                    "player"
                ]);
                if (this.stop(), this.enteredPlayer = o, "object" !== e(o) || "AnimationItem" !== o.constructor.name) {
                    if ("string" == typeof o) {
                        var c = document.querySelector(o);
                        c && "LOTTIE-PLAYER" === c.nodeName && (o = c.getLottie());
                    } else o instanceof HTMLElement && "LOTTIE-PLAYER" === o.nodeName && (o = o.getLottie());
                    if (!o) throw new Error(s + "Specified player:" + o + " is invalid.", o);
                }
                "string" == typeof i && (i = document.querySelector(i)), i || (i = o.wrapper), this.player = o, this.loadedAnimation = this.player.path + this.player.fileName + ".json", this.attachedListeners = !1, this.container = i, this.mode = r, this.actions = n, this.options = l, this.assignedSegment = null, this.scrolledAndPlayed = !1, this.interactionIdx = 0, this.clickCounter = 0, this.playCounter = 0, this.holdStatus = null, this.stateHandler = new Map, this.transitionHandler = new Map, this.start();
            }
        },
        {
            key: "stop",
            value: function() {
                if ("scroll" === this.mode && window.removeEventListener("scroll", r(this, P), !0), "cursor" === this.mode && (this.container.removeEventListener("click", r(this, h)), this.container.removeEventListener("click", r(this, d)), this.container.removeEventListener("mouseenter", r(this, h)), this.container.removeEventListener("touchstart", r(this, h)), this.container.removeEventListener("touchmove", r(this, u)), this.container.removeEventListener("mousemove", r(this, y)), this.container.removeEventListener("mouseleave", r(this, v)), this.container.removeEventListener("touchstart", r(this, g)), this.container.removeEventListener("touchend", r(this, w))), "chain" === this.mode && (this.container.removeEventListener("click", r(this, h)), this.container.removeEventListener("click", r(this, p)), this.container.removeEventListener("mouseenter", r(this, h)), this.container.removeEventListener("touchstart", r(this, h)), this.container.removeEventListener("touchmove", r(this, u)), this.container.removeEventListener("mouseenter", r(this, p)), this.container.removeEventListener("touchstart", r(this, p)), this.container.removeEventListener("mouseenter", r(this, g)), this.container.removeEventListener("touchstart", r(this, g)), this.container.removeEventListener("mouseleave", r(this, w)), this.container.removeEventListener("mousemove", r(this, y)), this.container.removeEventListener("mouseout", r(this, v)), this.container.removeEventListener("touchend", r(this, w)), this.player)) try {
                    this.player.removeEventListener("loopComplete", r(this, m)), this.player.removeEventListener("complete", r(this, m)), this.player.removeEventListener("enterFrame", r(this, L)), this.player.removeEventListener("enterFrame", r(this, E));
                } catch (e) {}
                this.player && (this.player.destroy(), this.player = null);
            }
        }
    ], n(M.prototype, C), A && n(M, A), l;
}(), c = new WeakMap, p = new WeakMap, d = new WeakMap, h = new WeakMap, y = new WeakMap, u = new WeakMap, v = new WeakMap, m = new WeakMap, f = new WeakMap, L = new WeakMap, E = new WeakMap, g = new WeakMap, w = new WeakMap, I = new WeakMap, x = new WeakMap, b = new WeakMap, k = new WeakMap, S = new WeakMap, P = new WeakMap, M = function(e) {
    var t = new l(e);
    return t.start(), t;
};
exports.default = M;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47u4Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _index = require("../dom/index");
var _game = require("./game");
var _gameDefault = parcelHelpers.interopDefault(_game);
let scrambled_words_button = document.querySelector(".scrambled_words_button");
scrambled_words_button.addEventListener("click", ()=>{
    console.log("scrambled words button pressed");
});
class Game_selection {
    constructor(){}
    triggerButton(button) {
        console.log("button triggered", button);
        this.gameName = button.replace("_button", "");
        if (this.gameName == "scrambled_words" || this.gameName == "emoji_game" || this.gameName == "finleys_films" || this.gameName == "fill_the_blanks" || this.gameName == "face_merge") {
            (0, _index.revealGame)();
            this.game = new (0, _gameDefault.default)(this.gameName);
        }
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
class Game {
    constructor(gameName){
        this.gameName = gameName;
        this.numOfRounds = Object.keys((0, _gameInfoJsonDefault.default)[this.gameName].rounds).length;
        this.initGame();
    }
    initGame() {
        console.log("init game", this.gameName);
        this.round = 0;
        (0, _index.setGameTitle)((0, _gameInfoJsonDefault.default)[this.gameName].title);
        (0, _index.setGameDescription)((0, _gameInfoJsonDefault.default)[this.gameName].description);
        this.generateRound();
    }
    generateRound() {
        this.question = (0, _gameInfoJsonDefault.default)[this.gameName].rounds[this.round].question;
        this.answer = (0, _gameInfoJsonDefault.default)[this.gameName].rounds[this.round].answer;
        this.answerLength = this.answer.replaceAll(" ", "").length;
        (0, _index.setGameScore)(this.round + "/" + this.numOfRounds);
        (0, _index.createGameRound)(this.gameName, this.question, this.round, this.answer);
        this.userAnswer = this.gameName == "fill_the_blanks" ? this.question : "";
    }
    triggerInput(event) {
        console.log("triggerinput");
        if (event.inputType == "deleteContentBackward") {
            if (this.gameName == "scrambled_words") this.triggerBackspace();
            this.userAnswer = event.target.value;
            this.updateWord();
        }
        let letter = event.data;
        if (letter != null) {
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
        console.log("triggerletter", letter);
        this.userAnswer = this.gameName == "scrambled_words" ? this.userAnswer + letter : this.userAnswer.replaceAll("_", letter);
        console.log(this.userAnswer);
        this.updateWord();
    }
    triggerBackspace() {
        let charRemoved = this.userAnswer.charAt(this.userAnswer.length - 1);
        (0, _index.addLetterToScrambledWord)(charRemoved);
        console.log("charRemoved", charRemoved);
    }
    updateWord() {
        (0, _index.setWord)(this.userAnswer);
        if (this.userAnswer == this.answer.replaceAll(" ", "")) {
            console.log("ROUND COMPLETE");
            (0, _index.roundComplete)();
            setTimeout(()=>{
                if (this.round < this.numOfRounds - 1) {
                    this.round++;
                    this.generateRound();
                } else {
                    (0, _index.hideGame)();
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

},{"../dom/index":"9OTgz","./utils/gameInfo.json":"iLiiY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iLiiY":[function(require,module,exports) {
module.exports = JSON.parse('{"scrambled_words":{"title":"Scrambled","description":"Click on the letters to unscamble the wedding related word","rounds":{"0":{"question":"simdbdaire","answer":"bridesmaid"},"1":{"question":"ni sawl","answer":"in laws"},"2":{"question":"cxgginhean vwso","answer":"exchanging vows"},"3":{"question":"tbse anm","answer":"best man"},"4":{"question":"nmhaecpga sotta","answer":"champagne toast"},"5":{"question":"rtifs nacde","answer":"first dance"},"6":{"question":"itucgnt the caek","answer":"cutting the cake"},"7":{"question":"yhoneomon","answer":"honeymoon"},"8":{"question":"saecnpa","answer":"canapes"},"9":{"question":"dinwegd dsers","answer":"wedding dress"},"10":{"question":"ttncfeio","answer":"confetti"},"11":{"question":"togepaporhrh","answer":"photographer"},"12":{"question":"mgirraae ftcierectia","answer":"marriage certificate"},"13":{"question":"idnegewd berakftas","answer":"wedding breakfast"},"14":{"question":"enh nghit","answer":"hen night"}}},"emoji_game":{"title":"Emoji game","description":"Guess the wedding related phrase from the emoji sequence","rounds":{"0":{"question":"\uD83D\uDC69 \uD83E\uDDF9 \uD83E\uDDFC \uD83C\uDFC5","answer":"maid of honour"},"1":{"question":"\u261D\uFE0F\uD83D\uDC83","answer":"first dance"},"2":{"question":"\uD83C\uDF38 \uD83D\uDC67","answer":"flower girl"},"3":{"question":"\uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7\uD83C\uDF70","answer":"three tier cake"},"4":{"question":"\uD83C\uDF6F\uD83C\uDF19","answer":"honeymoon"},"5":{"question":"\u2702\uFE0F\uD83C\uDF70","answer":"cutting the cake"},"6":{"question":"\uD83D\uDCC4\uD83D\uDC66","answer":"page boy"},"7":{"question":"\uD83D\uDC8D\uD83D\uDC3B","answer":"ring bearer"},"8":{"question":"\uD83C\uDFC6\uD83D\uDC70","answer":"trophy wife"},"9":{"question":"\uD83C\uDF7E\uD83C\uDF5E","answer":"champagne toast"},"10":{"question":"\uD83D\uDC70\u270C\uFE0F\uD83D\uDC1D","answer":"bride to be"},"11":{"question":"\uD83D\uDC70\uD83D\uDEBF","answer":"bridal shower"}}},"finleys_films":{"title":"Finley\'s Films","description":"Guess the movie finley or mabel is starring in","rounds":{"0":{"question":"","answer":"castaway"},"1":{"question":"","answer":"lady and the tramp"},"2":{"question":"","answer":"titanic"},"3":{"question":"","answer":"forest gump"},"4":{"question":"","answer":"et"},"5":{"question":"","answer":"alien"},"6":{"question":"","answer":"the lion king"},"7":{"question":"","answer":"toy story"},"8":{"question":"","answer":"american beauty"}}},"fill_the_blanks":{"title":"Fill the blanks","description":"Pick the correct vowel to fill in the blank","rounds":{"0":{"question":"_ngag_m_nt","answer":"engagement"},"1":{"question":"b_ddow p_rk","answer":"baddow park"},"2":{"question":"h_neym__n","answer":"honeymoon"},"3":{"question":"for_v_r","answer":"forever"},"4":{"question":"_nv_tat_ons","answer":"invitations"},"5":{"question":"m_rri_ge","answer":"marriage"},"6":{"question":"g_rl_nd","answer":"garland"},"7":{"question":"h_ad tabl_","answer":"head table"},"8":{"question":"bo_q_et","answer":"bouquet"},"9":{"question":"sp__ch","answer":"speech"},"10":{"question":"c_r_mony","answer":"ceremony"},"11":{"question":"r_c_ption","answer":"reception"},"12":{"question":"c_ntr_pi_c_s","answer":"centrepieces"},"13":{"question":"c_l_brat_","answer":"celebrate"},"14":{"question":"m_n_gamy","answer":"monogamy"},"15":{"question":"l_ts _f l_ve","answer":"lots of love"},"16":{"question":"j_w_ll_ry","answer":"jewellery"},"17":{"question":"vid_ograph_rs","answer":"videographers"},"18":{"question":"b_llrop_s r_tr_at","answer":"bellropes retreat"}}},"face_merge":{"title":"Face Merge","description":"Guess the celebrity or character the beautiful brides to be\'s faces have been merged with","rounds":{"0":{"question":"","answer":"barbie"},"1":{"question":"","answer":"katniss"},"2":{"question":"","answer":"wanda"},"3":{"question":"","answer":"merida"},"4":{"question":"","answer":"adele"},"5":{"question":"","answer":"daenerys"},"6":{"question":"","answer":"princess peach"},"7":{"question":"","answer":"princess fiona"},"8":{"question":"","answer":"princess leia"},"9":{"question":"","answer":"jack sparrow"},"10":{"question":"","answer":"harley quinn"},"11":{"question":"","answer":"shakira"},"12":{"question":"","answer":"amy winehouse"},"13":{"question":"","answer":"wonder woman"},"14":{"question":"","answer":"little red riding hood"},"15":{"question":"","answer":"rapunzel"}}}}');

},{}],"51Hld":[function(require,module,exports) {
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
