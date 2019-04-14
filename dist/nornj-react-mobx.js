/*!
* NornJ-React-Mobx v5.0.0-rc.2
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('nornj'), require('mobx'), require('mobx-react')) :
  typeof define === 'function' && define.amd ? define(['nornj', 'mobx', 'mobx-react'], factory) :
  (global = global || self, factory(global.NornJ, global.mobx, global.mobxReact));
}(this, function (nornj, mobx, mobxReact) { 'use strict';

  var _nornj = _interopRequireWildcard(require("nornj"));

  var _mobx = require("mobx");

  var _extensionConfig = _interopRequireDefault(require("../../extensionConfig"));

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _setValue(value, params, ctxInstance) {
    var _value = params.reverse ? !params.value.val : value;

    if (params.action) {
      params.value._njCtx["set".concat(_nornj.default.capitalize(params.value.prop))](_value, params.args);
    } else {
      params.value._njCtx[params.value.prop] = _value;
    }

    params.changeEvent && params.changeEvent.apply(ctxInstance, params.args);
  }

  var DEFAULT_VALUE = 'defaultValue';

  function _setOnChange(options, value, action) {
    var valuePropName = 'value',
        changeEventName = 'onChange';
    var tagName = options.tagName,
        attrs = options.attrs,
        ctxInstance = options.context.ctxInstance,
        props = options.props;
    var componentConfig = _nornj.default.getComponentConfig(tagName) || {};
    var args = props && props.arguments;
    var defaultValue = _hasArg(args, DEFAULT_VALUE) && DEFAULT_VALUE;

    if (componentConfig.valuePropName != null) {
      valuePropName = componentConfig.valuePropName;
    }

    if (componentConfig.changeEventName != null) {
      changeEventName = componentConfig.changeEventName;
    }

    var _value = value.val;

    if (componentConfig.needToJS) {
      _value = (0, _mobx.toJS)(_value);
    }

    var changeEvent = attrs[changeEventName];

    var _valuePropName = defaultValue || valuePropName;

    if (componentConfig.hasEventObject) {
      var targetPropName = componentConfig.targetPropName || 'value';
      attrs[_valuePropName] = _value;

      attrs[changeEventName] = function (e) {
        _setValue(e.target[targetPropName], {
          value: value,
          args: arguments,
          changeEvent: changeEvent,
          action: action,
          valuePropName: valuePropName
        }, ctxInstance);
      };
    } else {
      attrs[_valuePropName] = _value;

      attrs[changeEventName] = function (v) {
        _setValue(v, {
          value: value,
          args: arguments,
          changeEvent: changeEvent,
          action: action,
          valuePropName: valuePropName
        }, ctxInstance);
      };
    }
  }

  function _hasArg(args, name) {
    var ret;
    args && args.every(function (arg) {
      if (arg.name == name) {
        ret = true;
        return false;
      }

      return true;
    });
    return ret;
  }

  (0, _nornj.registerExtension)('mobxBind', function (options) {
    var props = options.props;
    var ret = options.value();

    if (ret == null) {
      return ret;
    }

    _setOnChange(options, ret, _hasArg(props && props.arguments, 'action'));
  }, _extensionConfig.default.mobxBind);
  (0, _nornj.registerExtension)('mstBind', function (options) {
    var ret = options.value();

    if (ret == null) {
      return ret;
    }

    _setOnChange(options, ret, true);
  }, _extensionConfig.default.mstBind);

  var _nornj$1 = require("nornj");

  var _react = _interopRequireDefault$1(require("react"));

  var _mobxReactLite = require("mobx-react-lite");

  var _extensionConfig$1 = _interopRequireDefault$1(require("../../extensionConfig"));

  function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _nornj$1.registerExtension)('mobxObserver', function (options) {
    return _react.default.createElement(_mobxReactLite.Observer, null, function () {
      return options.children();
    });
  }, _extensionConfig$1.default.mobxObserver);

  nornj.registerComponent('mobx-Provider', mobxReact.Provider);
  nornj.registerFilter('toJS', function (v) {
    return mobx.toJS(v);
  });

}));
