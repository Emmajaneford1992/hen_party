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
})({"hdaM1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "78fcd0ac8e9bd240";
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

},{}],"1jwFz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "triggerButton", ()=>triggerButton);
parcelHelpers.export(exports, "triggerInput", ()=>triggerInput);
parcelHelpers.export(exports, "triggerLetter", ()=>triggerLetter);
parcelHelpers.export(exports, "triggerGameButton", ()=>triggerGameButton);
var _buttons = require("./dom/buttons");
var _experience = require("./experience");
var _experienceDefault = parcelHelpers.interopDefault(_experience);
let game_selection = new (0, _experienceDefault.default)();
(0, _buttons.initButtons)();
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

},{"./dom/buttons":"hbCjX","./experience":"7jLhe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbCjX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initButtons", ()=>initButtons);
var _dom = require("../dom");
var _index = require("../index");
let game_backButton = document.querySelector(".game_backButton");
let celebration_button = document.querySelector(".celebration button");
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
    console.log("init buttons");
    buttonNames.forEach((buttonName)=>{
        let button = document.querySelector("." + buttonName);
        button.addEventListener("click", ()=>{
            console.log(buttonName, "pressed");
            if (buttonName == "splash_button") {
                console.log("splash button pressed");
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
}

},{"../dom":"e5ef3","../index":"1jwFz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5ef3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
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
// fill the blanks
// export function createFillTheBlanksRound(str) {
//     clearGame();
//     console.log(createFillTheBlanksRound)
//     let vowels =  ['a','e','i','o','u'];
//     vowels.forEach(vowel => {
//         let letter = document.createElement('button');
//         letters.push(letter)
//         letter.innerHTML = vowel;
//         game_question.append(letter)
//     });
//     for(let i = 0; i < str.length; i++){
//         let empty = document.createElement('button');
//         tiles.push(empty)
//         game_answer.append(empty)
//     }
//     letters.forEach((letter,i) => {
//         letter.addEventListener('click', () =>{
//             console.log('letter');
//             triggerLetter(letter.innerHTML)
//         })
//     });
// }
parcelHelpers.export(exports, "clearGame", ()=>clearGame);
parcelHelpers.export(exports, "createGameRound", ()=>createGameRound);
parcelHelpers.export(exports, "revealCelebration", ()=>revealCelebration);
parcelHelpers.export(exports, "hideCelebration", ()=>hideCelebration);
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
let game_input;
let finley_film_images = [
    require("e9b2d10e4352d8f9"),
    require("5150027459c7cef6"),
    require("dc16bf68064fcab9"),
    require("bd142d7a7fadc6b4"),
    require("b076fa38dd8bf071"),
    require("64b4a14905874dd7"),
    require("d907c90a747b53ce"),
    require("6b4a6a0dd2de2985"),
    require("f5882dc4cd32507c")
];
let face_merge_images = [
    require("b8d69b1d2cd10727"),
    require("2d31c5b2c7cbc3ae"),
    require("f9da29203652ea94"),
    require("83bdce455d327ac1"),
    require("a1da972b4716fe25"),
    require("d93c55291bf42208"),
    require("b989b8e69a00338"),
    require("cf223dbd8028b72a"),
    require("bde2acf25729ae82"),
    require("99fdd1f7e3f7fff1"),
    require("ff806764f8e88d01"),
    require("66c3b59a4f752219"),
    require("72d64dfa27a7c190"),
    require("7100d68763b7ad0c"),
    require("810aeb63c2fc95c3"),
    require("9bc8ede733d6099d")
];
let letters = [];
let tiles = [];
let words = [];
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
    let letterAdded = false;
    letters.forEach((letter, i)=>{
        if (!letter.classList.contains("letterSelect") && letter.innerHTML == char && !letterAdded) {
            letter.classList.add("letterSelect");
            letterAdded = true;
        }
    });
}
function setWordGreen() {
    tiles.forEach((tile, i)=>{
        tile.style.background = "linear-gradient(#ffffff, #00ff00)";
    });
}
function clearGame() {
    while(game_answer.firstChild)game_answer.removeChild(game_answer.lastChild);
    while(game_question.firstChild)game_question.removeChild(game_question.lastChild);
    letters = [];
    tiles = [];
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
    game_input.maxLength = answer.replaceAll(" ", "").length;
    game_inputGroup.append(game_input);
    game_input.addEventListener("input", (event)=>{
        (0, _index.triggerInput)(event);
    });
    if (game == "scrambled_words" || game == "fill_the_blanks") {
        let questionStr = game == "scrambled_words" ? question : "aeiou";
        console.log(questionStr);
        for(let i = 0; i < questionStr.length; i++){
            let letter = document.createElement("button");
            letters.push(letter);
            letter.innerHTML = questionStr.charAt(i);
            game_question.append(letter);
        }
        letters.forEach((letter, i)=>{
            console.log("letter", letter);
            letter.addEventListener("click", ()=>{
                if (!letter.classList.contains("letterSelect")) {
                    console.log("letter", letter.innerHTML);
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
function revealCelebration() {
    celebration.style.display = "flex";
}
function hideCelebration() {
    celebration.style.display = "none";
}

},{"../index":"1jwFz","e9b2d10e4352d8f9":"7jIjC","5150027459c7cef6":"hjEPZ","dc16bf68064fcab9":"6pix9","bd142d7a7fadc6b4":"39IYx","b076fa38dd8bf071":"aPBSU","64b4a14905874dd7":"9oKpH","d907c90a747b53ce":"jQzSh","6b4a6a0dd2de2985":"2m3f8","f5882dc4cd32507c":"ivRyq","b8d69b1d2cd10727":"dOffy","2d31c5b2c7cbc3ae":"eRdta","f9da29203652ea94":"fl9pr","83bdce455d327ac1":"4xVup","a1da972b4716fe25":"fNxpz","d93c55291bf42208":"juzHM","b989b8e69a00338":"6WMj6","cf223dbd8028b72a":"kOwMH","bde2acf25729ae82":"esF3D","99fdd1f7e3f7fff1":"gWJhY","ff806764f8e88d01":"g6Tvp","66c3b59a4f752219":"2Mr5N","72d64dfa27a7c190":"7HLwx","7100d68763b7ad0c":"krdQ6","810aeb63c2fc95c3":"4geVu","9bc8ede733d6099d":"bRVLK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jIjC":[function(require,module,exports) {
module.exports = require("450b625690ffcca7").getBundleURL("ao0Rz") + "0.30fedb2a.png" + "?" + Date.now();

},{"450b625690ffcca7":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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

},{}],"hjEPZ":[function(require,module,exports) {
module.exports = require("f0b5a9632296575f").getBundleURL("ao0Rz") + "1.f24d91fd.png" + "?" + Date.now();

},{"f0b5a9632296575f":"lgJ39"}],"6pix9":[function(require,module,exports) {
module.exports = require("2d3469362a650c5a").getBundleURL("ao0Rz") + "2.86f9b1fe.png" + "?" + Date.now();

},{"2d3469362a650c5a":"lgJ39"}],"39IYx":[function(require,module,exports) {
module.exports = require("810cdf33703c4950").getBundleURL("ao0Rz") + "3.e3b2708c.png" + "?" + Date.now();

},{"810cdf33703c4950":"lgJ39"}],"aPBSU":[function(require,module,exports) {
module.exports = require("17fe74f09381a4e2").getBundleURL("ao0Rz") + "4.fa654edd.png" + "?" + Date.now();

},{"17fe74f09381a4e2":"lgJ39"}],"9oKpH":[function(require,module,exports) {
module.exports = require("d0429c80719aab1f").getBundleURL("ao0Rz") + "5.f678caef.png" + "?" + Date.now();

},{"d0429c80719aab1f":"lgJ39"}],"jQzSh":[function(require,module,exports) {
module.exports = require("21e11ef3fea29802").getBundleURL("ao0Rz") + "6.4f28bc0c.png" + "?" + Date.now();

},{"21e11ef3fea29802":"lgJ39"}],"2m3f8":[function(require,module,exports) {
module.exports = require("6d4f16620498a8df").getBundleURL("ao0Rz") + "7.3e20f528.png" + "?" + Date.now();

},{"6d4f16620498a8df":"lgJ39"}],"ivRyq":[function(require,module,exports) {
module.exports = require("9454a8708f9694a0").getBundleURL("ao0Rz") + "8.64d28450.png" + "?" + Date.now();

},{"9454a8708f9694a0":"lgJ39"}],"dOffy":[function(require,module,exports) {
module.exports = require("a5239855ab078805").getBundleURL("ao0Rz") + "0.913e3608.png" + "?" + Date.now();

},{"a5239855ab078805":"lgJ39"}],"eRdta":[function(require,module,exports) {
module.exports = require("9755302cde363f37").getBundleURL("ao0Rz") + "1.3bbd30e2.png" + "?" + Date.now();

},{"9755302cde363f37":"lgJ39"}],"fl9pr":[function(require,module,exports) {
module.exports = require("f7b5b6de1decfc5b").getBundleURL("ao0Rz") + "2.f9ab0178.png" + "?" + Date.now();

},{"f7b5b6de1decfc5b":"lgJ39"}],"4xVup":[function(require,module,exports) {
module.exports = require("dad0b75425913e45").getBundleURL("ao0Rz") + "3.c5495562.png" + "?" + Date.now();

},{"dad0b75425913e45":"lgJ39"}],"fNxpz":[function(require,module,exports) {
module.exports = require("d5a08673cff0b624").getBundleURL("ao0Rz") + "4.e58bfc2e.png" + "?" + Date.now();

},{"d5a08673cff0b624":"lgJ39"}],"juzHM":[function(require,module,exports) {
module.exports = require("e00913dd013a915").getBundleURL("ao0Rz") + "5.8b78e72d.png" + "?" + Date.now();

},{"e00913dd013a915":"lgJ39"}],"6WMj6":[function(require,module,exports) {
module.exports = require("58120ab374e72350").getBundleURL("ao0Rz") + "6.18385202.png" + "?" + Date.now();

},{"58120ab374e72350":"lgJ39"}],"kOwMH":[function(require,module,exports) {
module.exports = require("1126b91f9f490699").getBundleURL("ao0Rz") + "7.bc3836cb.png" + "?" + Date.now();

},{"1126b91f9f490699":"lgJ39"}],"esF3D":[function(require,module,exports) {
module.exports = require("73a8fd1736cdcf33").getBundleURL("ao0Rz") + "8.4f6aef94.png" + "?" + Date.now();

},{"73a8fd1736cdcf33":"lgJ39"}],"gWJhY":[function(require,module,exports) {
module.exports = require("52b6b77a99d4f1a8").getBundleURL("ao0Rz") + "9.879a46dd.png" + "?" + Date.now();

},{"52b6b77a99d4f1a8":"lgJ39"}],"g6Tvp":[function(require,module,exports) {
module.exports = require("f548d0007fece7d1").getBundleURL("ao0Rz") + "10.9c6e5c21.png" + "?" + Date.now();

},{"f548d0007fece7d1":"lgJ39"}],"2Mr5N":[function(require,module,exports) {
module.exports = require("cb4e9d26a2f24751").getBundleURL("ao0Rz") + "11.86b965e0.png" + "?" + Date.now();

},{"cb4e9d26a2f24751":"lgJ39"}],"7HLwx":[function(require,module,exports) {
module.exports = require("c1230167237c4cb4").getBundleURL("ao0Rz") + "12.54bc567a.png" + "?" + Date.now();

},{"c1230167237c4cb4":"lgJ39"}],"krdQ6":[function(require,module,exports) {
module.exports = require("c41f657562e189ed").getBundleURL("ao0Rz") + "13.0bd1e0a5.png" + "?" + Date.now();

},{"c41f657562e189ed":"lgJ39"}],"4geVu":[function(require,module,exports) {
module.exports = require("226724eb5af17e50").getBundleURL("ao0Rz") + "14.2e090ce2.png" + "?" + Date.now();

},{"226724eb5af17e50":"lgJ39"}],"bRVLK":[function(require,module,exports) {
module.exports = require("1b111be5f3580f18").getBundleURL("ao0Rz") + "15.fc0a1c29.png" + "?" + Date.now();

},{"1b111be5f3580f18":"lgJ39"}],"gkKU3":[function(require,module,exports) {
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

},{}],"7jLhe":[function(require,module,exports) {
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

},{"../dom/index":"e5ef3","./game":"1WqlJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1WqlJ":[function(require,module,exports) {
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
                        this.userAnswer = this.userAnswer + letter;
                        (0, _index.selectScrambledLetter)(letter);
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
            setTimeout(()=>{
                if (this.round < this.numOfRounds - 1) {
                    this.round++;
                    this.generateRound();
                } else {
                    (0, _index.hideGame)();
                    (0, _index.revealCelebration)();
                }
            }, 1000);
        }
    }
    triggerGameButton(trigger) {
        if (trigger == "restart") this.generateRound();
    }
}
exports.default = Game;

},{"../dom/index":"e5ef3","./utils/gameInfo.json":"fsySA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsySA":[function(require,module,exports) {
module.exports = JSON.parse('{"scrambled_words":{"title":"Scrambled","description":"Click on the letters to unscamble the wedding related word","rounds":{"0":{"question":"simdbdaire","answer":"bridesmaid"},"1":{"question":"ni sawl","answer":"in laws"},"2":{"question":"cxgginhean vwso","answer":"exchanging vows"},"3":{"question":"tbse anm","answer":"best man"},"4":{"question":"nmhaecpga sotta","answer":"champagne toast"},"5":{"question":"rtifs nacde","answer":"first dance"},"6":{"question":"itucgnt the caek","answer":"cutting the cake"},"7":{"question":"yhoneomon","answer":"honeymoon"},"8":{"question":"saecnpa","answer":"canapes"},"9":{"question":"dinwegd dsers","answer":"wedding dress"},"10":{"question":"ttncfeio","answer":"confetti"},"11":{"question":"togepaporhrh","answer":"photographer"},"12":{"question":"mgirraae ftcierectia","answer":"marriage certificate"},"13":{"question":"idnegewd berakftas","answer":"wedding breakfast"},"14":{"question":"enh nghit","answer":"hen night"}}},"emoji_game":{"title":"Emoji game","description":"Guess the wedding related phrase from the emoji sequence","rounds":{"0":{"question":"\uD83D\uDC69 \uD83E\uDDF9 \uD83E\uDDFC \uD83C\uDFC5","answer":"maid of honour"},"1":{"question":"\u261D\uFE0F\uD83D\uDC83","answer":"first dance"},"2":{"question":"\uD83C\uDF38 \uD83D\uDC67","answer":"flower girl"},"3":{"question":"\uD83D\uDCA7\uD83D\uDCA7\uD83D\uDCA7\uD83C\uDF70","answer":"three tier cake"},"4":{"question":"\uD83C\uDF6F\uD83C\uDF19","answer":"honeymoon"},"5":{"question":"\u2702\uFE0F\uD83C\uDF70","answer":"cutting the cake"},"6":{"question":"\uD83D\uDCC4\uD83D\uDC66","answer":"page boy"},"7":{"question":"\uD83D\uDC8D\uD83D\uDC3B","answer":"ring bearer"},"8":{"question":"\uD83C\uDFC6\uD83D\uDC70","answer":"trophy wife"},"9":{"question":"\uD83C\uDF7E\uD83C\uDF5E","answer":"champagne toast"},"10":{"question":"\uD83D\uDC70\u270C\uFE0F\uD83D\uDC1D","answer":"bride to be"},"11":{"question":"\uD83D\uDC70\uD83D\uDEBF","answer":"bridal shower"}}},"finleys_films":{"title":"Finley\'s Films","description":"Guess the movie finley or mabel is starring in","rounds":{"0":{"question":"","answer":"castaway"},"1":{"question":"","answer":"lady and the tramp"},"2":{"question":"","answer":"titanic"},"3":{"question":"","answer":"forest gump"},"4":{"question":"","answer":"et"},"5":{"question":"","answer":"alien"},"6":{"question":"","answer":"the lion king"},"7":{"question":"","answer":"toy story"},"8":{"question":"","answer":"american beauty"}}},"fill_the_blanks":{"title":"Fill the blanks","description":"Pick the correct vowel to fill in the blank","rounds":{"0":{"question":"_ngag_m_nt","answer":"engagement"},"1":{"question":"b_ddow p_rk","answer":"baddow park"},"2":{"question":"h_neym__n","answer":"honeymoon"},"3":{"question":"for_v_r","answer":"forever"},"4":{"question":"_nv_tat_ons","answer":"invitations"},"5":{"question":"m_rri_ge","answer":"marriage"},"6":{"question":"g_rl_nd","answer":"garland"},"7":{"question":"h_ad tabl_","answer":"head table"},"8":{"question":"bo_q_et","answer":"bouquet"},"9":{"question":"sp__ch","answer":"speech"},"10":{"question":"c_r_mony","answer":"ceremony"},"11":{"question":"r_c_ption","answer":"reception"},"12":{"question":"c_ntr_pi_c_s","answer":"centrepieces"},"13":{"question":"c_l_brat_","answer":"celebrate"},"14":{"question":"m_n_gamy","answer":"monogamy"},"15":{"question":"l_ts _f l_ve","answer":"lots of love"},"16":{"question":"j_w_ll_ry","answer":"jewellery"},"17":{"question":"vid_ograph_rs","answer":"videographers"}}},"face_merge":{"title":"Face Merge","description":"Guess the celebrity or character the beautiful brides to be\'s faces have been merged with","rounds":{"0":{"question":"","answer":"barbie"},"1":{"question":"","answer":"katniss"},"2":{"question":"","answer":"wanda"},"3":{"question":"","answer":"merida"},"4":{"question":"","answer":"adele"},"5":{"question":"","answer":"daenerys"},"6":{"question":"","answer":"princess peach"},"7":{"question":"","answer":"princess fiona"},"8":{"question":"","answer":"princess leia"},"9":{"question":"","answer":"jack sparrow"},"10":{"question":"","answer":"harley quinn"},"11":{"question":"","answer":"shakira"},"12":{"question":"","answer":"amy winehouse"},"13":{"question":"","answer":"wonder woman"},"14":{"question":"","answer":"little red riding hood"},"15":{"question":"","answer":"rapunzel"}}}}');

},{}]},["hdaM1","1jwFz"], "1jwFz", "parcelRequireafef")

//# sourceMappingURL=index.8e9bd240.js.map
