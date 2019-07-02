import express from "express";
import bodyParser from "body-parser";

import { categories, products } from "./db";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/v1/categories", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    data: categories
  });
});

app.get("/api/v1/products", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "products retrieved successfully",
    data: products
  });
});

app.post("/api/v1/category/add", (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      success: "false",
      message: "title is required"
    });
  } else if (!req.body.active) {
    return res.status(400).send({
      success: "false",
      message: "active is required"
    });
  }
  const category = {
    key: categories.length + 1,
    title: req.body.title,
    active: req.body.active
  };
  db.push(category);
  return res.status(201).send({
    success: "true",
    message: "category added successfully",
    todo
  });
});

app.get("/api/v1/categories/:id", (req, res) => {
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
