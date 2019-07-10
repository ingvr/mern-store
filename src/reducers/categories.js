const initialState = {
  items: [],
  isLoading: false
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_REQUESTED": {
      return {
        ...state,
        isLoading: true
      };
    }

    case "CATEGORIES_RECEIVED": {
      const items = action.payload.map(({ title, _id }) => ({
        title,
        _id,
        active: false
      }));
      return {
        items,
        isLoading: false
      };
    }

    case "CATEGORY_ADD_SUCCESS": {
      return {
        ...state,
        items: action.payload
      };
    }

    case "CATEGORY_DELETE_SUCCESS": {
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

export default categories;
