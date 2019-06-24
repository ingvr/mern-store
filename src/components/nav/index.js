import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Menu, Icon } from "antd";

import "./index.scss";

const { Sider } = Layout;

class Nav extends Component {
  render() {
    const { categories } = this.props;
    return (
      <Sider width={200} className="nav">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          className="nav__menu"
        >
          {categories.map(category => (
            <Menu.Item key={category.id}>
              <Icon type="close-circle" />
              {category.title}
            </Menu.Item>
          ))}
          <Menu.Item key="4">Без категории</Menu.Item>
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

export default connect(mapStateToProps)(Nav);
