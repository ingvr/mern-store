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
    case "PRODUCT_EDIT": {
      const {
        key,
        name,
        category: categoryId,
        rowPrice,
        fullPrice
      } = action.payload;
      const idx = items.findIndex(item => item.key === key);
      const newArray = [
        ...items.slice(0, idx),
        { key, name, categoryId: parseInt(categoryId), rowPrice, fullPrice },
        ...items.slice(idx + 1)
      ];
      return {
        ...state,
        items: newArray
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
