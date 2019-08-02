import React from "react";

import { Layout, Icon } from "antd";

import "./index.scss";

const { Footer } = Layout;

const StoreFooter = () => {
  return (
    <Footer className="footer">
      &copy; Copyright 2322 by Igor Leontev
      <br />
      <a
        href="https://github.com/nzmi/test-store"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        <Icon type="github" /> GitHub
      </a>
    </Footer>
  );
};

export default StoreFooter;
