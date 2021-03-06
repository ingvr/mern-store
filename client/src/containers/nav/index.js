import { connect } from "react-redux";

import { fetchCategories, categoryDelete, fetchProducts } from "../../actions";

import Nav from "../../components/nav";

const mapStateToProps = state => {
  return {
    categories: state.categories.items,
    isLoading: state.categories.isLoading,
    filteredProducts: state.products.filteredProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCategory: category => dispatch(categoryDelete(category)),
    filterProducts: category =>
      dispatch(fetchProducts({ categoryId: category, currentPage: 1 })),
    loadCategories: () => dispatch(fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
