import nj from 'nornj';

//注册模板装饰器
export default function registerTmpl(name, template, cache, components) {
  if (nj.isObject(name)) {
    template = name.template;
    cache = name.cache;

    //组件名称转小写
    if(name.components) {
      components = {};
      nj.each(name.components, (v, k) => {
        components[k.toLowerCase()] = v;
      });
    }
    
    name = name.name;
  }

  return function(target) {
    //注册组件
    if (name != null) {
      nj.registerComponent(name, target);
    }

    //从标签的innerHTML获取模板
    if (/^#{1}/.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    //创建模板函数
    if (template) {
      target.prototype.template = nj.compileH(template, cache ? name : null, null, null, null, components);
    }

    return target;
  };
}