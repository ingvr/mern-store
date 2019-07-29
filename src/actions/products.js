import Axios from "axios";

import { PRODUCT_API_URL } from "../constants";

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

export const fetchProducts = ({
  categoryId = "ALL_CATEGORIES",
  page = 1
} = {}) => {
  return dispatch => {
    dispatch(productsRequested({ categoryId, page }));
    const apiUrl = `${PRODUCT_API_URL}/get/by-category/${categoryId}/${page}`;
    return Axios.get(apiUrl)
      .then(({ data: { products, pages } }) => {
        dispatch(productsReceived({ products, pages }));
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        console.log("Product filter dispatch failed: ", error);
      });
  };
};

export const productAdd = newProduct => {
  return dispatch => {
    const apiUrl = `${PRODUCT_API_URL}/add`;
    return Axios.post(apiUrl, newProduct)
      .then(response => {
        dispatch(productAddSuccess(response.data.products));
      })
      .catch(error => {
        console.log("Product add dispatch failed: ", error);
      });
  };
};

export const productAddSuccess = payload => {
  return {
    type: "PRODUCT_ADD_SUCCESS",
    payload
  };
};

export const productDelete = productId => {
  return dispatch => {
    const apiUrl = `${PRODUCT_API_URL}/delete`;
    return Axios.delete(`${apiUrl}/${productId}`)
      .then(response => {
        dispatch(productDeleteSuccess(response.data.products));
      })
      .catch(error => {
        console.log("Product delete dispatch failed: ", error);
      });
  };
};

export const productDeleteSuccess = payload => {
  return {
    type: "PRODUCT_DELETE_SUCCESS",
    payload
  };
};

export const productEdit = product => {
  return dispatch => {
    const apiUrl = `${PRODUCT_API_URL}/update`;
    return Axios.put(apiUrl, product)
      .then(response => {
        dispatch(productEditSuccess(response.data.products));
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        console.log("Product edit dispatch failed: ", error);
      });
  };
};

export const productEditSuccess = payload => {
  return {
    type: "PRODUCT_EDIT_SUCCESS",
    payload
  };
};

export const productsResetCategory = payload => {
  return {
    type: "PRODUCTS_RESET_CATEGORY",
    payload
  };
};

export const productsChangePage = payload => {
  return {
    type: "PRODUCTS_CHANGE_PAGE",
    payload
  };
};
