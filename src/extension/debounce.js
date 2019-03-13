import nj, { registerExtension } from 'nornj';

function debounce(fn, delay) {
  let timeoutID = null;

  return function () {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

registerExtension({
  debounce: options => {
    const {
      tagName,
      attrs,
      context: { data }
    } = options;
    const componentConfig = nj.getComponentConfig(tagName) || {};
    const changeEventName = componentConfig.changeEventName || 'onChange';
    const compInstance = data[data.length - 1];
    const evtFn = attrs[changeEventName];

    attrs[changeEventName] = debounce(function () {
      evtFn.apply(compInstance, arguments);
    }, options.result() || 100);
  }
});