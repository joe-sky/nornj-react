import { registerFilter } from 'nornj';
import filterConfig from '../filterConfig';

registerFilter('options:', (val, opts) => {
  if (val == null) {
    return val;
  }
  return {
    val,
    _njOptions: opts
  };
}, filterConfig['options:']);