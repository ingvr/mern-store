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
  nextCategoryId: 5
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_LOADED":
      return {
        categories: action.payload
      };

    case "CATEGORY_ADD":
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: state.nextCategoryId,
            title: action.payload,
            active: false
          }
        ],
        nextCategoryId: state.nextCategoryId + 1
      };

    default:
      return state;
  }
};

export default categories;
