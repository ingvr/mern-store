import express from "express";
import { categories, products } from "../db";

import { categoryController, productController } from "../controllers";

const router = express.Router();

router.get("/api/v1/category/get/all", categoryController.getAllCategories);
router.get("/api/v1/category/get/:id", categoryController.getCategory);
router.post("/api/v1/category/add", categoryController.createCategory);
router.delete(
  "/api/v1/category/delete/:key",
  categoryController.deleteCategory
);

router.get("/api/v1/product/get/all", productController.getAllProducts);

router.post("/api/v1/product/add", productController.createProduct);

router.delete("/api/v1/product/delete/:key", productController.deleteProduct);

router.put("/api/v1/product/update", productController.updateProduct);

router.put(
  "/api/v1/product/category-reset/:key",
  productController.resetCategoryProduct
);

export default router;
