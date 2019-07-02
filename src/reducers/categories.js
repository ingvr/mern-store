const initialState = {
  items: [],
  nextCategoryId: 0,
  isLoading: false
};

const categories = (state = initialState, action) => {
  const { items } = state;

  switch (action.type) {
    case "CATEGORIES_REQUEST": {
      return {
        ...state,
        isLoading: true
      };
    }

    case "CATEGORIES_RECEIVE": {
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    }

    case "CATEGORY_ADD_SUCCESS": {
      console.log("CATEGORY_ADD_SUCCESS payload", action.payload);
      return state;
      /*
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
      */
    }

    case "CATEGORY_DELETE": {
      console.log("cat state", state);
      const idx = items.findIndex(item => item.key === action.payload);

      const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];

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

export default categories;
