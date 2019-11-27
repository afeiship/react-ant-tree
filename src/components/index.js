import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Tree } from 'antd';
import nxTreeWalk from '@feizheng/next-tree-walk';

const CLASS_NAME = 'react-ant-tree';
const RETURN_TEMPLATE = ({ item }, cb) => {
  const { value, label } = item;
  return (
    <Tree.TreeNode key={value} value={value} title={label} children={cb()} />
  );
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    directory: PropTypes.bool,
    items: PropTypes.array,
    template: PropTypes.func.isRequired
  };

  static defaultProps = {
    directory: false,
    items: [],
    template: RETURN_TEMPLATE
  };

  get childView() {
    const { items, template } = this.props;
    return nxTreeWalk(items, { template });
  }

  render() {
    const {
      className,
      children,
      items,
      template,
      directory,
      ...props
    } = this.props;

    const RootComp = directory ? Tree.DirectoryTree : Tree;

    return (
      <RootComp
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </RootComp>
    );
  }
}
