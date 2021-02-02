// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
var allLinks = document.querySelectorAll('a');
var pageContent = document.getElementsByClassName('content')[0];

window.onload = function (event) {
  console.log('reloaded');
  event.preventDefault();
  onRouteChange();
};

window.onunload = function (event) {
  console.log('unloaded');
  event.preventDefault();
};

Array.from(allLinks).forEach(function (link) {
  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    history.pushState(null, 'Quiz', evt.target.href);
    onRouteChange();
  });
});

var onRouteChange = function onRouteChange() {
  var pathName = new URL(window.location).pathname;

  if (pathName === '/einleitung') {
    var content = "\n            <h1> Einleitung </h1>\n            <h2> MovieNights </h2>\n            <p>Dieser Styleguide stellt die Grundlage f\xFCr die Website <a href=\"#\"> MovieNights </a> dar. MovieNights ist eine Plattform auf der Filmliebhaber gemeinsam mit ihren Freunden Filmabende organisieren k\xF6nnen. </p>\n            <h2> Ziele des Styleguides </h2>\n            <ul>\n                <li>konsitentes Design</li>\n                <li>konsistentes und skalierbares CSS</li>\n                <li>schneller und effizienter Einsatz von UI-Komponenten</li>\n            </ul>\n            <h2>Bereiche des Styleguides</h2>\n            <h3>Brand Guide</h3>\n            <p> Beschreibt Richtlinien bez\xFCglich der Typographie und der Farbgestaltung. </p>\n            <h3>CSS-Methodologie</h3>\n            <p> Beschreibt wie wir CSS modular, wiederverwendbar und skalierbar gestaltet werden kann. </p>\n            <h3>Component Library</h3>\n            <p> Zeigt verschiedenste UI-Komponenten mit Code-Beispielen, Visueller Darstellung und Erl\xE4uterung der Anwendung  </p>\n        ";
    pageContent.innerHTML = content;
    console.log(pageContent);
  } else if (pathName === '/farben') {
    var _content = "\n            <h1> Farben </h1>\n            <p>\n            <span>\n            </span>\n            </p>\n        ";
    pageContent.innerHTML = _content;
    console.log(pageContent);
  } else if (pathName === '/typographie') {
    var _content2 = "\n            <h1> Typographie </h1>\n            <h2>\xDCberschriften</h2>\n            <p>\n                Als \xFCberschrift Font wird lato verwendet.\n                In SCSS unter $heading-font\n            </p>\n            <h2>Fliestext</h2>\n            <p>\n                Als \xFCberschrift Font wird Open Sans verwendet.\n                In SCSS unter $main-font\n            </p>\n            <h2>\xDCberschriften</h2>\n            <p>\n                Als \xFCberschrift Font wird Monoton verwendet. Diese Strahlt den alten Kino Vibe aus\n                In SCSS unter $brand-font\n            </p>\n        ";
    pageContent.innerHTML = _content2;
    console.log(pageContent);
  } else if (pathName === '/code') {
    var _content3 = "\n            <h1> Code-Konventionen </h1>\n\n            <h2> Datei Struktur </h2>\n            <p> Die Dateistruktur orientiert sich an dem 7-1 Pattern.\n            Das bedeutet wir haben eine main.scss Datei, welche \n            mehrere andere scss-Datein importiert, welche sich\n            in verschiedenen Ordnern befinden. </p>\n\n            <p>Da MovieNights ein eher kleineres Projekt ist, m\xFCssen\n            nicht alle 7 Folder exakt \xFCbernommen werden.\n            Nicht verzichtet wird jedoch auf folgende Ordner: </p>\n\n            <h3>base</h3>\n            <p>Beinhaltet styles, die f\xFCr das gesamte Projekt gelten (zB reset.scss, typography.scss)</p>\n            <h3>components</h3>\n            <p>Beinhaltet Stylesheets f\xFCr die einzelnen Komponenten</p>\n            <h3>layout</h3>\n            <p>Beinhaltet Styles f\xFCr footer/header oder Navigation</p>\n            <h3>utils</h3>\n            <p>Beinhaltet alle sass variablen und somit auch vordefinierte Farben/Schriften etc.</p>\n\n            <h2>Reset.css</h2>\n            <p> Wir verwenden ein Reset CSS von https://meyerweb.com/eric/tools/css/reset/</p>\n            <p> Das Reset.css dient dazu, einige vordefinierten Styles der verschiedenen Browser zur\xFCckzusetzten,\n            um so universalit\xE4t zu erreichen und selbstst\xE4ndig styles erstellen zu k\xF6nnen.</p>\n\n            <h2>box-sizing: border-box</h2>\n            <p>Wir verwenden box-sizing: border-box, damit werden bei der Breite und bei der H\xF6he der Elemente\n            die paddings/margins/borders mit ber\xFCcksichtigt. Das kann das Styling sehr erleichtern.</p>\n\n            <h2>SASS</h2>\n            <p>Wir verwenden Sass aufgrund der vielen Vorteile, die Sass bietet. Vorteile sind vor allem\n            das erstellen von Variablen und das Verschachteln von Selektoren.</p>\n        ";
    pageContent.innerHTML = _content3;
    console.log(pageContent);
  } else if (pathName === '/naming') {
    var _content4 = "\n            <h1> Naming Conventions </h1>\n            <p>Um ein einheitliches Naming zu garantieren, werden die <a href=\"http://getbem.com/introduction/\">BEM</a> Naming Conventions befolgt. \n            BEM (Block-Element-Modifiers) ist ein simpler, leicht verst\xE4ndlicher und Intuitive Variante f\xFCr Naming Conventions.\n            Hierbei wird in bl\xF6cke, Elemente der Bl\xF6cke und Modifiers unterteilt.</p>\n            <h2>Bl\xF6cke</h2>\n            <p>Bl\xF6cke sind einzelstehende Komponenten</p>\n            <h2>Elemente</h2>\n            <p>Elemente sind teile von Bl\xE4cken. Als Elemente k\xF6nnen einzelne Punke(<li>) von Men\xFCs bezeichnet werden</p>\n            <h2>Modifiers</h2>\n            <p>Modifiers sind Zust\xE4nde der Elemente. Man kann diese nutzen, um beispielweise ein element den Zustand \"hidden zu geben\"</p>\n        ";
    pageContent.innerHTML = _content4;
    console.log(pageContent);
  } else if (pathName === '/ueberschriften') {
    var _content5 = "\n            <h1> \xDCberschriften </h1>\n        ";
    pageContent.innerHTML = _content5;
    console.log(pageContent);
  } else if (pathName === '/navigation') {
    var _content6 = "\n            <h1> Navigation </h1>\n        ";
    pageContent.innerHTML = _content6;
    console.log(pageContent);
  } else if (pathName === '/links') {
    var _content7 = "\n            <h1> Links </h1>\n        ";
    pageContent.innerHTML = _content7;
    console.log(pageContent);
  } else if (pathName === '/buttons') {
    var _content8 = "\n            <h1> Buttons </h1>\n        ";
    pageContent.innerHTML = _content8;
    console.log(pageContent);
  } else if (pathName === '/movie-Cards') {
    var _content9 = "\n            <h1> Movie Cards </h1>\n        ";
    pageContent.innerHTML = _content9;
    console.log(pageContent);
  } else if (pathName === '/event-cards') {
    console.log("hey");
    var _content10 = "\n            <div class=\"mobile_component\">\n                <div class=\"event\">\n                    <div class=\"event__host\">\n                        <img src=\"./assets/sgratkx3xj731.png\" alt=\"hostpic\">\n                    </div>\n                    <div class=\"event__info\">\n                        <h3 class=\"event__name\">Max Movie Night</h3>\n                        <div class=\"event__detail\">\n                            <span class=\"event__time\"> <img src=\"./assets/schedule-white-18dp.svg\" alt=\"time\"> 20:00</span>\n                            <span class=\"event__date\"> <img src=\"./assets/event-white-18dp.svg\" alt=\"date\"> 19.12 </span>\n                        </div>\n                    </div>\n                    <a class=\"event__arrow\">\n                        <img src=\"./assets/outline_arrow_back_ios_white_18dp.png\" alt=\"arrow\">\n                    </a>\n                </div>\n            </div>\n        ";
    pageContent.innerHTML = _content10;
    console.log(pageContent);
  } else if (pathName === '/listitem-cards') {
    var _content11 = "\n                <div class=\"mobile_component\">\n                <div class=\"listcard\">\n                    <a href=\"#\" class=\"listcard__link\">\n                        <span class=\"listcard__rank listcard__rank--first\">\n                            1\n                        </span>\n                    </a>\n                </div>\n                <div class=\"listcard\">\n                    <a href=\"#\" class=\"listcard__link\">\n                        <span class=\"listcard__rank\">\n                            2\n                        </span>\n                    </a>\n                </div>\n            </div>\n        ";
    pageContent.innerHTML = _content11;
    console.log(pageContent);
  } else if (pathName === '/bottom-nav') {
    var _content12 = "\n                <div class=\"mobile_component\">\n                    <nav class=\"bottom_nav\">\n                        <a href=\"#\" class=\"bottom_nav__link bottom_nav__link--active\">\n                            <i class=\"material-icons bottom_nav__icon\">assessment</i>\n                            <span class=\"bottom_nav__text bottom_nav__text--active\">Ranking</span>\n                        </a>\n                        <a href=\"#\" class=\"bottom_nav__link\">\n                            <i class=\"material-icons\">theaters</i>\n                            <span class=\"bottom_nav__text\">Details</span>\n                        </a>\n                        <a href=\"#\" class=\"bottom_nav__link\">\n                            <i class=\"material-icons\">chat</i>\n                            <span class=\"bottom_nav__text\">Chat</span>\n                        </a>\n                        <a href=\"#\" class=\"bottom_nav__link\">    \n                            <i class=\"material-icons\">assignment</i>\n                            <span class=\"bottom_nav__text\">Organisation</span>\n                        </a>\n                    </nav>\n                </div>\n        ";
    pageContent.innerHTML = _content12;
    console.log(pageContent);
  }
};
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49526" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/FilmRack_Styleguide.e31bb0bc.js.map