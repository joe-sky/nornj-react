import nj from 'nornj';
import React, { Component } from 'react';
import { isStateless, isFunction } from './utils';

const REGEX_ID_SELECTOR = /^#{1}/;

function _registerComponent(name, component) {
  if (name != null) {
    nj.registerComponent(name, component);
  }
}

function _createWrapper(name, component, tmplFn) {
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

  name && _registerComponent(name, Wrapper);
  Wrapper.wrappedComponent = component;

  return Wrapper;
}

export default function bindTemplate(name, template, components) {
  if (isFunction(name)) {
    return _createWrapper(name.name, name);
  }
  else if (nj.isObject(name)) {
    template = name.template;
    components = name.components;
    name = name.name;
  }

  return function (component) {
    if (template != null && REGEX_ID_SELECTOR.test(template)) {
      template = document.querySelector(template).innerHTML;
    }

    let tmplFn;
    if (template) {
      tmplFn = (template._njTmpl ? template : nj.compileH(template)).bind({
        _njIcp: nj.isArray(components) ? components : [components]
      });
    }

    return _createWrapper(name || component.name, component, tmplFn);
  };
};

export function bindTemplateName(name) {
  if (nj.isString(name)) {
    return function (component) {
      _registerComponent(name, component);

      return component;
    };
  }
  else {
    name.name && _registerComponent(name.name, name);

    return name;
  }
};