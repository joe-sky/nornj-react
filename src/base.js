'use strict';

var njr = require('./core'),
  nj = require('nornj'),
  React = require('react'),
  renderTmplTag = require('./renderTmplTag'),
  registerTmpl = require('./registerTmpl'),
  docReady = require('./docReady');

njr.registerTmpl = registerTmpl;
njr.docReady = docReady;
nj.assign(njr, renderTmplTag);

//Set createElement function for NornJ
nj.config({
  createElement: React.createElement,
  outputH: true
});

var _global;
if (typeof self !== 'undefined') {
  _global = self;

  //Initial render templates
  docReady(function () {
    njr.renderTmplTag(njr.initialData, null, true);
  });
}
else {
  _global = global;
}

module.exports = _global.NornJReact = _global.njr = njr;