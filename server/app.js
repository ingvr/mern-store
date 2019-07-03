import express from "express";
import bodyParser from "body-parser";

import { categories, products } from "./db";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/v1/category/get/all", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    data: categories
  });
});

app.get("/api/v1/product/get/all", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "products retrieved successfully",
    data: products
  });
});

app.put("/api/v1/product/category-reset/:key", (req, res) => {
  const key = parseInt(req.params.key, 10);

  return res.status(201).send({
    success: "true",
    message: "products categoryId reset successfully",
    data: products.items.map(item => ({
      ...item,
      categoryId: item.categoryId === key ? 0 : item.categoryId
    }))
  });
});

app.post("/api/v1/category/add", (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      success: "false",
      message: "title is required"
    });
  }

  const { nextCategoryId } = categories;

  const newCategory = {
    key: nextCategoryId,
    title: req.body.title,
    active: false
  };

  categories.items.push(newCategory);
  categories["nextCategoryId"] = nextCategoryId + 1;

  return res.status(201).send({
    success: "true",
    message: "category added successfully",
    categories
  });
});

app.delete("/api/v1/category/delete/:key", (req, res) => {
  const key = parseInt(req.params.key, 10);

  categories.items.map((category, index) => {
    if (category.key === key) {
      categories.items.splice(index, 1);
      return res.status(200).send({
        success: "true",
        message: "Category deleted successfuly",
        categories
      });
    }
  });

  return res.status(404).send({
    success: "false",
    message: "Category not found"
  });
});

app.get("/api/v1/category/get/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  categories.items.map(category => {
    if (category.key === id) {
      return res.status(200).send({
        success: "true",
        message: "category by id retrieved successfully",
        category
      });
    }
  });
  return res.status(404).send({
    success: "false",
    message: "category id does not exist"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
