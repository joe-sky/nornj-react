'use strict';

var nj = require('nornj');

nj.registerExpr('brace', function(options) {
  return '{' + options.result() + '}';
}, { newContext: false, useString: false });