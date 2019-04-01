import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import nj, { template as t } from 'nornj';
import bindTemplate from '../src/bindTemplate';

@bindTemplate
class TestNoParam extends Component {
  render() {
    return t`<div class="testNoParam" />`;
  }
}

@bindTemplate('TestStringParam')
class TestStringParam extends Component {
  render() {
    return t`<div class="testStringParam" />`;
  }
}

const TestFunction = bindTemplate('TestFunction')(
  props => t`<div class=${props.classProp} />`
);

describe('njr.bindTemplate', () => {
  it('bind component with no parameters', () => {
    let app = mount(t`<TestNoParam />`);
    expect(app.find('.testNoParam')).toHaveLength(1);
  });

  it('bind component with string parameters', () => {
    let app = mount(t`<TestStringParam />`);
    expect(app.find('.testStringParam')).toHaveLength(1);
  });

  it('bind function component', () => {
    let app = shallow(t`<TestFunction classProp="test-function" />`);
    expect(app.find('.test-function')).toHaveLength(1);
  });
});