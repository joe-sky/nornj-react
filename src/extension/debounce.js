import nj, { registerExtension } from 'nornj';
import React, { Component } from 'react';
import { debounce } from '../utils';

class DebounceWrapClass extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const {
      debounceDirectiveOptions: {
        tagName,
        context: { $this },
        props: directiveProps,
        value
      }
    } = this.props;
    const args = directiveProps && directiveProps.arguments;

    this.componentConfig = nj.getComponentConfig(tagName) || {};
    this.changeEventName = (args && args[0].name) || this.componentConfig.changeEventName || 'onChange';
    this.$this = $this;
    this.emitChangeDebounced = debounce(this.emitChange, value() || 100);
  }

  componentDidUpdate(prevProps) {
    const {
      debounceDirectiveOptions: { value: prevValue }
    } = prevProps;
    const {
      debounceDirectiveOptions: { value }
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
    this.props[this.changeEventName].apply(this.$this, args);
  };

  render() {
    const { DebounceTag, debounceDirectiveOptions, innerRef, ...others } = this.props;

    return <DebounceTag ref={innerRef} {...others} {...{
      [this.changeEventName]: this.handleChange
    }} />;
  }
}

const DebounceWrap = React.forwardRef((props, ref) => <DebounceWrapClass innerRef={ref} {...props} />);

registerExtension('debounce', options => {
  const {
    tagName,
    setTagName,
    tagProps
  } = options;

  setTagName(DebounceWrap);
  tagProps.DebounceTag = tagName;
  tagProps.debounceDirectiveOptions = options;
}, { onlyGlobal: true, isDirective: true });