import React, { Component } from "react";

import "antd/dist/antd.css";

import Store from "../store";
import Authorization from "../../containers/authorization";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class App extends Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    const { getUser } = this.props;
    if (token) {
      token = token.split(" ");
      getUser(token[1]).then(() => {
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
    const { isLoggedIn, serverAvailable } = this.props;
    const { isLoading } = this.state;

    let Content = <ErrorIndicator />;

    if (serverAvailable) {
      Content = isLoggedIn ? <Store /> : <Authorization />;
    }

    return <div className="app">{isLoading ? <Spinner /> : Content}</div>;
  }
}

export default App;
