import { connect } from "react-redux";

import { userGetInfo } from "../../actions";

import App from "../../components/app";

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
