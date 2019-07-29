import { connect } from "react-redux";

import { productsChangePage } from "../../actions";

import Pager from "../../components/pager";

const mapStateToProps = state => {
  return {
    pages: state.products.pages,
    currentPage: state.products.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: page => dispatch(productsChangePage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pager);
