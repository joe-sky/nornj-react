(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nornj"), require("react"), require("mobx"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["nornj", "react", "mobx", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["NornJReact"] = factory(require("nornj"), require("react"), require("mobx"), require("react-dom"));
	else
		root["NornJReact"] = factory(root["nj"], root["React"], root["mobx"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_14__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registerTmpl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docReady__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mobx_extension_mobx_model__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mobx_extension_mobx_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mobx_extension_mobx_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__renderTmplTag__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "renderTmplTag", function() { return __WEBPACK_IMPORTED_MODULE_6__renderTmplTag__["a"]; });
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerTmpl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nornj__);


//注册模板装饰器
function registerTmpl(name, template, cache, components) {
  if (__WEBPACK_IMPORTED_MODULE_0_nornj___default.a.isObject(name)) {
    template = name.template;
    cache = name.cache;
    components = name.components;
    name = name.name;
  }

  return function (target) {
    //注册组件
    if (name != null) {
      __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.registerComponent(name, target);
    }

    //从标签的innerHTML获取模板
    if (/^#{1}/.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    //创建模板函数
    if (template) {
      target.prototype.template = (template._njTmpl ? template : __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.compileH(template, cache ? name : null)).bind({ _njIcp: __WEBPACK_IMPORTED_MODULE_0_nornj___default.a.isArray(components) ? components : [components] });
    }

    return target;
  };
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (callback) {
  var doc = document;
  if (doc.addEventListener) {
    doc.addEventListener("DOMContentLoaded", callback, false);
  } else {
    self.attachEvent("onload", callback);
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nornj = __webpack_require__(0);

var _nornj2 = _interopRequireDefault(_nornj);

var _mobx = __webpack_require__(8);

var _extensionConfig = __webpack_require__(9);

var _extensionConfig2 = _interopRequireDefault(_extensionConfig);

var _utils = __webpack_require__(10);

__webpack_require__(11);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var VALUE_CHECKED = ['ant-switch', 'ant-checkbox', 'el-checkbox'];
var NEED_TOJS = ['ant-cascader', 'ant-checkbox.group', 'ant-checkboxgroup', 'ant-datepicker.rangepicker', 'ant-rangepicker', 'el-cascader', 'el-checkbox.group', 'el-daterangepicker', 'el-timerangepicker'];
var TARGET_CHECKED = ['ant-checkbox'];

function _setValue(value, params) {
  var preventChange = void 0;
  if (params.beforeChange) {
    preventChange = params.beforeChange(params.value.val, params.args);
  }

  if (preventChange !== false) {
    var _value = params.reverse ? !params.value.val : value;
    if (params.action) {
      params.value._njCtx[_nornj2.default.isString(params.action) ? params.action : 'set' + (0, _utils.capitalize)(params.value.prop)](_value);
    } else {
      params.value._njCtx[params.value.prop] = _value;
    }

    params.afterChange && params.afterChange(params.value.val, params.args);
  }
}

function _setOnChange(options, value, action) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _opts$valuePropName = opts.valuePropName,
      valuePropName = _opts$valuePropName === undefined ? 'value' : _opts$valuePropName,
      _opts$changeEventName = opts.changeEventName,
      changeEventName = _opts$changeEventName === undefined ? 'onChange' : _opts$changeEventName,
      beforeChange = opts.beforeChange,
      afterChange = opts.afterChange,
      _opts$reverse = opts.reverse,
      reverse = _opts$reverse === undefined ? false : _opts$reverse;

  var parentName = options.parentName.toLowerCase();

  if (valuePropName === 'value' && VALUE_CHECKED.indexOf(parentName) > -1) {
    valuePropName = 'checked';
  }

  var _value = value.val;
  if (NEED_TOJS.indexOf(parentName) > -1) {
    _value = (0, _mobx.toJS)(_value);
  }

  switch (parentName) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
    case 'ant-checkbox':
    case 'ant-radio.group':
      {
        options.exProps[valuePropName] = _value;
        var _targetPropName = 'value';
        if (TARGET_CHECKED.indexOf(parentName) > -1) {
          _targetPropName = 'checked';
        }
        options.exProps[changeEventName] = function (e) {
          _setValue(e.target[_targetPropName], {
            parentName: parentName,
            value: value,
            args: arguments,
            action: action,
            valuePropName: valuePropName,
            beforeChange: beforeChange,
            afterChange: afterChange,
            reverse: reverse
          });
        };
        break;
      }
    case 'ant-select':
    case 'ant-cascader':
    case 'ant-switch':
    case 'ant-checkbox.group':
    case 'ant-checkboxgroup':
    case 'ant-datepicker':
    case 'ant-datepicker.monthpicker':
    case 'ant-datepicker.weekpicker':
    case 'ant-datepicker.rangepicker':
    case 'ant-monthpicker':
    case 'ant-weekpicker':
    case 'ant-rangepicker':
    case 'el-input':
    case 'el-select':
    case 'el-datepicker':
    case 'el-daterangepicker':
    case 'el-timeselect':
    case 'el-timepicker':
    case 'el-timerangepicker':
    case 'el-switch':
    case 'el-checkbox':
    case 'el-checkbox.group':
    case 'el-radio.group':
    case 'el-cascader':
    default:
      {
        options.exProps[valuePropName] = _value;
        options.exProps[changeEventName] = function (v) {
          _setValue(v, {
            parentName: parentName,
            value: value,
            args: arguments,
            action: action,
            valuePropName: valuePropName,
            beforeChange: beforeChange,
            afterChange: afterChange,
            reverse: reverse
          });
        };
        break;
      }
  }
}

(0, _nornj.registerExtension)('mobx-model', function (options) {
  var ret = options.result();
  if (ret == null) {
    return ret;
  }

  var value = ret,
      action = false,
      opts = ret._njOptions;
  if (opts) {
    value = ret.val;
    if (opts.action != null) {
      action = opts.action;
    }
  }

  _setOnChange(options, value, action, opts);
}, _extensionConfig2.default['mobx-model']);

(0, _nornj.registerExtension)('mst-model', function (options) {
  var ret = options.result();
  if (ret == null) {
    return ret;
  }

  var value = ret,
      action = true,
      opts = ret._njOptions;
  if (opts) {
    value = ret.val;
    if (opts.action != null) {
      action = opts.action;
    }
  }

  _setOnChange(options, value, action, opts);
}, _extensionConfig2.default['mst-model']);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  'mobx-model': {
    onlyGlobal: true,
    newContext: false,
    exProps: true,
    subExProps: true,
    isProp: true,
    addSet: true
  },
  'mst-model': {
    onlyGlobal: true,
    newContext: false,
    exProps: true,
    subExProps: true,
    isProp: true,
    addSet: true
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalize = exports.capitalize = function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nornj = __webpack_require__(0);

var _filterConfig = __webpack_require__(12);

var _filterConfig2 = _interopRequireDefault(_filterConfig);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _nornj.registerFilter)('options:', function (val, opts) {
  if (val == null) {
    return val;
  }
  return {
    val: val,
    _njOptions: opts
  };
}, _filterConfig2.default['options:']);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'options:': {
    onlyGlobal: true,
    hasOptions: false
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = renderTmplTag;
/* unused harmony export setInitialData */
/* unused harmony export setInitialDelimiters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nornj___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nornj__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(14);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ })
/******/ ]);
});