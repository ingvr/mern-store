import Axios from "axios";

import { USER_API_URL } from "../constants";

export const userGetInfo = token => {
  return dispatch => {
    const apiUrl = `${USER_API_URL}/info`;
    return Axios.post(apiUrl, { token })
      .then(response => {
        const { name, email } = response.data.user;
        dispatch(userGetInfoSuccess({ name, email }));
      })
      .catch(error => {
        console.log("Error getting user info: ", error);
      });
  };
};

export const userGetInfoSuccess = payload => {
  return {
    type: "USER_GET_INFO_SUCCESS",
    payload
  };
};

export const userLogin = userInfo => {
  return dispatch => {
    const apiUrl = `${USER_API_URL}/login`;
    return Axios.post(apiUrl, userInfo)
      .then(response => {
        dispatch(userLoginSuccess(response.data.token));
      })
      .catch(error => {
        const errorMessage = error.response.data.errorMessage
          ? error.response.data.errorMessage
          : "Ошибка получения данных с сервера";
        dispatch(userLoginFailed(errorMessage));
      });
  };
};

export const userLoginSuccess = token => {
  localStorage.setItem("token", token);
  return dispatch => {
    const userToken = token.split(" ");
    dispatch(userGetInfo(userToken[1]));
  };
};

export const userLoginFailed = payload => {
  return {
    type: "USER_LOGIN_FAILED",
    payload
  };
};

export const userLoginResetError = () => {
  return {
    type: "USER_LOGIN_RESET_ERROR"
  };
};

export const userLogout = () => {
  localStorage.removeItem("token");
  return {
    type: "USER_LOGOUT"
  };
};
