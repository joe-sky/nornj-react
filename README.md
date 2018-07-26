# NornJ-React

React bindings for template engine NornJ

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]

### 安装

使用npm安装:

```sh
npm install nornj-react
```

### 使用registerTmpl为React组件注册模板

`registerTmpl`采用es7装饰器的形式，可以使NornJ用更简洁的语法配合React使用。

```js
import { Component } from 'react';
import { registerTmpl } from 'nornj-react';
import styled from 'styled-components';

@registerTmpl({
  name: 'TestComponent',  //可传入组件名，相当于调用了nj.registerComponent注册组件
  components: {           //可传入局部组件，如本例配合styled-components组件使用
    Container: styled.div `
      background-color: #fff;
    `
  },
  template: `             <!--可传入模板，纯字符串和以nj为前置标签的模板字符串都可以-->
    <Container id=test1>
      this the test demo{no}.
      <i>test{no}</i>
    </Container>
  `,
  cache: false            //可指定是否开启缓存，缓存key为name参数，默认为false
})
class TestComponent extends Component {
  render() {
    return this.template({ no: 1 });  //使用this.template方法渲染模板，该方法为标准的nj模板函数
  }
}
```

另外，`registerTmpl`装饰器也可以这样更简化地传参数：

```js
@registerTmpl(/*参数依次为：组件名、模板、是否开启缓存、局部组件*/
  'TestComponent', '<div id=test1>...</div>'
})
```

### License

MIT

[npm-image]: http://img.shields.io/npm/v/nornj-react.svg
[downloads-image]: http://img.shields.io/npm/dm/nornj-react.svg
[npm-url]: https://www.npmjs.org/package/nornj-react