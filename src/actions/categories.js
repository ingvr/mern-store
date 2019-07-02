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
  return function(dispatch) {
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
  return {
    type: "CATEGORY_ADD",
    payload: newCategory
  };
};

export const categoryDelete = categorytId => {
  return {
    type: "CATEGORY_DELETE",
    payload: categorytId
  };
};
