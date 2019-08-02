import { connect } from "react-redux";

import { productAdd } from "../../actions";

import { CreateProductModal } from "../../components/modals";

const mapStateToProps = state => {
  return {
    categories: state.categories.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProduct: product => dispatch(productAdd(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProductModal);
