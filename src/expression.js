import nj from 'nornj';

nj.registerExpr('brace', (options) => '{' + options.result() + '}', {
  newContext: false,
  useString: false
});