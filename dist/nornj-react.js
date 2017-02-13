(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nornj"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["nornj", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["NornJReact"] = factory(require("nornj"), require("react"), require("react-dom"));
	else
		root["NornJReact"] = factory(root["nj"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/* harmony default export */ __webpack_exports__["a"] = {
  initialData: null
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (callback) {
  var doc = document;
  if (doc.addEventListener) {
    doc.addEventListener("DOMContentLoaded", callback, false);
  } else {
    self.attachEvent("onload", callback);
  }
};;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nornj__);


__WEBPACK_IMPORTED_MODULE_0_nornj___default.a.registerExpr('brace', function (options) {
  return '{' + options.result() + '}';
}, {
  newContext: false,
  useString: false
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nornj__);
/* harmony export (immutable) */ __webpack_exports__["a"] = registerTmpl;


//注册模板装饰器
function registerTmpl(name, template) {
  if (__WEBPACK_IMPORTED_MODULE_0_nornj___default.a.isObject(name)) {
    template = name.template;
    name = name.name;
  }

  return function (target) {
    //注册组件
    if (name != null) {
      __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.registerComponent(name, target);
    }

    //创建模板函数
    if (template) {
      target.prototype.template = __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.compileH(template, name);
    }
  };
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony export (immutable) */ __webpack_exports__["a"] = renderTmplTag;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTmplTag;
/* harmony export (immutable) */ __webpack_exports__["c"] = setInitialData;




//渲染内联标签组件
function renderTmplTag(data, selector, isAuto) {
  var tags = getTmplTag(selector, isAuto),
      ret = [];

  __WEBPACK_IMPORTED_MODULE_1_nornj___default.a.each(tags, function (tag) {
    var tmpl = __WEBPACK_IMPORTED_MODULE_1_nornj___default.a.compileH(tag.innerHTML, tag.id),
        parentNode = tag.parentNode;

    ret.push(__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(tmpl(data), parentNode));
  }, false, true);

  return ret;
}

//获取全部内联组件
function getTmplTag(selector, isAuto) {
  if (!selector) {
    selector = 'script[type="text/nornj"]' + (isAuto ? '[autorender]' : '');
  }

  return document.querySelectorAll(selector);
}

//Set initial data for inline component
function setInitialData(data) {
  __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].initialData = data;
}

__WEBPACK_IMPORTED_MODULE_1_nornj___default.a.assign(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */], {
  renderTmplTag: renderTmplTag,
  getTmplTag: getTmplTag,
  setInitialData: setInitialData
});

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registerTmpl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docReady__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__expression__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renderTmplTag__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "renderTmplTag", function() { return __WEBPACK_IMPORTED_MODULE_6__renderTmplTag__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTmplTag", function() { return __WEBPACK_IMPORTED_MODULE_6__renderTmplTag__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setInitialData", function() { return __WEBPACK_IMPORTED_MODULE_6__renderTmplTag__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "registerTmpl", function() { return __WEBPACK_IMPORTED_MODULE_3__registerTmpl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "docReady", function() { return __WEBPACK_IMPORTED_MODULE_4__docReady__["a"]; });





 //Additional tag expressions

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

var _global = void 0;
if (typeof self !== 'undefined') {
  _global = self;

  //Initial render templates
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__docReady__["a" /* default */])(function () {
    __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].renderTmplTag(__WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */].initialData, null, true);
  });
} else {
  _global = global;
}
_global.NornJReact = _global.njr = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */];



/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__core__["a" /* default */];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ })
/******/ ]);
});