const mobxConfig = {
  onlyGlobal: true,
  newContext: false,
  exProps: true,
  subExProps: true,
  isProp: true,
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