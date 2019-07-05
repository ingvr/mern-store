import express from "express";

import { categoryController, productController } from "../controllers";

import { CATEGORY_API_URL, PRODUCT_API_URL } from "../config";

const router = express.Router();

router.get(`${CATEGORY_API_URL}/get/all`, categoryController.getAllCategories);
router.get(`${CATEGORY_API_URL}/get/:id`, categoryController.getCategory);
router.post(`${CATEGORY_API_URL}/add`, categoryController.createCategory);
router.delete(
  `${CATEGORY_API_URL}/delete/:key`,
  categoryController.deleteCategory
);

router.get(`${PRODUCT_API_URL}/get/all`, productController.getAllProducts);

router.post(`${PRODUCT_API_URL}/add`, productController.createProduct);

router.delete(
  `${PRODUCT_API_URL}/delete/:key`,
  productController.deleteProduct
);

router.put(`${PRODUCT_API_URL}/update`, productController.updateProduct);

router.put(
  `${PRODUCT_API_URL}/category-reset/:key`,
  productController.resetCategoryProduct
);

export default router;
