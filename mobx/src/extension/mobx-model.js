import nj, { registerFilter, registerExtension } from 'nornj';
import { toJS } from 'mobx';
import extensionConfigs from '../extensionConfig';
import { capitalize } from '../../lib/utils';
import '../../lib/filter/options';

const VALUE_CHECKED = [
  'ant-switch',
  'el-checkbox'
];
const NEED_TOJS = [
  'ant-cascader',
  'el-cascader',
  'el-checkbox.group',
  'ant-checkbox.group'
];

function _setValue(value, params) {
  let preventChange;
  if (params.beforeChange) {
    preventChange = params.beforeChange(value);
  }

  if (preventChange !== false) {
    const _value = params.reverse ? !params.value.val : value;
    if (params.action) {
      params.value._njCtx[nj.isString(params.action) ? params.action : `set${capitalize(params.value.prop)}`](_value);
    } else {
      params.value._njCtx[params.value.prop] = _value;
    }

    params.afterChange && params.afterChange(value);
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
  const parentName = options.parentName.toLowerCase();

  if (valuePropName === 'value' && VALUE_CHECKED.indexOf(parentName) > -1) {
    valuePropName = 'checked';
  }

  var _value = value.val;
  if (NEED_TOJS.indexOf(parentName) > -1) {
    _value = toJS(_value);
  }

  switch (parentName) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
      {
        options.exProps[valuePropName] = _value;
        options.exProps[changeEventName] = e => {
          _setValue(e.target.value, {
            parentName,
            value,
            action,
            valuePropName,
            beforeChange,
            afterChange,
            reverse
          });
        };
        break;
      }
    case 'ant-select':
    case 'ant-cascader':
    case 'ant-switch':
    case 'ant-checkbox.group':
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
    case 'el-cascader':
    default:
      {
        options.exProps[valuePropName] = _value;
        options.exProps[changeEventName] = v => {
          _setValue(v, {
            parentName,
            value,
            action,
            valuePropName,
            beforeChange,
            afterChange,
            reverse
          });
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