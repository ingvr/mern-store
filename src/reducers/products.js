const initialState = {
  items: [
    {
      key: 1,
      name: "Товар 1",
      rowPrice: "2000",
      fullPrice: "2500",
      categoryId: 1
    },
    {
      key: 2,
      name: "Товар 2",
      rowPrice: "2200",
      fullPrice: "2700",
      categoryId: 2
    },
    {
      key: 3,
      name: "Товар 3",
      rowPrice: "2200",
      fullPrice: "2700",
      categoryId: 3
    },
    {
      key: 4,
      name: "Товар 4",
      rowPrice: "2200",
      fullPrice: "2700",
      categoryId: null
    }
  ],
  nextProductId: 5,
  filteredCategory: 0
};

const products = (state = initialState, action) => {
  const { items } = state;
  switch (action.type) {
    case "PRODUCTS_LOADED": {
      return {
        items: action.payload
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
      let newArray = items;
      newArray = newArray.map(item => {
        if (item.key === action.payload) {
          item.categoryId = null;
        }
        return item;
      });
      return {
        ...state,
        items: newArray
      };
    }
    default: {
      return state;
    }
  }
};

export default products;
