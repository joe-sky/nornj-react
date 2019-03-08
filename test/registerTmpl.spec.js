import React, { Component } from 'react';
import { mount } from 'enzyme';
import nj from 'nornj';
import bindTemplate from '../src/registerTmpl';

@bindTemplate({
  template: nj`
    <div className="test">{content}</div>
  `
})
class Test extends Component {
  // componentDidMount() {
  //   console.log(2);
  // }

  render() {
    return this.props.template(this.props, this);
  }
}

describe('njr.bindTemplate', () => {
  it('default', () => {
    let app = mount(<Test />);
    expect(app.find('.test')).toHaveLength(1);
  });
});
