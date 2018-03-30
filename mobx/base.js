import { registerComponent, registerFilter } from 'nornj';
import { toJS } from 'mobx';
import { Provider } from 'mobx-react';
import './lib/extension/mobx-model';

registerComponent('mobx-Provider', Provider);
registerFilter('toJS', v => toJS(v));