import express from "express";
import bodyParser from "body-parser";

import { categories, products } from "./db";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Category
app.get("/api/v1/category/get/all", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "categories retrieved successfully",
    data: categories
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

// Product
const productDataValidation = ({ name, rowPrice, fullPrice, categoryId }) => {
  if (!name) {
    return {
      valid: false,
      message: "product name is required"
    };
  }

  if (!rowPrice) {
    return {
      valid: false,
      message: "row price is required"
    };
  }

  if (!fullPrice) {
    return {
      valid: false,
      message: "full price is required"
    };
  }

  if (!categoryId) {
    return {
      valid: false,
      message: "category id is required"
    };
  }

  return { valid: true };
};

app.get("/api/v1/product/get/all", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "products retrieved successfully",
    data: products
  });
});

app.post("/api/v1/product/add", (req, res) => {
  const { name, rowPrice, fullPrice, categoryId } = req.body;

  if (productDataValidation(req.body).valid === false) {
    return res.status(400).send({
      success: "false",
      message: productDataValidation(req.body).message
    });
  }

  const { nextProductId } = products;

  const newProduct = {
    key: nextProductId,
    name,
    rowPrice,
    fullPrice,
    categoryId
  };

  products.items.push(newProduct);
  products["nextProductId"] = nextProductId + 1;

  return res.status(201).send({
    success: "true",
    message: "product added successfully",
    products
  });
});

app.delete("/api/v1/product/delete/:key", (req, res) => {
  const key = parseInt(req.params.key, 10);

  products.items.map((product, index) => {
    if (product.key === key) {
      products.items.splice(index, 1);
      return res.status(200).send({
        success: "true",
        message: "Product deleted successfuly",
        products
      });
    }
  });

  return res.status(404).send({
    success: "false",
    message: "Product not found"
  });
});

app.put("/api/v1/product/update", (req, res) => {
  const { key, name, rowPrice, fullPrice, categoryId } = req.body;
  let productFound;
  let productIndex;

  products.items.map((product, index) => {
    if (product.key === key) {
      productFound = product;
      productIndex = index;
    }
  });

  if (productDataValidation(req.body).valid === false) {
    return res.status(400).send({
      success: "false",
      message: productDataValidation(req.body).message
    });
  }

  const updatedProduct = {
    key: productFound.key,
    name,
    rowPrice,
    fullPrice,
    categoryId: parseInt(categoryId, 10)
  };

  products.items.splice(productIndex, 1, updatedProduct);

  return res.status(201).send({
    success: "true",
    message: "product update successfully",
    products
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

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
