import nj from 'nornj';

nj.registerExtension('brace', options => '{' + options.result() + '}', {
  onlyGlobal: true,
  newContext: false,
  useString: false
});