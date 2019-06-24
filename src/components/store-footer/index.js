import React from "react";

import { Layout } from "antd";

import "./index.scss";

const { Footer } = Layout;

const StoreFooter = () => {
  return (
    <Footer className="footer">
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
    </Footer>
  );
};

export default StoreFooter;
