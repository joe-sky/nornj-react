import nj from 'nornj';

export function isStateless(component) {
  // `function() {}` has prototype, but `() => {}` doesn't
  // `() => {}` via Babel has prototype too.
  return !(component.prototype && component.prototype.render);
}

export function isFunction(obj) {
  return typeof obj == 'function' || false;
}

nj.assign(nj, {
  isStateless,
  isFunction
});