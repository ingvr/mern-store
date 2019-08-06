import { connect } from "react-redux";

import { productsChangePage } from "../../actions";

import Pager from "../../components/pager";

const mapStateToProps = state => {
  return {
    totalPages: state.products.totalPages,
    currentPage: state.products.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: currentPage => dispatch(productsChangePage(currentPage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pager);
