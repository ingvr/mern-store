import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, notification } from "antd";
import StoreFooter from "../store-footer";

import { userLogin, userLoginResetError } from "../../actions";

import { handleChange, validateEmail } from "../../utils";

import "./index.scss";

class Authorization extends Component {
  state = {
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

  handleChange = e => handleChange.call(this, e);

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;

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

  render() {
    const { email, password } = this.state;
    const { handleSubmit, handleChange } = this;

    return (
      <>
        <div className="authorization">
          <Form onSubmit={handleSubmit} className="authorization__form">
            <h2 className="authorization__header">Вход</h2>
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
        </div>
        <StoreFooter />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
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
)(Authorization);
