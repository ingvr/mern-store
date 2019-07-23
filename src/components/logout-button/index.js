import React, { Component } from "react";
import { connect } from "react-redux";

import { userLogout } from "../../actions";

import { Icon, Button, Popconfirm } from "antd";

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
        <Button style={{ marginLeft: "15px" }} icon="edit">
          Выйти
        </Button>
      </Popconfirm>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(userLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
