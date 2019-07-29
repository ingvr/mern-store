import React, { Component } from "react";

import { Button, Popconfirm } from "antd";

class LogoutButton extends Component {
  render() {
    const { logout } = this.props;
    return (
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
        <Button
          style={{ marginLeft: "30px" }}
          type="danger"
          shape="round"
          icon="logout"
        >
          Выйти
        </Button>
      </Popconfirm>
    );
  }
}

export default LogoutButton;
