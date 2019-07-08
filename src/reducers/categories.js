const initialState = {
  items: [],
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
      const items = action.payload.map(({ title, _id }) => ({
        title,
        key: _id,
        active: false
      }));
      return {
        items,
        isLoading: false
      };
    }

    case "CATEGORY_ADD_SUCCESS": {
      return {
        ...action.payload
      };
    }

    case "CATEGORY_DELETE_SUCCESS": {
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
