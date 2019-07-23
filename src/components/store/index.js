import React from "react";

import { Layout } from "antd";

import StoreHeader from "../store-header";
import Nav from "../nav";
import ProductList from "../product-list";
import StoreFooter from "../store-footer";

import "./index.scss";

const { Content } = Layout;

const Store = () => {
  return (
    <>
      <StoreHeader />
      <Layout>
        <Nav />
        <Layout className="store">
          <Content className="store__content">
            <ProductList />
          </Content>
        </Layout>
      </Layout>
      <StoreFooter />
    </>
  );
};

export default Store;
