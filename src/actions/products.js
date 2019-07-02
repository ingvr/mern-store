import Axios from "axios";

export const productsRequest = payload => {
  return {
    type: "PRODUCTS_REQUEST",
    payload
  };
};

export const productsReceive = payload => {
  return {
    type: "PRODUCTS_RECEIVE",
    payload,
    receivedAt: Date.now()
  };
};

export const fetchProducts = payload => {
  return dispatch => {
    dispatch(productsRequest(payload));
    const apiUrl = "/api/v1/products/";

    return Axios.get(apiUrl)
      .then(response => {
        dispatch(productsReceive(response.data.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const productAdd = newProduct => {
  return {
    type: "PRODUCT_ADD",
    payload: newProduct
  };
};

export const productDelete = productId => {
  return {
    type: "PRODUCT_DELETE",
    payload: productId
  };
};

export const productEdit = product => {
  return {
    type: "PRODUCT_EDIT",
    payload: product
  };
};

export const productsFilter = categorytId => {
  return {
    type: "PRODUCTS_FILTER",
    payload: categorytId
  };
};

export const productsResetCategory = category => {
  return {
    type: "PRODUCTS_RESET_CATEGORY",
    payload: category
  };
};
