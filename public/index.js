import ReactAntTree from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
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
      <Tree.TreeNode key={value} value={value} title={label} children={cb()} />
    );
  };

  render() {
    return (
      <div className="app-container">
        <ReactAntTree
          showLine
          items={this.state.items}
          template={this.template}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
