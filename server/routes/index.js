import express from "express";

import {
  categoryController,
  productController,
  userController
} from "../controllers";

import { CATEGORY_API_URL, PRODUCT_API_URL, USER_API_URL } from "../config";

const router = express.Router();

// categories
router.get(`${CATEGORY_API_URL}/get/all`, categoryController.getAllCategories);
router.get(`${CATEGORY_API_URL}/get/:id`, categoryController.getCategory);
router.post(`${CATEGORY_API_URL}/add`, categoryController.createCategory);
router.delete(
  `${CATEGORY_API_URL}/delete/:key`,
  categoryController.deleteCategory
);

// products
router.get(`${PRODUCT_API_URL}/get/all`, productController.getAllProducts);
router.get(
  `${PRODUCT_API_URL}/get/by-category/:categoryId`,
  productController.getProductsByCategory
);
router.post(`${PRODUCT_API_URL}/add`, productController.createProduct);

router.delete(
  `${PRODUCT_API_URL}/delete/:key`,
  productController.deleteProduct
);

router.put(`${PRODUCT_API_URL}/update`, productController.updateProduct);

// users
router.post(`${USER_API_URL}/register`, userController.register);
router.post(`${USER_API_URL}/login`, userController.login);
router.post(`${USER_API_URL}/info`, userController.info);

export default router;
