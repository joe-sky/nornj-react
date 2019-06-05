import nj, { registerExtension } from 'nornj';
import React, { useRef } from 'react';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';
import { debounce } from '../../../lib/utils';

const MobxBindWrap = React.forwardRef(({
  MobxBindTag,
  mobxBindDirectiveOptions: {
    tagName,
    context: { $this },
    props: directiveProps
  },
  _mobxBindValue: value,
  _mobxBindAction: action,
  ...props
}, ref) => {
  let valuePropName = 'value',
    changeEventName = 'onChange';
  const componentConfig = nj.getComponentConfig(tagName) || {};
  const args = directiveProps && directiveProps.arguments;
  const debounceArg = _hasArg(args, 'debounce');

  if (componentConfig.valuePropName != null) {
    valuePropName = componentConfig.valuePropName;
  }
  if (componentConfig.changeEventName != null) {
    changeEventName = componentConfig.changeEventName;
  }

  let _value = value.value;
  const isMultipleSelect = tagName === 'select' && props.multiple;
  if (componentConfig.needToJS || isMultipleSelect) {
    _value = toJS(_value);
  }

  const changeEvent = props[changeEventName];
  let emitChangeDebounced;
  if (debounceArg) {
    const { modifiers } = debounceArg;
    emitChangeDebounced = useRef(debounce(args => {
      changeEvent.apply($this, args);
    }, (modifiers && +modifiers[0]) || 100));
  }

  const compProps = {};
  if (componentConfig.hasEventObject) {
    const targetPropName = componentConfig.targetPropName || 'value';
    const isRadio = tagName === 'input' && props.type === 'radio';
    const isCheckbox = tagName === 'input' && props.type === 'checkbox';
    if (isRadio) {
      compProps.checked = props.value === _value;
    }
    else if (isCheckbox) {
      compProps.checked = _value != null && (nj.isArrayLike(_value) ? _value.indexOf(props.value) >= 0 : _value);
    }
    else {
      compProps[valuePropName] = _value;
    }

    compProps[changeEventName] = function (e) {
      e && e.persist && e.persist();

      _setValue(e.target[targetPropName], {
        target: e.target,
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName,
        emitChangeDebounced,
        isMultipleSelect,
        isCheckbox
      }, $this);
    };
  }
  else {
    compProps[valuePropName] = _value;
    compProps[changeEventName] = function (v) {
      _setValue(v, {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName,
        emitChangeDebounced
      }, $this);
    };
  }

  return <MobxBindTag {...props} {...compProps} ref={ref} />;
});

function _setValue(value, params, $this) {
  let _value = value;
  if (params.isMultipleSelect) {
    _value = nj.arraySlice(params.target.options).filter(option => option.selected).map(option => option.value);
  }
  else if (params.isCheckbox) {
    const checkboxValue = params.value.value;
    if (nj.isArrayLike(checkboxValue)) {
      if (params.target.checked) {
        checkboxValue.push(value);
      }
      else {
        checkboxValue.splice(checkboxValue.indexOf(value), 1);
      }
      _value = checkboxValue;
    }
    else {
      _value = params.target.checked;
    }
  }

  if (params.action) {
    params.value.source[`set${nj.capitalize(params.value.prop)}`](_value, params.args);
  } else {
    params.value.source[params.value.prop] = _value;
  }

  if (params.emitChangeDebounced) {
    params.emitChangeDebounced.current(params.args);
  }
  else if (params.changeEvent) {
    params.changeEvent.apply($this, params.args);
  }
}

function _hasArg(args, name) {
  let ret;
  args && args.every(arg => {
    if (arg.name == name) {
      ret = arg;
      return false;
    }
    return true;
  });

  return ret;
}

registerExtension('mobxBind', options => {
  const ret = options.value();
  if (ret == null) {
    return ret;
  }

  const {
    tagName,
    setTagName,
    tagProps,
    props
  } = options;

  setTagName(MobxBindWrap);
  tagProps.MobxBindTag = tagName;
  tagProps.mobxBindDirectiveOptions = options;
  tagProps._mobxBindValue = ret;
  tagProps._mobxBindAction = _hasArg(props && props.arguments, 'action');
}, extensionConfigs.mobxBind);

registerExtension('mstBind', options => {
  const ret = options.value();
  if (ret == null) {
    return ret;
  }

  const {
    tagName,
    setTagName,
    tagProps
  } = options;

  setTagName(MobxBindWrap);
  tagProps.MobxBindTag = tagName;
  tagProps.mobxBindDirectiveOptions = options;
  tagProps._mobxBindValue = ret;
  tagProps._mobxBindAction = true;
}, extensionConfigs.mstBind);