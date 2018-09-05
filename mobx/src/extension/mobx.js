import nj, { registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';
import { capitalize } from '../../../lib/utils';

function _setValue(value, params, compInstance) {
  const _value = params.reverse ? !params.value.val : value;
  if (params.action) {
    params.value._njCtx[`set${capitalize(params.value.prop)}`](_value);
  } else {
    params.value._njCtx[params.value.prop] = _value;
  }

  params.changeEvent && params.changeEvent.apply(compInstance, params.args);
}

function _setOnChange(options, value, action) {
  let valuePropName = 'value',
    changeEventName = 'onChange';
  const {
    tagName,
    attrs,
    context: { data }
  } = options;
  const componentConfig = nj.getComponentConfig(tagName) || {};

  if (valuePropName === 'value' && componentConfig.valuePropName != null) {
    valuePropName = componentConfig.valuePropName;
  }

  let _value = value.val;
  if (componentConfig.needToJS) {
    _value = toJS(_value);
  }

  const changeEvent = attrs[changeEventName];
  const compInstance = data[data.length - 1];
  if (componentConfig.hasEventObject) {
    const targetPropName = componentConfig.targetPropName || 'value';

    attrs[valuePropName] = _value;
    attrs[changeEventName] = function (e) {
      _setValue(e.target[targetPropName], {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName
      }, compInstance);
    };
  }
  else {
    attrs[valuePropName] = _value;
    attrs[changeEventName] = function (v) {
      _setValue(v, {
        value,
        args: arguments,
        changeEvent,
        action,
        valuePropName
      }, compInstance);
    };
  }
}

function _isBind(props) {
  const arg = props.arguments[0];
  return arg === 'bind' || arg === 'model';
}

function _useAction(modifiers) {
  return modifiers ? modifiers.indexOf('action') >= 0 : false;
}

registerExtension('mobx', options => {
  const { props } = options;
  if (!props || !_isBind(props)) {
    return;
  }
  const ret = options.result();
  if (ret == null) {
    return ret;
  }

  _setOnChange(options, ret, _useAction(props.modifiers));
}, extensionConfigs['mobx']);

registerExtension('mst', options => {
  const { props } = options;
  if (!props || !_isBind(props)) {
    return;
  }
  const ret = options.result();
  if (ret == null) {
    return ret;
  }

  _setOnChange(options, ret, true);
}, extensionConfigs['mst']);