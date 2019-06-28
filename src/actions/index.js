export const categoriesLoad = () => {
  return {
    type: "CATEGORIES_LOADED"
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

export const productsLoad = newProducts => {
  return {
    type: "PRODUCTS_LOADED",
    payload: newProducts
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
