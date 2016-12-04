'use strict';

var njr = require('./core'),
  nj = require('nornj'),
  ReactDOM = require('react-dom');

//渲染内联标签组件
function renderTmplTag(data, selector, isAuto) {
  var tags = getTmplTag(selector, isAuto),
    ret = [];

  nj.each(tags, function (tag) {
    var tmpl = nj.compileH(tag.innerHTML, tag.id),
      parentNode = tag.parentNode;

    ret.push(ReactDOM.render(tmpl(data), parentNode));
  }, false, true);

  return ret;
}

//获取全部内联组件
function getTmplTag(selector, isAuto) {
  if (!selector) {
    selector = 'script[type="text/nornj"]' + (isAuto ? '[autorender]' : '');
  }

  return document.querySelectorAll(selector);
}

//Set initial data for inline component
function setInitialData(data) {
  njr.initialData = data;
}

module.exports = {
  renderTmplTag: renderTmplTag,
  getTmplTag: getTmplTag,
  setInitialData: setInitialData
};