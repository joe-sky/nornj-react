"use strict";

var _nornj = require("nornj");

var _mobx = require("mobx");

var _native = require("mobx-react/native");

require("./lib/extension/mobx");

(0, _nornj.registerComponent)('mobx-Provider', _native.Provider);
(0, _nornj.registerFilter)('toJS', function (v) {
  return (0, _mobx.toJS)(v);
});
