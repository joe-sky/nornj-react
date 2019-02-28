import nj from 'nornj';
import React, { Component } from 'react';
import { isStateless } from './utils';

//注册模板装饰器
export default function registerTmpl(name, template, cache, components) {
  if (nj.isObject(name)) {
    template = name.template;
    cache = name.cache;
    components = name.components;
    name = name.name;
  }

  return function (component) {
    //注册组件
    if (name != null) {
      nj.registerComponent(name, component);
    }

    //从标签的innerHTML获取模板
    if (/^#{1}/.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    //创建模板函数
    let tmplFn;
    if (template) {
      tmplFn = (template._njTmpl ? template : nj.compileH(template, cache ? name : null)).bind({
        _njIcp: nj.isArray(components) ? components : [components]
      });
    }

    class Wrapper extends Component {
      static displayName = component.displayName;

      getRef = instance => {
        this.wrappedInstance = instance;
      };

      render() {
        let newProps = {};
        for (let key in this.props) {
          if (this.props.hasOwnProperty(key)) {
            newProps[key] = this.props[key];
          }
        }

        if (!isStateless(component)) {
          newProps.ref = this.getRef;
        }
        if (tmplFn) {
          newProps.template = tmplFn;
        }

        return React.createElement(component, newProps);
      }
    }

    return Wrapper;
  };
}