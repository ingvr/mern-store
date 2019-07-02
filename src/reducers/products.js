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
    case "PRODUCT_ADD": {
      const { nextProductId: key } = state;
      const {
        name,
        rowPrice,
        fullPrice,
        category: categoryId
      } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            name,
            rowPrice,
            fullPrice,
            categoryId: parseInt(categoryId)
          }
        ],
        nextProductId: key + 1
      };
    }
    case "PRODUCT_DELETE": {
      const idx = items.findIndex(item => item.key === action.payload);

      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];

      return {
        ...state,
        items: newArray
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
    case "PRODUCTS_RESET_CATEGORY": {
      return {
        ...state,
        items: items.map(item => ({
          ...item,
          categoryId: item.categoryId === action.payload ? 0 : item.categoryId
        }))
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
