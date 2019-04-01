/*!
* NornJ-React v5.0.0-beta.7
* (c) 2016-2019 Joe_Sky
* Released under the MIT License.
*/
import nj, { registerExtension } from 'nornj';
import React from 'react';

var njr = {};

function _registerComponent(name, component) {
  if (name != null) {
    nj.registerComponent(name, component);
  }
}

function bindTemplate(name) {
  if (nj.isString(name)) {
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

registerExtension({
  debounce: function debounce(options) {
    var tagName = options.tagName,
        attrs = options.attrs,
        data = options.context.data;
    var componentConfig = nj.getComponentConfig(tagName) || {};
    var changeEventName = componentConfig.changeEventName || 'onChange';
    var compInstance = data[data.length - 1];
    var evtFn = attrs[changeEventName];
    attrs[changeEventName] = _debounce(function () {
      evtFn.apply(compInstance, arguments);
    }, options.result() || 100);
  }
});

nj.assign(njr, {
  bindTemplate: bindTemplate,
  registerTmpl: bindTemplate
}); //Set createElement function for NornJ

nj.config({
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
    componentConfig = nj.componentConfig;
componentConfig.input = componentConfig.select = componentConfig.textarea = _defaultCfg;

var _global = typeof self !== 'undefined' ? self : global;

_global.NornJReact = _global.njr = njr;

export default njr;
export { bindTemplate, bindTemplate as bindTemplateName, bindTemplate as registerTmpl };
