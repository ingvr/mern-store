const initialState = {
  loginError: false,
  isLoggedIn: undefined,
  serverAvailable: true
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "USER_GET_INFO_SUCCESS": {
      return {
        ...state,
        isLoggedIn: true
      };
    }
    case "USER_GET_INFO_FAILED": {
      return {
        ...state,
        serverAvailable: false
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
    case "USER_LOGOUT": {
      return {
        ...state,
        isLoggedIn: false
      };
    }
    default: {
      return state;
    }
  }
};

export default users;
