import nj, { registerExtension } from 'nornj';
import React, { Component } from 'react';
import { debounce } from '../utils';

class DebounceWrap extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const {
      directiveOptions: {
        tagName,
        context: { data },
        props: directiveProps,
        value
      }
    } = this.props;
    const args = directiveProps && directiveProps.arguments;

    this.componentConfig = nj.getComponentConfig(tagName) || {};
    this.changeEventName = (args && args[0].name) || this.componentConfig.changeEventName || 'onChange';
    this.ctxInstance = data[data.length - 1];
    this.emitChangeDebounced = debounce(this.emitChange, value() || 100);
  }

  componentDidUpdate(prevProps) {
    const {
      directiveOptions: { value: prevValue }
    } = prevProps;
    const {
      directiveOptions: { value }
    } = this.props;

    const newValue = value();
    if (newValue != null && newValue != prevValue()) {
      this.emitChangeDebounced = debounce(this.emitChange, newValue);
    }
  }

  handleChange(e) {
    // React pools events, so we read the value before debounce.
    // Alternately we could call `event.persist()` and pass the entire event.
    // For more info see reactjs.org/docs/events.html#event-pooling
    e && e.persist && e.persist();
    this.emitChangeDebounced(arguments);
  };

  emitChange = args => {
    this.props[this.changeEventName].apply(this.ctxInstance, args);
  };

  render() {
    const { component, directiveOptions, ...others } = this.props;

    return React.createElement(component, {
      ...others,
      ...{
        [this.changeEventName]: this.handleChange
      }
    });
  }
}

registerExtension('debounce', options => {
  const {
    tagName,
    setTagName,
    attrs
  } = options;

  setTagName(DebounceWrap);
  attrs.component = tagName;
  attrs.directiveOptions = options;
}, { onlyGlobal: true, isDirective: true });