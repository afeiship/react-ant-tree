import nxTreeWalk from '@jswork/next-tree-walk';
import { Tree } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-ant-tree';
const DEFAULT_TEMPLATE = ({ item }, cb) => {
  const { value, label } = item;
  return (
    <Tree.TreeNode key={value} value={value} title={label}>
      {cb()}
    </Tree.TreeNode>
  );
};

export default class ReactAntTree extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If show directory icon.
     */
    directory: PropTypes.bool,
    /**
     * The tree data.
     */
    items: PropTypes.array,
    /**
     * The item template function.
     */
    template: PropTypes.func.isRequired,
    /**
     * The items key.
     */
    itemsKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    directory: false,
    items: [],
    template: DEFAULT_TEMPLATE,
    itemsKey: 'children'
  };

  get childView() {
    const { items, template, itemsKey } = this.props;
    return nxTreeWalk(items, { template, itemsKey });
  }

  render() {
    const {
      className,
      children,
      items,
      template,
      directory,
      prefixCls,
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
