const initialState = {
  categories: [
    {
      id: 1,
      title: "Категория 1",
      active: false
    },
    {
      id: 2,
      title: "Категория 2",
      active: false
    },
    {
      id: 3,
      title: "Категория 3",
      active: false
    }
  ],
  products: [
    {
      key: "1",
      product: "Товар 1",
      rowPrice: "2000",
      fullPrice: "2500"
    },
    {
      key: "2",
      product: "Товар 2",
      rowPrice: "2200",
      fullPrice: "2700"
    },
    {
      key: "3",
      product: "Товар 3",
      rowPrice: "2200",
      fullPrice: "2700"
    },
    {
      key: "4",
      product: "Товар 4",
      rowPrice: "2200",
      fullPrice: "2700"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_LOADED":
      return {
        categories: action.payload
      };

    case "PRODUCTS_LOADED":
      return {
        products: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
