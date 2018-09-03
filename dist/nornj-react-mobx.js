(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nornj"), require("mobx"), require("mobx-react"));
	else if(typeof define === 'function' && define.amd)
		define(["nornj", "mobx", "mobx-react"], factory);
	else if(typeof exports === 'object')
		exports["NornJReactMobx"] = factory(require("nornj"), require("mobx"), require("mobx-react"));
	else
		root["NornJReactMobx"] = factory(root["nj"], root["mobx"], root["mobxReact"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nornj = __webpack_require__(0);

var _mobx = __webpack_require__(1);

var _mobxReact = __webpack_require__(3);

__webpack_require__(4);

(0, _nornj.registerComponent)('mobx-Provider', _mobxReact.Provider);
(0, _nornj.registerFilter)('toJS', function (v) {
  return (0, _mobx.toJS)(v);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nornj = __webpack_require__(0);

var _nornj2 = _interopRequireDefault(_nornj);

var _mobx = __webpack_require__(1);

var _extensionConfig = __webpack_require__(5);

var _extensionConfig2 = _interopRequireDefault(_extensionConfig);

var _utils = __webpack_require__(6);

__webpack_require__(7);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _setValue(value, params, compInstance) {
  var preventChange = void 0;
  if (params.beforeChange) {
    var _params$beforeChange;

    preventChange = (_params$beforeChange = params.beforeChange).apply.apply(_params$beforeChange, [compInstance, params.value.val].concat(_toConsumableArray(params.args)));
  }

  if (preventChange !== false) {
    var _params$afterChange;

    var _value = params.reverse ? !params.value.val : value;
    if (params.action) {
      params.value._njCtx[_nornj2.default.isString(params.action) ? params.action : 'set' + (0, _utils.capitalize)(params.value.prop)](_value);
    } else {
      params.value._njCtx[params.value.prop] = _value;
    }

    params.changeEvent && params.changeEvent.apply(compInstance, params.args);
    params.afterChange && (_params$afterChange = params.afterChange).apply.apply(_params$afterChange, [compInstance, params.value.val].concat(_toConsumableArray(params.args)));
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
  var tagName = options.tagName,
      attrs = options.attrs,
      data = options.context.data;

  var componentConfig = _nornj2.default.getComponentConfig(tagName) || {};

  if (valuePropName === 'value' && componentConfig.valuePropName != null) {
    valuePropName = componentConfig.valuePropName;
  }

  var _value = value.val;
  if (componentConfig.needToJS) {
    _value = (0, _mobx.toJS)(_value);
  }

  var changeEvent = attrs[changeEventName];
  var compInstance = data[data.length - 1];
  if (componentConfig.hasEventObject) {
    var targetPropName = componentConfig.targetPropName || 'value';

    attrs[valuePropName] = _value;
    attrs[changeEventName] = function (e) {
      _setValue(e.target[targetPropName], {
        value: value,
        args: arguments,
        changeEvent: changeEvent,
        action: action,
        valuePropName: valuePropName,
        beforeChange: beforeChange,
        afterChange: afterChange,
        reverse: reverse
      }, compInstance);
    };
  } else {
    attrs[valuePropName] = _value;
    attrs[changeEventName] = function (v) {
      _setValue(v, {
        value: value,
        args: arguments,
        changeEvent: changeEvent,
        action: action,
        valuePropName: valuePropName,
        beforeChange: beforeChange,
        afterChange: afterChange,
        reverse: reverse
      }, compInstance);
    };
  }
}

(0, _nornj.registerExtension)('mobx', function (options) {
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
}, _extensionConfig2.default['mobx']);

(0, _nornj.registerExtension)('mst', function (options) {
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
}, _extensionConfig2.default['mst']);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  'mobx': {
    onlyGlobal: true,
    newContext: false,
    exProps: true,
    subExProps: true,
    isProp: true,
    addSet: true,
    useExpressionInJsx: true
  },
  'mst': {
    onlyGlobal: true,
    newContext: false,
    exProps: true,
    subExProps: true,
    isProp: true,
    addSet: true,
    useExpressionInJsx: true
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalize = exports.capitalize = function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nornj = __webpack_require__(0);

var _filterConfig = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'options:': {
    onlyGlobal: true,
    hasOptions: false
  }
};

/***/ })
/******/ ]);
});