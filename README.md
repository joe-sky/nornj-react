# NornJ-React

React bindings for NornJ template engine.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![](https://img.shields.io/bundlephobia/minzip/nornj-react@next.svg?style=flat)](https://bundlephobia.com/result?p=nornj-react@next)

### 安装

使用npm安装:

```sh
npm install nornj-react
```

### 使用bindTemplate为React组件注册模板

`bindTemplate`采用装饰器的形式，可以使NornJ用更简洁的语法配合React使用。

```js
import { Component } from 'react';
import { bindTemplate } from 'nornj-react';
import styled from 'styled-components';

@bindTemplate({
  name: 'TestComponent',  //可传入组件名，相当于调用了nj.registerComponent注册组件
  template: `             <!--可传入模板，纯字符串和以nj为前置标签的模板字符串都可以-->
    <Container id=test1>
      this the test demo{no}.
      <i>test{no}</i>
    </Container>
  `,
  components: {           //可传入局部组件，如本例配合styled-components组件使用
    Container: styled.div `
      background-color: #fff;
    `
  }
})
class TestComponent extends Component {
  render() {
    return this.props.template({ no: 1 });  //使用this.props.template方法渲染模板，该方法为标准的nj模板函数
  }
}
```

另外，`bindTemplate`装饰器也可以这样更简化地传参数：

```js
@bindTemplate(/*参数依次为：组件名、模板、局部组件*/
  'TestComponent',
  '<div id=test1>...</div>'
})
```

### License

MIT

[npm-image]: http://img.shields.io/npm/v/nornj-react.svg
[downloads-image]: http://img.shields.io/npm/dm/nornj-react.svg
[npm-url]: https://www.npmjs.org/package/nornj-react