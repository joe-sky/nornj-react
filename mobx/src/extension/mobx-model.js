import nj, { registerFilter, registerExtension } from 'nornj';
import extensionConfigs from '../extensionConfig';
import { capitalize } from '../../lib/utils';

registerFilter('options:', (val, opts) => {
  if (val == null) {
    return val;
  }
  return {
    val,
    _njMobxModelOpts: opts
  };
});

function _setOnChange(options, value, action, opts) {
  switch (options.parentType.toLowerCase()) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
      {
        options.exProps.value = value.val;
        options.exProps.onChange = e => {
          if (action) {
            value._njCtx[nj.isString(action) ? action : `set${capitalize(value.prop)}`](e.target.value);
          } else {
            value._njCtx[value.prop] = e.target.value;
          }
        };
        break;
      }
    case 'ant-select':
    case 'el-input':
    case 'el-select':
      {
        options.exProps.value = value.val;
        options.exProps.onChange = v => {
          if (action) {
            value._njCtx[nj.isString(action) ? action : `set${capitalize(value.prop)}`](v);
          } else {
            value._njCtx[value.prop] = v;
          }
        };
        break;
      }
  }
}

registerExtension('mobx-model', options => {
  const ret = options.result();
  if (ret == null) {
    return ret;
  }

  let value = ret,
    action = false,
    opts = ret._njMobxModelOpts;
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
    opts = ret._njMobxModelOpts;
  if (opts) {
    value = ret.val;
    if (opts.action != null) {
      action = opts.action;
    }
  }

  _setOnChange(options, value, action, opts);
}, extensionConfigs['mst-model']);