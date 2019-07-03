const initialState = {
  items: [],
  nextProductId: 0,
  filteredCategory: "ALL_CATEGORIES",
  isLoading: false
};

const products = (state = initialState, action) => {
  const { items } = state;

  switch (action.type) {
    case "PRODUCTS_REQUESTED": {
      return {
        ...state,
        isLoading: true
      };
    }
    case "PRODUCTS_RECEIVED": {
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    }
    case "PRODUCT_ADD_SUCCESS": {
      return {
        ...action.payload
      };
    }
    case "PRODUCT_DELETE_SUCCESS": {
      return {
        ...action.payload
      };
    }
    case "PRODUCT_EDIT_SUCCESS": {
      return {
        ...action.payload
      };
    }
    case "PRODUCTS_FILTER": {
      return {
        ...state,
        filteredCategory: action.payload
      };
    }
    case "PRODUCTS_RESET_CATEGORY_SUCCESS": {
      return {
        ...state,
        items: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
