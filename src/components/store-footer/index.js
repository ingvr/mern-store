import React from "react";

import { Layout } from "antd";

import { DemoModal } from "../modals";

const { Footer } = Layout;

const StoreFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      &copy; Copyright 2322 by Igor Leontev
      <br />
      source:&nbsp;
      <a
        href="https://github.com/nzmi/test-store"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/nzmi/test-store
      </a>
      <DemoModal />
    </Footer>
  );
};

export default StoreFooter;
