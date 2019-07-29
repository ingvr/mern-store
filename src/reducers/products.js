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
      const { products, pages, filteredProducts, page } = action.payload;
      return {
        ...state,
        items: products,
        currentPage: page,
        pages,
        filteredProducts,
        isLoading: false
      };
    }
    case "PRODUCTS_RESET_CATEGORY": {
      return {
        ...state,
        filteredProducts: "0"
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
