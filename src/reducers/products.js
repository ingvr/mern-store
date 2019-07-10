const initialState = {
  items: [],
  filteredCategory: "ALL_CATEGORIES",
  isLoading: false
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
      return {
        ...state,
        items: action.payload,
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
    case "PRODUCTS_FILTER": {
      return {
        ...state,
        filteredCategory: action.payload
      };
    }
    case "PRODUCTS_RESET_CATEGORY": {
      return {
        ...state,
        items: action.payload,
        filteredCategory: "0"
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
