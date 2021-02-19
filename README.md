# react-ant-tree
> Ant tree wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-tree
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-tree/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-tree/dist/style.scss";

  // customize your styles:
  $react-ant-tree-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntTree from '@jswork/react-ant-tree';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-tree">
          <ReactAntTree className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-tree/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-tree/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-tree
[version-url]: https://npmjs.org/package/@jswork/react-ant-tree

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-tree
[license-url]: https://github.com/afeiship/react-ant-tree/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-tree
[size-url]: https://github.com/afeiship/react-ant-tree/blob/master/dist/react-ant-tree.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-tree
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-tree
