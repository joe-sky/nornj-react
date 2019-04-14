import nj, { registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';

function _setValue(value, params, ctxInstance) {
  const _value = params.reverse ? !params.value.val : value;
  if (params.action) {
    params.value._njCtx[`set${nj.capitalize(params.value.prop)}`](_value, params.args);
  } else {
    params.value._njCtx[params.value.prop] = _value;
  }

  params.changeEvent && params.changeEvent.apply(ctxInstance, params.args);
}

const DEFAULT_VALUE = 'defaultValue';

function _setOnChange(options, value, action) {
  let valuePropName = 'value',
    changeEventName = 'onChange';
  const {
    tagName,
    attrs,
    context: { ctxInstance },
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

  let _value = value.val;
  if (componentConfig.needToJS) {
    _value = toJS(_value);
  }

  const changeEvent = attrs[changeEventName];
  const _valuePropName = defaultValue || valuePropName;
  if (componentConfig.hasEventObject) {
    const targetPropName = componentConfig.targetPropName || 'value';

    attrs[_valuePropName] = _value;
    attrs[changeEventName] = function (e) {
      _setValue(e.target[targetPropName], {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName
      }, ctxInstance);
    };
  }
  else {
    attrs[_valuePropName] = _value;
    attrs[changeEventName] = function (v) {
      _setValue(v, {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName
      }, ctxInstance);
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