import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Tree } from 'antd';

const CLASS_NAME = 'react-ant-tree';
const RETURN_VALUE = (item) => item;

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    transform: PropTypes.func
  };

  static defaultProps = {
    items: [],
    transform: RETURN_VALUE
  };

  renderChildren(inData) {
    const { transform } = this.props;
    if (inData && inData.length) {
      return inData.map((item) => {
        const _item = transform(item);
        const { label, value, ...itemProps } = _item;
        if (item.children) {
          return (
            <Tree.TreeNode title={label} key={value} {...itemProps}>
              {this.renderChildren(children)}
            </Tree.TreeNode>
          );
        }
        return <Tree.TreeNode title={label} key={value} />;
      });
    }
    return null;
  }

  render() {
    const { className, children, items, ...props } = this.props;
    return (
      <Tree
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.renderChildren(items)}
      </Tree>
    );
  }
}
