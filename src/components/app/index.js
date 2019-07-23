import React, { Component } from "react";
import { connect } from "react-redux";

import { userGetInfo } from "../../actions";

import Store from "../store";
import Authorization from "../authorization";

import "antd/dist/antd.css";

export class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    const { getUser } = this.props;
    if (token) {
      const userToken = token.split(" ");
      getUser(userToken[1]);
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="app">{isLoggedIn ? <Store /> : <Authorization />}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.users.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: token => dispatch(userGetInfo(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
