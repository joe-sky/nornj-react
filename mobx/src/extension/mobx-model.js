import nj, { registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../../extensionConfig';
import { capitalize } from '../../../lib/utils';
import '../../../lib/filter/options';

function _setValue(value, params) {
  let preventChange;
  if (params.beforeChange) {
    preventChange = params.beforeChange(params.value.val, params.args);
  }

  if (preventChange !== false) {
    const _value = params.reverse ? !params.value.val : value;
    if (params.action) {
      params.value._njCtx[nj.isString(params.action) ? params.action : `set${capitalize(params.value.prop)}`](_value);
    } else {
      params.value._njCtx[params.value.prop] = _value;
    }

    params.afterChange && params.afterChange(params.value.val, params.args);
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
  const tagName = options.tagName;
  const componentConfig = nj.getComponentConfig(tagName) || {};

  if (valuePropName === 'value' && componentConfig.valuePropName != null) {
    valuePropName = componentConfig.valuePropName;
  }

  let _value = value.val;
  if (componentConfig.needToJS) {
    _value = toJS(_value);
  }

  if (componentConfig.hasEventObject) {
    const targetPropName = componentConfig.targetPropName || 'value';

    options.exProps[valuePropName] = _value;
    options.exProps[changeEventName] = function (e) {
      _setValue(e.target[targetPropName], {
        value,
        args: arguments,
        action,
        valuePropName,
        beforeChange,
        afterChange,
        reverse
      });
    };
  }
  else {
    options.exProps[valuePropName] = _value;
    options.exProps[changeEventName] = function (v) {
      _setValue(v, {
        value,
        args: arguments,
        action,
        valuePropName,
        beforeChange,
        afterChange,
        reverse
      });
    };
  }
}

registerExtension('mobx-model', options => {
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
}, extensionConfigs['mobx-model']);

registerExtension('mst-model', options => {
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
}, extensionConfigs['mst-model']);