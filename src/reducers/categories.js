const initialState = {
  items: [],
  nextCategoryId: 0,
  isLoading: false
};

const categories = (state = initialState, action) => {
  const { items } = state;

  switch (action.type) {
    case "CATEGORIES_REQUESTED": {
      return {
        ...state,
        isLoading: true
      };
    }

    case "CATEGORIES_RECEIVED": {
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
    }

    case "CATEGORY_ADD_SUCCESS": {
      return {
        ...action.payload
      };
    }

    case "CATEGORY_DELETE_SUCCESS": {
      console.log("cat delete success", action.payload);
      return {
        ...action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export default categories;
