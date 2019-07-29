import React, { Component } from "react";
import { Button, Radio, Icon } from "antd";

import "./index.scss";

export default class Pager extends Component {
  handleChangePage = e => {
    this.props.changePage(e.target.value);
  };

  render() {
    const { pages, currentPage } = this.props;

    const items = [];

    for (let i = 1; i <= pages; i++) {
      items.push(
        <Radio.Button key={i} value={i}>
          {i}
        </Radio.Button>
      );
    }

    return (
      <div className="pager">
        <Radio.Group value={currentPage} onChange={this.handleChangePage}>
          {items}
        </Radio.Group>
      </div>
    );
  }
}
