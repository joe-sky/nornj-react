import njr from './core';
import nj from 'nornj';
import React from 'react';
import bindTemplate from './bindTemplate';
import './extension/debounce';

nj.assign(njr, {
  bindTemplate,
  registerTmpl: bindTemplate
});

//Set createElement function for NornJ
nj.config({
  createElement: React.createElement,
  outputH: true,
  delimiters: {
    start: '{',
    end: '}',
    comment: ''
  }
});

const _defaultCfg = { hasEventObject: true },
  componentConfig = nj.componentConfig;
componentConfig.input = componentConfig.select = componentConfig.textarea = _defaultCfg;

let _global = typeof self !== 'undefined' ? self : global;
_global.NornJReact = _global.njr = njr;

export {
  bindTemplate,
  bindTemplate as bindTemplateName,
  bindTemplate as registerTmpl
};
export default njr;