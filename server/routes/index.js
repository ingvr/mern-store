import express from "express";

import {
  categoryController,
  productController,
  userController
} from "../controllers";

import { CATEGORY_API_URL, PRODUCT_API_URL, USER_API_URL } from "../config";

const router = express.Router();

// categories
router.get(
  `${CATEGORY_API_URL}/get/all`,
  userController.checkToken,
  categoryController.getAllCategories
);
router.get(
  `${CATEGORY_API_URL}/get/:id`,
  userController.checkToken,
  categoryController.getCategory
);
router.post(
  `${CATEGORY_API_URL}/add`,
  userController.checkToken,
  categoryController.createCategory
);
router.delete(
  `${CATEGORY_API_URL}/delete/:key`,
  userController.checkToken,
  categoryController.deleteCategory
);

// products
router.get(
  `${PRODUCT_API_URL}/get/by-category/:categoryId/:page`,
  userController.checkToken,
  productController.getProductsByCategory
);
router.post(
  `${PRODUCT_API_URL}/add`,
  userController.checkToken,
  productController.createProduct
);
router.delete(
  `${PRODUCT_API_URL}/delete/:key`,
  userController.checkToken,
  productController.deleteProduct
);
router.put(`${PRODUCT_API_URL}/update`, productController.updateProduct);

// users
router.post(`${USER_API_URL}/register`, userController.register);
router.post(`${USER_API_URL}/login`, userController.login);
router.post(`${USER_API_URL}/info`, userController.info);

export default router;
