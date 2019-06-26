const initialState = {
  items: [
    {
      key: 1,
      title: "Категория 1",
      active: false
    },
    {
      key: 2,
      title: "Категория 2",
      active: false
    },
    {
      key: 3,
      title: "Категория 3",
      active: false
    }
  ],
  nextCategoryId: 6
};

const categories = (state = initialState, action) => {
  const { items } = state;

  switch (action.type) {
    case "CATEGORIES_LOADED":
      return {
        items: action.payload
      };

    case "CATEGORY_ADD":
      return {
        ...state,
        items: [
          ...items,
          {
            key: state.nextCategoryId,
            title: action.payload,
            active: false
          }
        ],
        nextCategoryId: state.nextCategoryId + 1
      };

    case "CATEGORY_DELETE":
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
