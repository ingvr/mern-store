import { connect } from "react-redux";

import { userLogout } from "../../actions";

import LogoutButton from "../../components/logout-button";

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(userLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogoutButton);
