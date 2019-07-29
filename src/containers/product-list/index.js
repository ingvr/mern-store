import { connect } from "react-redux";

import { fetchProducts, productDelete } from "../../actions";

import ProductList from "../../components/product-list";

const mapStateToProps = state => {
  return {
    products: state.products.items,
    isLoading: state.products.isLoading,
    currentPage: state.products.currentPage,
    filteredProducts: state.products.filteredProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: product => dispatch(productDelete(product)),
    loadProducts: payload => dispatch(fetchProducts(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
