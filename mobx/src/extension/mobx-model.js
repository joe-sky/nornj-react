import nj, { registerExtension } from 'nornj';
import extensionConfigs from '../extensionConfig';
import { capitalize } from '../../lib/utils';

function _setOnChange(options, valueName, storeName, action) {
  switch (options.parentType.toLowerCase()) {
    case 'input':
    case 'select':
    case 'ant-input':
    case 'textarea':
    case 'ant-textarea':
    case 'ant-input.textarea':
      {
        options.exProps.value = options.context.getData(storeName)[valueName];
        options.exProps.onChange = e => {
          const store = options.context.getData(storeName);
          if (action) {
            store[nj.isString(action) ? action : `set${capitalize(valueName)}`](e.target.value);
          } else {
            store[valueName] = e.target.value;
          }
        };
        break;
      }
    case 'ant-select':
      {
        options.exProps.value = options.context.getData(storeName)[valueName];
        options.exProps.onChange = v => {
          const store = options.context.getData(storeName);
          if (action) {
            store[nj.isString(action) ? action : `set${capitalize(valueName)}`](v);
          } else {
            store[valueName] = v;
          }
        };
        break;
      }
  }
}

registerExtension('mobx-model', options => {
  const ret = options.result();
  let valueName = ret,
    storeName = '$store',
    action = false;
  if (nj.isObject(ret)) {
    valueName = ret.value;
    if (ret.store != null) {
      storeName = ret.store;
    }
    if (ret.action != null) {
      action = ret.action;
    }
  }

  _setOnChange(options, valueName, storeName, action);
}, extensionConfigs['mobx-model']);

registerExtension('mst-model', options => {
  const ret = options.result();
  let valueName = ret,
    storeName = '$store',
    action = true;
  if (nj.isObject(ret)) {
    valueName = ret.value;
    if (ret.store != null) {
      storeName = ret.store;
    }
    if (ret.action != null) {
      action = ret.action;
    }
  }

  _setOnChange(options, valueName, storeName, action);
}, extensionConfigs['mst-model']);