import njr from './core';
import nj from 'nornj';
import ReactDOM from 'react-dom';

//渲染模板标签
export function renderTmplTag(options = {}) {
  let { data, selector, target, isAuto, delimiters } = options;
  if (!selector) {
    selector = 'script[type="text/nornj"]' + (isAuto ? '[data-auto]' : '');
  }

  const tags = document.querySelectorAll(selector),
    ret = [];

  nj.each(tags, tag => {
    const tmplFn = nj.compileH(tag.innerHTML, tag.id, null, delimiters);
    let targetNode;

    if (target == null) {
      target = tag.getAttribute('data-target');
    }
    if (target) {
      if (nj.isString(target)) {
        targetNode = document.querySelector(target);
      } else {
        targetNode = target;
      }
    } else {
      targetNode = tag.parentNode;
    }

    ret.push(ReactDOM.render(nj.isArray(data) ? tmplFn.apply(null, data) : tmplFn(data), targetNode));
  }, null, true);

  return ret;
}

//Set initial data for inline component
export function setInitialData(data) {
  njr.initialData = data;
}

export function setInitialDelimiters(delimiters) {
  njr.initialDelimiters = delimiters;
}

nj.assign(njr, {
  renderTmplTag,
  setInitialData,
  setInitialDelimiters
});