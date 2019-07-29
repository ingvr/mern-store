import { connect } from "react-redux";

import { fetchProducts, productDelete } from "../../actions";

import ProductList from "../../components/product-list";

const mapStateToProps = state => {
  return {
    products: state.products.items,
    isLoading: state.products.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: product => dispatch(productDelete(product)),
    loadProducts: () => dispatch(fetchProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
