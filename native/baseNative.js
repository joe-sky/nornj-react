import njr from '../lib/core';
import nj from 'nornj';
import React from 'react';
import registerTmpl from '../lib/registerTmpl';

nj.assign(njr, {
  registerTmpl
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

let _global = typeof self !== 'undefined' ? self : global;
_global.NornJReact = _global.njr = njr;

export {
  registerTmpl
};
export default njr;