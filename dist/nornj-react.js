/*!
* NornJ-React v5.0.0-rc.1
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('nornj'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'nornj', 'react'], factory) :
  (global = global || self, factory(global.NornJReact = {}, global.NornJ, global.React));
}(this, function (exports, nj, React) { 'use strict';

  var nj__default = 'default' in nj ? nj['default'] : nj;
  var React__default = 'default' in React ? React['default'] : React;

  var njr = {};

  function _registerComponent(name, component) {
    if (name != null) {
      nj__default.registerComponent(name, component);
    }
  }

  function bindTemplate(name) {
    if (nj__default.isString(name)) {
      return function (component) {
        _registerComponent(name, component);

        return component;
      };
    } else {
      name.name && _registerComponent(name.name, name);
      return name;
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function debounce(fn, delay) {
    var timeoutID = null;
    return function () {
      var _this = this,
          _arguments = arguments;

      clearTimeout(timeoutID);
      timeoutID = setTimeout(function () {
        fn.apply(_this, _arguments);
      }, delay);
    };
  }
  nj__default.assign(nj__default, {
    debounce: debounce
  });

  var DebounceWrap =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DebounceWrap, _Component);

    function DebounceWrap(props) {
      var _this;

      _classCallCheck(this, DebounceWrap);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DebounceWrap).call(this, props));

      _this.emitChange = function (args) {
        _this.props[_this.changeEventName].apply(_this.ctxInstance, args);
      };

      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      var _this$props$directive = _this.props.directiveOptions,
          tagName = _this$props$directive.tagName,
          ctxInstance = _this$props$directive.context.ctxInstance,
          directiveProps = _this$props$directive.props,
          value = _this$props$directive.value;

      var _args = directiveProps && directiveProps.arguments;

      _this.componentConfig = nj__default.getComponentConfig(tagName) || {};
      _this.changeEventName = _args && _args[0].name || _this.componentConfig.changeEventName || 'onChange';
      _this.ctxInstance = ctxInstance;
      _this.emitChangeDebounced = debounce(_this.emitChange, value() || 100);
      return _this;
    }

    _createClass(DebounceWrap, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var prevValue = prevProps.directiveOptions.value;
        var value = this.props.directiveOptions.value;
        var newValue = value();

        if (newValue != null && newValue != prevValue()) {
          this.emitChangeDebounced = debounce(this.emitChange, newValue);
        }
      }
    }, {
      key: "handleChange",
      value: function handleChange(e) {
        // React pools events, so we read the value before debounce.
        // Alternately we could call `event.persist()` and pass the entire event.
        // For more info see reactjs.org/docs/events.html#event-pooling
        e && e.persist && e.persist();
        this.emitChangeDebounced(arguments);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            component = _this$props.component,
            directiveOptions = _this$props.directiveOptions,
            others = _objectWithoutProperties(_this$props, ["component", "directiveOptions"]);

        return React__default.createElement(component, _objectSpread({}, others, _defineProperty({}, this.changeEventName, this.handleChange)));
      }
    }]);

    return DebounceWrap;
  }(React.Component);

  nj.registerExtension('debounce', function (options) {
    var tagName = options.tagName,
        setTagName = options.setTagName,
        attrs = options.attrs;
    setTagName(DebounceWrap);
    attrs.component = tagName;
    attrs.directiveOptions = options;
  }, {
    onlyGlobal: true,
    isDirective: true
  });

  nj__default.assign(njr, {
    bindTemplate: bindTemplate,
    registerTmpl: bindTemplate
  }); //Set createElement function for NornJ

  nj__default.config({
    createElement: React__default.createElement,
    outputH: true,
    delimiters: {
      start: '{',
      end: '}',
      comment: ''
    }
  });
  var _defaultCfg = {
    hasEventObject: true
  },
      componentConfig = nj__default.componentConfig;
  componentConfig.input = componentConfig.select = componentConfig.textarea = _defaultCfg;

  var _global = typeof self !== 'undefined' ? self : global;

  _global.NornJReact = _global.njr = njr;

  exports.bindTemplate = bindTemplate;
  exports.bindTemplateName = bindTemplate;
  exports.registerTmpl = bindTemplate;
  exports.default = njr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
