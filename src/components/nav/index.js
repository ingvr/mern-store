import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Menu, Icon, Button, Popconfirm } from "antd";

import { categoryDelete, productsFilter } from "../../actions";

import "./index.scss";

const { Sider } = Layout;

class Nav extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Sider width={200} className="nav">
        <Menu
          mode="inline"
          defaultSelectedKeys={["5"]}
          defaultOpenKeys={["sub1"]}
          className="nav__menu"
        >
          {categories.map(category => (
            <Menu.Item
              key={category.key}
              onClick={() => this.props.filterProducts(category.key)}
            >
              <Popconfirm
                title="Вы уверены, что хотите удалить эту категорию?"
                onConfirm={() => {
                  this.props.deleteCategory(category.key);
                }}
                onCancel={() => {
                  return false;
                }}
                okText="Да"
                cancelText="Нет"
              >
                <Button type="danger" className="nav__close-button">
                  <Icon type="close" style={{ margin: "0px" }} />
                </Button>
              </Popconfirm>
              {category.title}
            </Menu.Item>
          ))}
          <Menu.Item key="4" onClick={() => this.props.filterProducts(null)}>
            <Icon type="stop" />
            Без категории
          </Menu.Item>
          <Menu.Item key="5" onClick={() => this.props.filterProducts(0)}>
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
    categories: state.categories.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCategory: category => dispatch(categoryDelete(category)),
    filterProducts: category => dispatch(productsFilter(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
