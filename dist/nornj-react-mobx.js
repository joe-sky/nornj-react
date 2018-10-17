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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _setValue(value, params, compInstance) {
  var _value = params.reverse ? !params.value.val : value;
  if (params.action) {
    params.value._njCtx['set' + _nornj2.default.capitalize(params.value.prop)](_value, params.args);
  } else {
    params.value._njCtx[params.value.prop] = _value;
  }

  params.changeEvent && params.changeEvent.apply(compInstance, params.args);
}

function _setOnChange(options, value, action) {
  var valuePropName = 'value',
      changeEventName = 'onChange';
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
        valuePropName: valuePropName
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
        valuePropName: valuePropName
      }, compInstance);
    };
  }
}

function _isBind(props) {
  var arg = props.arguments[0];
  return arg === 'bind' || arg === 'model';
}

function _useAction(modifiers) {
  return modifiers ? modifiers.indexOf('action') >= 0 : false;
}

(0, _nornj.registerExtension)('mobx', function (options) {
  var props = options.props;

  if (!props || !_isBind(props)) {
    return;
  }
  var ret = options.result();
  if (ret == null) {
    return ret;
  }

  _setOnChange(options, ret, _useAction(props.modifiers));
}, _extensionConfig2.default['mobx']);

(0, _nornj.registerExtension)('mst', function (options) {
  var props = options.props;

  if (!props || !_isBind(props)) {
    return;
  }
  var ret = options.result();
  if (ret == null) {
    return ret;
  }

  _setOnChange(options, ret, true);
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

/***/ })
/******/ ]);
});