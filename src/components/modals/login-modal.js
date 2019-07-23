import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Icon, Button, notification } from "antd";

import { userLogin, userLoginResetError } from "../../actions";
import { ModalWrapper } from "../hoc";
import { handleChange, validateEmail } from "./utils";

class LoginModal extends Component {
  state = {
    name: false,
    email: "",
    password: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      const { loginError, resetLoginError } = this.props;
      if (loginError) {
        notification.open({
          message: "Ошибка входа",
          description: loginError,
          icon: <Icon type="exclamation-circle" style={{ color: "#CE0014" }} />
        });
        resetLoginError();
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { hideModal, login, userInfo } = this.props;
    const { email, password } = this.state;

    if (!validateEmail(email)) {
      notification.open({
        message: "Ошибка входа",
        description: "Email должен быть в формате mail@domain.ru",
        icon: <Icon type="exclamation-circle" style={{ color: "#CE0014" }} />
      });
      return false;
    }

    login({ email, password });
  };

  handleChange = e => handleChange.call(this, e);

  render() {
    const { visible, showModal, hideModal } = this.props;
    const { handleSubmit, handleChange } = this;
    const { email, password } = this.state;
    let render;
    return (
      <>
        <Button onClick={showModal} style={{ marginLeft: "10px" }} type="link">
          <Icon type="export" />
          Войти
        </Button>
        <Modal
          title="Войти на сайт"
          visible={visible}
          onCancel={hideModal}
          footer={[]}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                name="email"
                prefix={<Icon type="mail" />}
                placeholder="Электронная почта"
                value={email}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                name="password"
                prefix={<Icon type="lock" />}
                placeholder="Пароль"
                value={password}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Войти
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.users.userInfo,
    loginError: state.users.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: userInfo => dispatch(userLogin(userInfo)),
    resetLoginError: () => dispatch(userLoginResetError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWrapper(LoginModal));
