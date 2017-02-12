const njr = require('./core'),
  nj = require('nornj'),
  React = require('react'),
  renderTmplTag = require('./renderTmplTag'),
  registerTmpl = require('./registerTmpl').default,
  docReady = require('./docReady').default;

//Additional tag expressions
require('./expression');

nj.assign(njr, {
  registerTmpl,
  docReady
}, renderTmplTag);

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

module.exports = _global.NornJReact = _global.njr = njr;