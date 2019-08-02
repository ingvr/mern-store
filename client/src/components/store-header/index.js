import React from "react";

import { Layout, Row, Col, Icon } from "antd";
import {
  CreateCategoryModal,
  CreateProductModal
} from "../../containers/modals";
import LogoutButton from "../../containers/logout-button";

import "./index.scss";

const { Header } = Layout;

const StoreHeader = () => {
  return (
    <Header className="store-header">
      <Row gutter={16}>
        <Col span={4} className="store-header__logo">
          <Icon type="fire" theme="filled" /> SuperStore
        </Col>
        <Col span={20} style={{ textAlign: "right" }}>
          <CreateProductModal />
          <CreateCategoryModal />
          <LogoutButton />
        </Col>
      </Row>
    </Header>
  );
};

export default StoreHeader;
