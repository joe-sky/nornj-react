/*!
* NornJ-React v5.0.0-beta.5
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var nj = require('nornj');
var nj__default = _interopDefault(nj);
var React = require('react');
var React__default = _interopDefault(React);

var njr = {};

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

function isStateless(component) {
  // `function() {}` has prototype, but `() => {}` doesn't
  // `() => {}` via Babel has prototype too.
  return !(component.prototype && component.prototype.render);
}
function isFunction(obj) {
  return typeof obj == 'function' || false;
}
nj__default.assign(nj__default, {
  isStateless: isStateless,
  isFunction: isFunction
});

var REGEX_ID_SELECTOR = /^#{1}/;

function _registerComponent(name, component) {
  if (name != null) {
    nj__default.registerComponent(name, component);
  }
}

function _createWrapper(name, component, tmplFn) {
  var Wrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Wrapper, _Component);

    function Wrapper() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Wrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Wrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _this.getRef = function (instance) {
        _this.wrappedInstance = instance;
      };

      return _this;
    }

    _createClass(Wrapper, [{
      key: "render",
      value: function render() {
        var newProps = {};

        for (var key in this.props) {
          if (this.props.hasOwnProperty(key)) {
            newProps[key] = this.props[key];
          }
        }

        if (!isStateless(component)) {
          newProps.ref = this.getRef;
        }

        if (tmplFn) {
          newProps.template = tmplFn;
        }

        return React__default.createElement(component, newProps);
      }
    }]);

    return Wrapper;
  }(React.Component);

  Wrapper.displayName = component.displayName;
  name && _registerComponent(name, Wrapper);
  Wrapper.wrappedComponent = component;
  return Wrapper;
}

function bindTemplate(name, template, components) {
  if (isFunction(name)) {
    return _createWrapper(name.name, name);
  } else if (nj__default.isObject(name)) {
    template = name.template;
    components = name.components;
    name = name.name;
  }

  return function (component) {
    if (template != null && REGEX_ID_SELECTOR.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    var tmplFn;

    if (template) {
      tmplFn = (template._njTmpl ? template : nj__default.compileH(template)).bind({
        _njIcp: nj__default.isArray(components) ? components : [components]
      });
    }

    return _createWrapper(name || component.name, component, tmplFn);
  };
}
function bindTemplateName(name) {
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

function _debounce(fn, delay) {
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

nj.registerExtension({
  debounce: function debounce(options) {
    var tagName = options.tagName,
        attrs = options.attrs,
        data = options.context.data;
    var componentConfig = nj__default.getComponentConfig(tagName) || {};
    var changeEventName = componentConfig.changeEventName || 'onChange';
    var compInstance = data[data.length - 1];
    var evtFn = attrs[changeEventName];
    attrs[changeEventName] = _debounce(function () {
      evtFn.apply(compInstance, arguments);
    }, options.result() || 100);
  }
});

nj__default.assign(njr, {
  bindTemplate: bindTemplate,
  bindTemplateName: bindTemplateName,
  registerTmpl: bindTemplateName
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
exports.bindTemplateName = bindTemplateName;
exports.registerTmpl = bindTemplateName;
exports.default = njr;
