'use strict';

var nj = require('nornj');

//注册模板装饰器
function registerTmpl(name, template) {
  if (nj.isObject(name)) {
    template = name.template;
    name = name.name;
  }

  return function (target) {
    //注册组件
    if(name != null) {
      nj.registerComponent(name, target);
    }

    //创建模板函数
    if(template) {
      target.prototype.template = nj.compileH(template, name);
    }
  };
}

module.exports = registerTmpl;