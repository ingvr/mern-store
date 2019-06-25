const initialState = {
  items: [
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
        items: action.payload
      };

    case "CATEGORY_ADD":
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.nextCategoryId,
            title: action.payload,
            active: false
          }
        ],
        nextCategoryId: state.nextCategoryId + 1
      };

    case "CATEGORY_DELETE":
      const { items } = state;
      const idx = items.findIndex(item => item.key === action.payload);

      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];

      return {
        ...state,
        items: newArray
      };

    default:
      return state;
  }
};

export default categories;
