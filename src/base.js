import njr from './core';
import nj from 'nornj';
import React from 'react';
import registerTmpl from './registerTmpl';
import docReady from './docReady';

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
  docReady(() => njr.renderTmplTag({
    data: njr.initialData,
    isAuto: true
  }));
} else {
  _global = global;
}
_global.NornJReact = _global.njr = njr;

export {
  renderTmplTag
} from './renderTmplTag';
export {
  registerTmpl
};
export default njr;