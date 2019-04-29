import nj, { registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';

function _setValue(value, params, $this) {
  const _value = params.reverse ? !params.value.value : value;
  if (params.action) {
    params.value.source[`set${nj.capitalize(params.value.prop)}`](_value, params.args);
  } else {
    params.value.source[params.value.prop] = _value;
  }

  params.changeEvent && params.changeEvent.apply($this, params.args);
}

const DEFAULT_VALUE = 'defaultValue';

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
  const defaultValue = _hasArg(args, DEFAULT_VALUE) && DEFAULT_VALUE;

  if (componentConfig.valuePropName != null) {
    valuePropName = componentConfig.valuePropName;
  }
  if (componentConfig.changeEventName != null) {
    changeEventName = componentConfig.changeEventName;
  }

  let _value = value.value;
  if (componentConfig.needToJS) {
    _value = toJS(_value);
  }

  const changeEvent = tagProps[changeEventName];
  const _valuePropName = defaultValue || valuePropName;
  if (componentConfig.hasEventObject) {
    const targetPropName = componentConfig.targetPropName || 'value';

    tagProps[_valuePropName] = _value;
    tagProps[changeEventName] = function (e) {
      _setValue(e.target[targetPropName], {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName
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
    if(arg.name == name) {
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