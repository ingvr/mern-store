import { connect } from "react-redux";

import { productEdit } from "../../actions";

import { EditProductModal } from "../../components/modals";

const mapStateToProps = state => {
  return {
    categories: state.categories.items,
    products: state.products.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProduct: product => dispatch(productEdit(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProductModal);
