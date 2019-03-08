import njr from './core';
import nj from 'nornj';
import React from 'react';
import registerTmpl from './registerTmpl';

nj.assign(njr, {
  registerTmpl,
  bindTemplate: registerTmpl
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
  registerTmpl,
  registerTmpl as bindTemplate
};
export default njr;