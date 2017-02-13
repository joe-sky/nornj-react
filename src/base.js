import njr from './core';
import nj from 'nornj';
import React from 'react';
import registerTmpl from './registerTmpl';
import docReady from './docReady';
import './expression';  //Additional tag expressions

nj.assign(njr, {
  registerTmpl,
  docReady
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

let _global;
if (typeof self !== 'undefined') {
  _global = self;

  //Initial render templates
  docReady(() => {
    njr.renderTmplTag(njr.initialData, null, true)
  });
} else {
  _global = global;
}
_global.NornJReact = _global.njr = njr;

export * from './renderTmplTag';
export {
  registerTmpl,
  docReady
};
export default njr;