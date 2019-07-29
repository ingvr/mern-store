import React, { Component } from "react";
import { Radio } from "antd";

import "./index.scss";

export default class Pager extends Component {
  handleChangePage = e => {
    this.props.changePage(e.target.value);
  };

  render() {
    const { pages, currentPage } = this.props;

    if (pages === 1) return false;

    const items = [];

    if (currentPage > 1) {
      items.push(
        <Radio.Button key="0" value={currentPage - 1}>
          &lsaquo;
        </Radio.Button>
      );
    }

    for (let i = 1; i <= pages; i++) {
      items.push(
        <Radio.Button key={i} value={i}>
          {i}
        </Radio.Button>
      );
    }

    if (currentPage < pages) {
      items.push(
        <Radio.Button key={pages + 1} value={currentPage + 1}>
          &rsaquo;
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
