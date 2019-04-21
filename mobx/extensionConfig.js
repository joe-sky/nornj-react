const mobxConfig = {
  onlyGlobal: true,
  newContext: false,
  addSet: true,
  useExpressionInJsx: true,
  isDirective: true
};

module.exports = {
  mobxBind: mobxConfig,
  mstBind: mobxConfig,
  mobxObserver: {
    onlyGlobal: true,
    newContext: false
  }
};