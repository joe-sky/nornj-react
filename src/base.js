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
nj.config({ createElement: React.createElement });

var global;
if (typeof self !== 'undefined') {
  global = self;

  //Initial render templates
  docReady(function () {
    njr.renderTmplTag(njr.initialData, null, true);
  });
}
else {
  global = this;
}

module.exports = global.NornJReact = global.njr = njr;