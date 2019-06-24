import React from "react";

import { Layout, Row, Col, Icon } from "antd";

import { CreateCategoryModal, CreateProductModal } from "../modals";

import "./index.scss";

const { Header } = Layout;

const StoreHeader = () => {
  return (
    <div>
      <Header className="store-header">
        <Row gutter={16}>
          <Col span={4} className="store-header__logo">
            <Icon type="fire" theme="filled" /> SuperStore
          </Col>
          <Col span={20} style={{ textAlign: "right" }}>
            <CreateProductModal />
            <CreateCategoryModal />
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default StoreHeader;
