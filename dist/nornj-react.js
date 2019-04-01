/*!
* NornJ-React v5.0.0-beta.8
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('nornj'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'nornj', 'react'], factory) :
  (global = global || self, factory(global.NornJReact = {}, global.NornJ, global.React));
}(this, function (exports, nj, React) { 'use strict';

  var nj__default = 'default' in nj ? nj['default'] : nj;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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
    registerTmpl: bindTemplate
  }); //Set createElement function for NornJ

  nj__default.config({
    createElement: React.createElement,
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
