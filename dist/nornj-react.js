(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nornj"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["nornj", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["NornJReact"] = factory(require("nornj"), require("react"), require("react-dom"));
	else
		root["NornJReact"] = factory(root["nj"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  initialData: null,
  initialDelimiters: null
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registerTmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docReady__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__renderTmplTag__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "renderTmplTag", function() { return __WEBPACK_IMPORTED_MODULE_5__renderTmplTag__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "registerTmpl", function() { return __WEBPACK_IMPORTED_MODULE_3__registerTmpl__["a"]; });






__WEBPACK_IMPORTED_MODULE_1_nornj___default.a.assign(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */], {
  registerTmpl: __WEBPACK_IMPORTED_MODULE_3__registerTmpl__["a" /* default */],
  docReady: __WEBPACK_IMPORTED_MODULE_4__docReady__["a" /* default */]
});

//Set createElement function for NornJ
__WEBPACK_IMPORTED_MODULE_1_nornj___default.a.config({
  createElement: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement,
  outputH: true,
  delimiters: {
    start: '{',
    end: '}',
    comment: ''
  }
});

var _defaultCfg = { hasEventObject: true },
    componentConfig = __WEBPACK_IMPORTED_MODULE_1_nornj___default.a.componentConfig;
componentConfig.input = componentConfig.select = componentConfig.textarea = _defaultCfg;

var _global = void 0;
if (typeof self !== 'undefined') {
  _global = self;

  //Initial render templates
  Object(__WEBPACK_IMPORTED_MODULE_4__docReady__["a" /* default */])(function () {
    return __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].renderTmplTag({
      data: __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].initialData,
      delimiters: __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].initialDelimiters,
      isAuto: true
    });
  });
} else {
  _global = global;
}
_global.NornJReact = _global.njr = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */];



/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */]);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerTmpl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





//注册模板装饰器
function registerTmpl(name, template, cache, components) {
  if (__WEBPACK_IMPORTED_MODULE_0_nornj___default.a.isObject(name)) {
    template = name.template;
    cache = name.cache;
    components = name.components;
    name = name.name;
  }

  return function (component) {
    //注册组件
    if (name != null) {
      __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.registerComponent(name, component);
    }

    //从标签的innerHTML获取模板
    if (/^#{1}/.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    //创建模板函数
    var tmplFn = void 0;
    if (template) {
      tmplFn = (template._njTmpl ? template : __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.compileH(template, cache ? name : null)).bind({
        _njIcp: __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.isArray(components) ? components : [components]
      });
    }

    var Wrapper = function (_Component) {
      _inherits(Wrapper, _Component);

      function Wrapper() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Wrapper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (instance) {
          _this.wrappedInstance = instance;
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Wrapper, [{
        key: 'render',
        value: function render() {
          var newProps = {};
          for (var key in this.props) {
            if (this.props.hasOwnProperty(key)) {
              newProps[key] = this.props[key];
            }
          }

          if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* isStateless */])(component)) {
            newProps.ref = this.getRef;
          }
          if (tmplFn) {
            newProps.template = tmplFn;
          }

          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(component, newProps);
        }
      }]);

      return Wrapper;
    }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

    Wrapper.displayName = component.displayName;


    return Wrapper;
  };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isStateless;
function isStateless(component) {
  // `function() {}` has prototype, but `() => {}` doesn't
  // `() => {}` via Babel has prototype too.
  return !(component.prototype && component.prototype.render);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  var doc = document;
  if (doc.addEventListener) {
    doc.addEventListener('DOMContentLoaded', callback, false);
  } else {
    self.attachEvent('onload', callback);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderTmplTag;
/* unused harmony export setInitialData */
/* unused harmony export setInitialDelimiters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);




//渲染模板标签
function renderTmplTag() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data = options.data,
      selector = options.selector,
      target = options.target,
      isAuto = options.isAuto,
      delimiters = options.delimiters;

  if (!selector) {
    selector = 'script[type="text/nornj"]' + (isAuto ? '[data-auto]' : '');
  }

  var tags = document.querySelectorAll(selector),
      ret = [];

  __WEBPACK_IMPORTED_MODULE_1_nornj___default.a.each(tags, function (tag) {
    var tmplFn = __WEBPACK_IMPORTED_MODULE_1_nornj___default.a.compileH(tag.innerHTML, tag.id, null, delimiters);
    var targetNode = void 0;

    if (target == null) {
      target = tag.getAttribute('data-target');
    }
    if (target) {
      if (__WEBPACK_IMPORTED_MODULE_1_nornj___default.a.isString(target)) {
        targetNode = document.querySelector(target);
      } else {
        targetNode = target;
      }
    } else {
      targetNode = tag.parentNode;
    }

    ret.push(__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_nornj___default.a.isArray(data) ? tmplFn.apply(null, data) : tmplFn(data), targetNode));
  }, null, true);

  return ret;
}

//Set initial data for inline component
function setInitialData(data) {
  __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].initialData = data;
}

function setInitialDelimiters(delimiters) {
  __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].initialDelimiters = delimiters;
}

__WEBPACK_IMPORTED_MODULE_1_nornj___default.a.assign(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */], {
  renderTmplTag: renderTmplTag,
  setInitialData: setInitialData,
  setInitialDelimiters: setInitialDelimiters
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })
/******/ ]);
});