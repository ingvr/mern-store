import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Layout, Menu, Icon, Button, Popconfirm} from 'antd';

import Spinner from '../spinner';

import {
  fetchCategories,
  categoryDelete,
  productsFilter,
  productsResetCategory,
} from '../../actions';

import './index.scss';

const {Sider} = Layout;

class Nav extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const {
      deleteCategory,
      resetProductsCategory,
      filterProducts,
      categories,
      isLoading,
    } = this.props;

    return (
      <Sider width={200} className="nav">
        <Menu
          mode="inline"
          defaultSelectedKeys={['ALL_CATEGORIES']}
          defaultOpenKeys={['sub1']}
          className="nav__menu">
          {isLoading && <Spinner />}
          {categories.map(({key, title}) => (
            <Menu.Item key={key} onClick={() => filterProducts(key)}>
              <Popconfirm
                title="Вы уверены, что хотите удалить эту категорию?"
                onConfirm={() => {
                  deleteCategory(key);
                  resetProductsCategory(key);
                }}
                onCancel={() => {
                  return false;
                }}
                okText="Да"
                cancelText="Нет">
                <Button type="danger" className="nav__close-button">
                  <Icon type="close" style={{margin: '0px'}} />
                </Button>
              </Popconfirm>
              {title}
            </Menu.Item>
          ))}
          <Menu.Item key="0" onClick={() => filterProducts(0)}>
            <Icon type="stop" />
            Без категории
          </Menu.Item>
          <Menu.Item key="-1" onClick={() => filterProducts('ALL_CATEGORIES')}>
            <Icon type="appstore" />
            Все
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.items,
    isLoading: state.categories.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCategory: category => dispatch(categoryDelete(category)),
    resetProductsCategory: category =>
      dispatch(productsResetCategory(category)),
    filterProducts: category => dispatch(productsFilter(category)),
    loadCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
