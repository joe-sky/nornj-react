import nj, { registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';
import { capitalize } from '../../../lib/utils';
import '../../../lib/filter/options';

function _setValue(value, params, compInstance) {
  let preventChange;
  if (params.beforeChange) {
    preventChange = params.beforeChange.apply(compInstance, [params.value.val].concat(params.args));
  }

  if (preventChange !== false) {
    const _value = params.reverse ? !params.value.val : value;
    if (params.action) {
      params.value._njCtx[nj.isString(params.action) ? params.action : `set${capitalize(params.value.prop)}`](_value);
    } else {
      params.value._njCtx[params.value.prop] = _value;
    }

    params.changeEvent && params.changeEvent.apply(compInstance, params.args);
    params.afterChange && params.afterChange.apply(compInstance, [params.value.val].concat(params.args));
  }
}

function _setOnChange(options, value, action, opts = {}) {
  let {
    valuePropName = 'value',
    changeEventName = 'onChange',
    beforeChange,
    afterChange,
    reverse = false
  } = opts;
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
        valuePropName,
        beforeChange,
        afterChange,
        reverse
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
        valuePropName,
        beforeChange,
        afterChange,
        reverse
      }, compInstance);
    };
  }
}

function _isBind(props) {
  const arg = props.arguments[0];
  return arg === 'bind' || arg === 'model';
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

  let value = ret,
    action = false,
    opts = ret._njOptions;
  if (opts) {
    value = ret.val;
    if (opts.action != null) {
      action = opts.action;
    }
  }

  _setOnChange(options, value, action, opts);
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

  let value = ret,
    action = true,
    opts = ret._njOptions;
  if (opts) {
    value = ret.val;
    if (opts.action != null) {
      action = opts.action;
    }
  }

  _setOnChange(options, value, action, opts);
}, extensionConfigs['mst']);