/*!
* NornJ-React v5.0.0-alpha.2
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('nornj'), require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'nornj', 'react', 'react-dom'], factory) :
  (global = global || self, factory(global.NornJReact = {}, global.NornJ, global.React, global.ReactDOM));
}(this, function (exports, nj, React, ReactDOM) { 'use strict';

  nj = nj && nj.hasOwnProperty('default') ? nj['default'] : nj;
  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  var njr = {
    initialData: null,
    initialDelimiters: null
  };

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

  function registerTmpl(name, template, cache, components) {
    if (nj.isObject(name)) {
      template = name.template;
      cache = name.cache;
      components = name.components;
      name = name.name;
    }

    return function (component) {
      //注册组件
      if (name != null) {
        nj.registerComponent(name, component);
      } //从标签的innerHTML获取模板


      if (/^#{1}/.test(template)) {
        template = document.querySelector(template).innerHTML;
      } //创建模板函数


      var tmplFn;

      if (template) {
        tmplFn = (template._njTmpl ? template : nj.compileH(template, cache ? name : null)).bind({
          _njIcp: nj.isArray(components) ? components : [components]
        });
      }

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
      return Wrapper;
    };
  }

  function docReady (callback) {
    var doc = document;

    if (doc.addEventListener) {
      doc.addEventListener('DOMContentLoaded', callback, false);
    } else {
      self.attachEvent('onload', callback);
    }
  }

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
    nj.each(tags, function (tag) {
      var tmplFn = nj.compileH(tag.innerHTML, tag.id, null, delimiters);
      var targetNode;

      if (target == null) {
        target = tag.getAttribute('data-target');
      }

      if (target) {
        if (nj.isString(target)) {
          targetNode = document.querySelector(target);
        } else {
          targetNode = target;
        }
      } else {
        targetNode = tag.parentNode;
      }

      ret.push(ReactDOM.render(nj.isArray(data) ? tmplFn.apply(null, data) : tmplFn(data), targetNode));
    }, null, true);
    return ret;
  } //Set initial data for inline component

  function setInitialData(data) {
    njr.initialData = data;
  }
  function setInitialDelimiters(delimiters) {
    njr.initialDelimiters = delimiters;
  }
  nj.assign(njr, {
    renderTmplTag: renderTmplTag,
    setInitialData: setInitialData,
    setInitialDelimiters: setInitialDelimiters
  });

  nj.assign(njr, {
    registerTmpl: registerTmpl,
    docReady: docReady
  }); //Set createElement function for NornJ

  nj.config({
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
      componentConfig = nj.componentConfig;
  componentConfig.input = componentConfig.select = componentConfig.textarea = _defaultCfg;

  var _global;

  if (typeof self !== 'undefined') {
    _global = self; //Initial render templates

    docReady(function () {
      return njr.renderTmplTag({
        data: njr.initialData,
        delimiters: njr.initialDelimiters,
        isAuto: true
      });
    });
  } else {
    _global = global;
  }

  _global.NornJReact = _global.njr = njr;

  exports.registerTmpl = registerTmpl;
  exports.default = njr;
  exports.renderTmplTag = renderTmplTag;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
