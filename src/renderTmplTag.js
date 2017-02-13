import njr from './core';
import nj from 'nornj';
import ReactDOM from 'react-dom';

//渲染内联标签组件
export function renderTmplTag(data, selector, isAuto) {
  var tags = getTmplTag(selector, isAuto),
    ret = [];

  nj.each(tags, (tag) => {
    const tmpl = nj.compileH(tag.innerHTML, tag.id),
      parentNode = tag.parentNode;

    ret.push(ReactDOM.render(tmpl(data), parentNode));
  }, false, true);

  return ret;
}

//获取全部内联组件
export function getTmplTag(selector, isAuto) {
  if (!selector) {
    selector = 'script[type="text/nornj"]' + (isAuto ? '[autorender]' : '');
  }

  return document.querySelectorAll(selector);
}

//Set initial data for inline component
export function setInitialData(data) {
  njr.initialData = data;
}

nj.assign(njr, {
  renderTmplTag,
  getTmplTag,
  setInitialData
});