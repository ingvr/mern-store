import React, { Component } from "react";
import { Layout, Menu, Icon, Button, Popconfirm } from "antd";

import Spinner from "../spinner";

import "./index.scss";

const { Sider } = Layout;

export class Nav extends Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const {
      deleteCategory,
      filterProducts,
      categories,
      isLoading
    } = this.props;

    return (
      <Sider width={200} className="nav">
        <Menu mode="inline" defaultSelectedKeys={["-1"]} className="nav__menu">
          {isLoading && <Spinner />}
          {categories.map(({ _id, title }) => (
            <Menu.Item key={_id} onClick={() => filterProducts(_id)}>
              <Popconfirm
                title="Вы уверены, что хотите удалить эту категорию?"
                onConfirm={() => {
                  deleteCategory(_id);
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
              {title}
            </Menu.Item>
          ))}
          <Menu.Item key="0" onClick={() => filterProducts("0")}>
            <Icon type="stop" />
            Без категории
          </Menu.Item>
          <Menu.Item key="-1" onClick={() => filterProducts("ALL_CATEGORIES")}>
            <Icon type="appstore" />
            Все
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Nav;
