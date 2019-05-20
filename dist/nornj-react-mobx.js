/*!
* NornJ-React-Mobx v5.0.0-rc.10
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('nornj'), require('mobx'), require('mobx-react')) :
  typeof define === 'function' && define.amd ? define(['nornj', 'mobx', 'mobx-react'], factory) :
  (global = global || self, factory(global.NornJ, global.mobx, global.mobxReact));
}(this, function (nornj, mobx, mobxReact) { 'use strict';

  var _nornj = _interopRequireWildcard(require("nornj"));

  var _react = _interopRequireWildcard(require("react"));

  var _mobx = require("mobx");

  var _extensionConfig = _interopRequireDefault(require("../../extensionConfig"));

  var _utils = require("../../../lib/utils");

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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var MobxBindWrap = function MobxBindWrap(_ref) {
    var component = _ref.component,
        _ref$directiveOptions = _ref.directiveOptions,
        tagName = _ref$directiveOptions.tagName,
        $this = _ref$directiveOptions.context.$this,
        directiveProps = _ref$directiveOptions.props,
        value = _ref._value,
        action = _ref._action,
        props = _objectWithoutProperties(_ref, ["component", "directiveOptions", "_value", "_action"]);

    var valuePropName = 'value',
        changeEventName = 'onChange';
    var componentConfig = _nornj.default.getComponentConfig(tagName) || {};
    var args = directiveProps && directiveProps.arguments;

    var debounceArg = _hasArg(args, 'debounce');

    if (componentConfig.valuePropName != null) {
      valuePropName = componentConfig.valuePropName;
    }

    if (componentConfig.changeEventName != null) {
      changeEventName = componentConfig.changeEventName;
    }

    var _value = value.value;
    var isMultipleSelect = tagName === 'select' && props.multiple;

    if (componentConfig.needToJS || isMultipleSelect) {
      _value = (0, _mobx.toJS)(_value);
    }

    var changeEvent = props[changeEventName];
    var emitChangeDebounced;

    if (debounceArg) {
      var modifiers = debounceArg.modifiers;
      emitChangeDebounced = (0, _react.useRef)((0, _utils.debounce)(function (args) {
        changeEvent.apply($this, args);
      }, modifiers && +modifiers[0] || 100));
    }

    var compProps = {};

    if (componentConfig.hasEventObject) {
      var targetPropName = componentConfig.targetPropName || 'value';
      var isRadio = tagName === 'input' && props.type === 'radio';
      var isCheckbox = tagName === 'input' && props.type === 'checkbox';

      if (isRadio) {
        compProps.checked = props.value === _value;
      } else if (isCheckbox) {
        compProps.checked = _value != null && (_nornj.default.isArrayLike(_value) ? _value.indexOf(props.value) >= 0 : _value);
      } else {
        compProps[valuePropName] = _value;
      }

      compProps[changeEventName] = function (e) {
        e && e.persist && e.persist();

        _setValue(e.target[targetPropName], {
          target: e.target,
          value: value,
          args: arguments,
          changeEvent: changeEvent,
          action: action,
          valuePropName: valuePropName,
          emitChangeDebounced: emitChangeDebounced,
          isMultipleSelect: isMultipleSelect,
          isCheckbox: isCheckbox
        }, $this);
      };
    } else {
      compProps[valuePropName] = _value;

      compProps[changeEventName] = function (v) {
        _setValue(v, {
          value: value,
          args: arguments,
          changeEvent: changeEvent,
          action: action,
          valuePropName: valuePropName,
          emitChangeDebounced: emitChangeDebounced
        }, $this);
      };
    }

    return _react.default.createElement(component, _objectSpread({}, props, compProps));
  };

  function _setValue(value, params, $this) {
    var _value = value;

    if (params.isMultipleSelect) {
      _value = _nornj.default.arraySlice(params.target.options).filter(function (option) {
        return option.selected;
      }).map(function (option) {
        return option.value;
      });
    } else if (params.isCheckbox) {
      var checkboxValue = params.value.value;

      if (_nornj.default.isArrayLike(checkboxValue)) {
        if (params.target.checked) {
          checkboxValue.push(value);
        } else {
          checkboxValue.splice(checkboxValue.indexOf(value), 1);
        }

        _value = checkboxValue;
      } else {
        _value = params.target.checked;
      }
    }

    if (params.action) {
      params.value.source["set".concat(_nornj.default.capitalize(params.value.prop))](_value, params.args);
    } else {
      params.value.source[params.value.prop] = _value;
    }

    if (params.emitChangeDebounced) {
      params.emitChangeDebounced.current(params.args);
    } else if (params.changeEvent) {
      params.changeEvent.apply($this, params.args);
    }
  }

  function _hasArg(args, name) {
    var ret;
    args && args.every(function (arg) {
      if (arg.name == name) {
        ret = arg;
        return false;
      }

      return true;
    });
    return ret;
  }

  (0, _nornj.registerExtension)('mobxBind', function (options) {
    var ret = options.value();

    if (ret == null) {
      return ret;
    }

    var tagName = options.tagName,
        setTagName = options.setTagName,
        tagProps = options.tagProps,
        props = options.props;
    setTagName(MobxBindWrap);
    tagProps.component = tagName;
    tagProps.directiveOptions = options;
    tagProps._value = ret;
    tagProps._action = _hasArg(props && props.arguments, 'action');
  }, _extensionConfig.default.mobxBind);
  (0, _nornj.registerExtension)('mstBind', function (options) {
    var ret = options.value();

    if (ret == null) {
      return ret;
    }

    var tagName = options.tagName,
        setTagName = options.setTagName,
        tagProps = options.tagProps;
    setTagName(MobxBindWrap);
    tagProps.component = tagName;
    tagProps.directiveOptions = options;
    tagProps._value = ret;
    tagProps._action = true;
  }, _extensionConfig.default.mstBind);

  var _nornj$1 = require("nornj");

  var _react$1 = _interopRequireDefault$1(require("react"));

  var _mobxReactLite = require("mobx-react-lite");

  var _extensionConfig$1 = _interopRequireDefault$1(require("../../extensionConfig"));

  function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _nornj$1.registerExtension)('mobxObserver', function (options) {
    return _react$1.default.createElement(_mobxReactLite.Observer, null, function () {
      return options.children();
    });
  }, _extensionConfig$1.default.mobxObserver);

  nornj.registerComponent('mobx-Provider', mobxReact.Provider);
  nornj.registerFilter('toJS', function (v) {
    return mobx.toJS(v);
  });

}));
