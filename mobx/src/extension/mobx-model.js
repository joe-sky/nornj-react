import nj, { registerFilter, registerExtension } from 'nornj';
import extensionConfigs from '../extensionConfig';
import { capitalize } from '../../lib/utils';
import '../../lib/filter/options';

const VALUE_CHECKED = ['el-checkbox'];

function _setOnChange(options, value, action, opts = {}) {
  let {
    valuePropName = 'value',
      changeEventName = 'onChange',
      beforeChange,
      afterChange,
      reverse = false
  } = opts;
  const parentType = options.parentType.toLowerCase();

  if (valuePropName === 'value' && VALUE_CHECKED.indexOf(parentType) > -1) {
    valuePropName = 'checked';
  }

  switch (parentType) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
      {
        options.exProps[valuePropName] = value.val;
        options.exProps[changeEventName] = e => {
          let preventChange,
            v = e.target.value;
          if (beforeChange) {
            preventChange = beforeChange(v);
          }

          if (preventChange !== false) {
            if (action) {
              value._njCtx[nj.isString(action) ? action : `set${capitalize(value.prop)}`](reverse ? !v : v);
            } else {
              value._njCtx[value.prop] = reverse ? !v : v;
            }

            afterChange && afterChange();
          }
        };
        break;
      }
    case 'ant-select':
    case 'el-input':
    case 'el-select':
    case 'el-datepicker':
    case 'el-daterangepicker':
    case 'el-timeselect':
    case 'el-timepicker':
    case 'el-timerangepicker':
    case 'el-switch':
    case 'el-checkbox':
    case 'el-checkbox.group':
    case 'el-radio.group':
    default:
      {
        options.exProps[valuePropName] = value.val;
        options.exProps[changeEventName] = v => {
          let preventChange;
          if (beforeChange) {
            preventChange = beforeChange(e.target.value);
          }

          if (preventChange !== false) {
            if (action) {
              value._njCtx[nj.isString(action) ? action : `set${capitalize(value.prop)}`](reverse ? !v : v);
            } else {
              value._njCtx[value.prop] = reverse ? !v : v;
            }

            afterChange && afterChange();
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