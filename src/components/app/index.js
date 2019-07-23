import React, { Component } from "react";
import { connect } from "react-redux";

import { userGetInfo } from "../../actions";

import "antd/dist/antd.css";

import Store from "../store";
import Authorization from "../authorization";
import Spinner from "../spinner";

export class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    const { getUser } = this.props;
    if (token) {
      const userToken = token.split(" ");
      getUser(userToken[1]).then(() => {
        this.setState({
          isLoading: false
        });
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { isLoading } = this.state;

    const Content = isLoggedIn ? <Store /> : <Authorization />;

    return <div className="app">{isLoading ? <Spinner /> : Content}</div>;
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
