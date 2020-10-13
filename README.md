# react-ant-tree
> Ant tree wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-ant-tree
```

## update
```shell
npm update @feizheng/react-ant-tree
```
## warning
> 个人认为，去掉 children 是个失败的改进。
~~~
Warning: `children` of Tree is deprecated. Please use `treeData` instead.
~~~

## properties
| Name      | Type   | Required | Default    | Description                           |
| --------- | ------ | -------- | ---------- | ------------------------------------- |
| className | string | false    | -          | The extended className for component. |
| directory | bool   | false    | false      | If show directory icon.               |
| items     | array  | false    | []         | The tree data.                        |
| template  | func   | false    | -          | The item template function.           |
| itemsKey  | union  | false    | 'children' | The items key.                        |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-tree/dist/style.scss";

  // customize your styles:
  $react-ant-tree-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@feizheng/react-demokit';
  import { Tree } from 'antd';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntTree from '@feizheng/react-ant-tree';
  import './assets/style.scss';

  class App extends React.Component {
    constructor(inProps) {
      super(inProps);
      this.state = {
        items: [
          {
            label: '0-0',
            value: '0-0',
            children: [
              {
                label: '0-0-0',
                value: '0-0-0',
                children: [
                  { label: '0-0-0-0', value: '0-0-0-0' },
                  { label: '0-0-0-1', value: '0-0-0-1' },
                  { label: '0-0-0-2', value: '0-0-0-2' }
                ]
              },
              {
                label: '0-0-1',
                value: '0-0-1',
                children: [
                  { label: '0-0-1-0', value: '0-0-1-0' },
                  { label: '0-0-1-1', value: '0-0-1-1' },
                  { label: '0-0-1-2', value: '0-0-1-2' }
                ]
              },
              {
                label: '0-0-2',
                value: '0-0-2'
              }
            ]
          },
          {
            label: '0-1',
            value: '0-1',
            children: [
              { label: '0-1-0-0', value: '0-1-0-0' },
              { label: '0-1-0-1', value: '0-1-0-1' },
              { label: '0-1-0-2', value: '0-1-0-2' }
            ]
          },
          {
            label: '0-2',
            value: '0-2'
          }
        ]
      };
    }

    template = ({ item }, cb) => {
      const { value, label, independent } = item;
      return (
        <Tree.TreeNode key={value} value={value} title={label}>
          {cb()}
        </Tree.TreeNode>
      );
    };

    onSelect = (s, e) => {
      console.log('s,e', s, e);
    };

    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-tree">
          <ReactAntTree
            onSelect={this.onSelect}
            showLine
            items={this.state.items}
            template={this.template}
          />
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

[version-image]: https://img.shields.io/npm/v/@feizheng/react-ant-tree
[version-url]: https://npmjs.org/package/@feizheng/react-ant-tree

[license-image]: https://img.shields.io/npm/l/@feizheng/react-ant-tree
[license-url]: https://github.com/afeiship/react-ant-tree/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-ant-tree
[size-url]: https://github.com/afeiship/react-ant-tree/blob/master/dist/react-ant-tree.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-ant-tree
[download-url]: https://www.npmjs.com/package/@feizheng/react-ant-tree
