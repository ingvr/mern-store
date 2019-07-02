import Axios from "axios";

export const productsRequested = payload => {
  return {
    type: "PRODUCTS_REQUESTED",
    payload
  };
};

export const productsReceived = payload => {
  return {
    type: "PRODUCTS_RECEIVED",
    payload,
    receivedAt: Date.now()
  };
};

export const fetchProducts = payload => {
  return dispatch => {
    dispatch(productsRequested(payload));
    const apiUrl = "/api/v1/product/get/all";

    return Axios.get(apiUrl)
      .then(response => {
        dispatch(productsReceived(response.data.data));
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
