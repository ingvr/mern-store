import { connect } from "react-redux";

import { userLogin, userLoginResetError } from "../../actions";

import Authorization from "../../components/authorization";

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
