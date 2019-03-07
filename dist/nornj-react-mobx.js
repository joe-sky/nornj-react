/*!
* NornJ-React-Mobx v5.0.0-alpha.2
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

  function _setValue(value, params, compInstance) {
    var _value = params.reverse ? !params.value.val : value;

    if (params.action) {
      params.value._njCtx["set".concat(_nornj.default.capitalize(params.value.prop))](_value, params.args);
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
    var componentConfig = _nornj.default.getComponentConfig(tagName) || {};

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
  }, _extensionConfig.default['mobx']);
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
  }, _extensionConfig.default['mst']);

  nornj.registerComponent('mobx-Provider', mobxReact.Provider);
  nornj.registerFilter('toJS', function (v) {
    return mobx.toJS(v);
  });

}));
