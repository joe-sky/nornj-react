import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import nj, { template as t } from 'nornj';
import bindTemplate, { bindTemplateName } from '../src/bindTemplate';

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

@bindTemplate({
  name: 'Test',
  template: nj`
    <div className="test">{content}</div>
  `
})
class Test extends Component {
  render() {
    return this.props.template(this.props, this);
  }
}

@bindTemplateName
class TestName extends Component {
  render() {
    return t`<div class="testName"></div>`;
  }
}

const TestNameStateless = bindTemplateName('TestNameStateless')(
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

  it('bind component', () => {
    let app = mount(t`<Test content="test" />`);
    expect(app.find('.test')).toHaveLength(1);
  });

  it('bind component name', () => {
    let app = shallow(t`<TestName />`);
    expect(app.find('.testName')).toHaveLength(1);
  });

  it('bind stateless component name', () => {
    let app = shallow(t`<TestNameStateless classProp="testNameStateless" />`);
    expect(app.find('.testNameStateless')).toHaveLength(1);
  });
});