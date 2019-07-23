import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogout } from "../../actions";

import { Layout, Row, Col, Icon, Button, Popconfirm } from "antd";
import { CreateCategoryModal, CreateProductModal, LoginModal } from "../modals";

import "./index.scss";

const { Header } = Layout;

class StoreHeader extends Component {
  render() {
    const { logout } = this.props;
    return (
      <Header className="store-header">
        <Row gutter={16}>
          <Col span={4} className="store-header__logo">
            <Icon type="fire" theme="filled" /> SuperStore
          </Col>
          <Col span={20} style={{ textAlign: "right" }}>
            <CreateProductModal />
            <CreateCategoryModal />
            <Popconfirm
              title="Вы уверены, что хотите выйти?"
              onConfirm={() => {
                logout();
              }}
              onCancel={() => {
                return false;
              }}
              okText="Да"
              cancelText="Нет"
            >
              <Button style={{ marginLeft: "15px" }}>Выйти</Button>
            </Popconfirm>
          </Col>
        </Row>
      </Header>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(userLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StoreHeader);
