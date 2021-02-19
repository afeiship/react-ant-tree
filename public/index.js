import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntTree from '../src/main';
import { Tree } from 'antd';
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
