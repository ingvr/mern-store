import React, { Component } from "react";
import { Radio } from "antd";

import "./index.scss";

export default class Pager extends Component {
  handleChangePage = e => {
    this.props.changePage(e.target.value);
  };

  render() {
    const { totalPages, currentPage } = this.props;

    if (totalPages === 1) {
      return false;
    }

    const items = [];

    if (currentPage > 1) {
      items.push(
        <Radio.Button key="0" value={currentPage - 1}>
          &lsaquo;
        </Radio.Button>
      );
    }

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Radio.Button key={i} value={i}>
          {i}
        </Radio.Button>
      );
    }

    if (currentPage < totalPages) {
      items.push(
        <Radio.Button key={totalPages + 1} value={currentPage + 1}>
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
