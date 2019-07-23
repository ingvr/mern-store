const initialState = {
  userInfo: {
    name: false,
    email: false
  },
  loginError: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "USER_GET_INFO_SUCCESS": {
      return {
        ...state,
        userInfo: action.payload
      };
    }
    case "USER_LOGIN_FAILED": {
      return {
        ...state,
        loginError: action.payload
      };
    }
    case "USER_LOGIN_RESET_ERROR": {
      return {
        ...state,
        loginError: false
      };
    }
    default: {
      return state;
    }
  }
};

export default users;
