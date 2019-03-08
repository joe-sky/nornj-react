import nj from 'nornj';
import React, { Component } from 'react';
import { isStateless } from './utils';

export default function registerTmpl(name, template, cache, components) {
  if (nj.isObject(name)) {
    template = name.template;
    cache = name.cache;
    components = name.components;
    name = name.name;
  }

  return function (component) {
    if (/^#{1}/.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

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

      // componentDidMount() {
      //   console.log(1);
      // }

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

    if (name != null) {
      nj.registerComponent(name, Wrapper);
    }

    return Wrapper;
  };
}