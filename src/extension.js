import nj from 'nornj';

nj.registerExtension('brace', (options) => '{' + options.result() + '}', {
  newContext: false,
  useString: false
});