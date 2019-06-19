const categoriesLoad = newCategories => {
  return {
    type: "CATEGORIES_LOADED",
    payload: newCategories
  };
};

const productsLoad = newProducts => {
  return {
    type: "PRODUCTS_LOADED",
    payload: newProducts
  };
};

export { categoriesLoad };
