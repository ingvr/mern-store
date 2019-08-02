import { connect } from "react-redux";

import { categoryAdd } from "../../actions";

import { CreateCategoryModal } from "../../components/modals";

const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(categoryAdd(category))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCategoryModal);
