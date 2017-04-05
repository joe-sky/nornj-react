import nj from 'nornj';

//注册模板装饰器
export default function registerTmpl(name, template, cache) {
  if (nj.isObject(name)) {
    template = name.template;
    cache = name.cache;
    name = name.name;
  }

  return function(target) {
    //注册组件
    if (name != null) {
      nj.registerComponent(name, target);
    }

    //从标签的innerHTML获取模板
    if(/^#{1}/.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    //创建模板函数
    if (template) {
      target.prototype.template = nj.compileH(template, cache ? name : null);
    }

    return target;
  };
}