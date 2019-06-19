const categoriesLoad = newCategories => {
  return {
    type: "CATEGORIES_LOADED",
    payload: newCategories
  };
};

export { categoriesLoad };
