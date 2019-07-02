import Axios from "axios";

export const categoriesRequest = payload => {
  return {
    type: "CATEGORIES_REQUEST",
    payload
  };
};

export const categoriesReceive = payload => {
  return {
    type: "CATEGORIES_RECEIVE",
    payload,
    receivedAt: Date.now()
  };
};

export const fetchCategories = payload => {
  return dispatch => {
    dispatch(categoriesRequest(payload));

    const apiUrl = "/api/v1/categories/";
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(categoriesReceive(response.data.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const categoryAdd = newCategory => {
  console.log(newCategory);
  return dispatch => {
    const apiUrl = "/api/v1/category/add";
    return Axios.post(apiUrl, { title: newCategory, active: false })
      .then(response => {
        dispatch(categoryAddSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const categoryAddSuccess = data => {
  return {
    type: "CATEGORY_ADD_SUCCESS",
    payload: data
  };
};

export const categoryDelete = categorytId => {
  return {
    type: "CATEGORY_DELETE",
    payload: categorytId
  };
};
