const initialState = {
  items: [],
  isLoading: false,
  pages: 1,
  currentPage: 1,
  filteredProducts: "ALL_CATEGORIES"
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCTS_REQUESTED": {
      return {
        ...state,
        isLoading: true
      };
    }
    case "PRODUCTS_RECEIVED": {
      const { products, pages, filteredProducts } = action.payload;
      return {
        ...state,
        items: products,
        pages,
        filteredProducts,
        isLoading: false
      };
    }
    case "PRODUCT_ADD_SUCCESS": {
      return {
        ...state,
        items: action.payload
      };
    }
    case "PRODUCT_DELETE_SUCCESS": {
      return {
        ...state,
        items: action.payload
      };
    }
    case "PRODUCT_EDIT_SUCCESS": {
      return {
        ...state,
        items: action.payload
      };
    }
    case "PRODUCTS_RESET_CATEGORY": {
      return {
        ...state,
        items: action.payload,
        filteredCategory: "0"
      };
    }
    case "PRODUCTS_CHANGE_PAGE": {
      return {
        ...state,
        currentPage: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
