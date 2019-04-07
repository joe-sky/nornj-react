import { registerExtension } from 'nornj';
import React from 'react';
import { Observer } from 'mobx-react-lite';

registerExtension('mobxObserver', options => {
  return <Observer>{() => options.children()}</Observer>;
});