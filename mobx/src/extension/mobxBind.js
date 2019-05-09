import nj, { registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';

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

  params.changeEvent && params.changeEvent.apply($this, params.args);
}

function _setOnChange(options, value, action) {
  let valuePropName = 'value',
    changeEventName = 'onChange';
  const {
    tagName,
    tagProps,
    context: { $this },
    props
  } = options;
  const componentConfig = nj.getComponentConfig(tagName) || {};
  const args = props && props.arguments;
  const defaultValue = _hasArg(args, 'default') && 'defaultValue';

  if (componentConfig.valuePropName != null) {
    valuePropName = componentConfig.valuePropName;
  }
  if (componentConfig.changeEventName != null) {
    changeEventName = componentConfig.changeEventName;
  }

  let _value = value.value;
  const isMultipleSelect = tagName === 'select' && tagProps.multiple;
  if (componentConfig.needToJS || isMultipleSelect) {
    _value = toJS(_value);
  }

  const changeEvent = tagProps[changeEventName];
  const _valuePropName = defaultValue || valuePropName;
  if (componentConfig.hasEventObject) {
    const targetPropName = componentConfig.targetPropName || 'value';
    const isRadio = tagName === 'input' && tagProps.type === 'radio';
    const isCheckbox = tagName === 'input' && tagProps.type === 'checkbox';
    if (isRadio) {
      tagProps.checked = tagProps.value === _value;
    }
    else if (isCheckbox) {
      tagProps.checked = _value != null && (nj.isArrayLike(_value) ? _value.indexOf(tagProps.value) >= 0 : _value);
    }
    else {
      tagProps[_valuePropName] = _value;
    }

    tagProps[changeEventName] = function (e) {
      _setValue(e.target[targetPropName], {
        target: e.target,
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName,
        isMultipleSelect,
        isCheckbox
      }, $this);
    };
  }
  else {
    tagProps[_valuePropName] = _value;
    tagProps[changeEventName] = function (v) {
      _setValue(v, {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName
      }, $this);
    };
  }
}

function _hasArg(args, name) {
  let ret;
  args && args.every(arg => {
    if (arg.name == name) {
      ret = true;
      return false;
    }
    return true;
  });

  return ret;
}

registerExtension('mobxBind', options => {
  const { props } = options;
  const ret = options.value();
  if (ret == null) {
    return ret;
  }

  _setOnChange(options, ret, _hasArg(props && props.arguments, 'action'));
}, extensionConfigs.mobxBind);

registerExtension('mstBind', options => {
  const ret = options.value();
  if (ret == null) {
    return ret;
  }

  _setOnChange(options, ret, true);
}, extensionConfigs.mstBind);