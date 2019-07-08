import { products } from "../db";

const Product = require("../models/product");

const _productDataValidation = ({ name, rowPrice, fullPrice, categoryId }) => {
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

const getAllProductsFromDB = () => {
  return Product.find().exec();
};

class ProductsController {
  getAllProducts(req, res) {
    getAllProductsFromDB().then(data => {
      res
        .status(200)
        .send({
          success: "true",
          message: "products retrieved successfully",
          data
        })
        .catch(err => {
          res.status(RESPONSE_CODES.NOT_FOUND).send({
            success: "false",
            message: "error in getting products",
            errors: err
          });
        });
    });
  }

  createProduct(req, res) {
    const { name, rowPrice, fullPrice, categoryId } = req.body;

    if (_productDataValidation(req.body).valid === false) {
      return res.status(400).send({
        success: "false",
        message: _productDataValidation(req.body).message
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
  }

  deleteProduct(req, res) {
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
  }

  updateProduct(req, res) {
    const { key, name, rowPrice, fullPrice, categoryId } = req.body;
    let productFound;
    let productIndex;

    products.items.map((product, index) => {
      if (product.key === key) {
        productFound = product;
        productIndex = index;
      }
    });

    if (_productDataValidation(req.body).valid === false) {
      return res.status(400).send({
        success: "false",
        message: _productDataValidation(req.body).message
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
  }

  resetCategoryProduct(req, res) {
    const key = parseInt(req.params.key, 10);

    return res.status(201).send({
      success: "true",
      message: "products categoryId reset successfully",
      data: products.items.map(item => ({
        ...item,
        categoryId: item.categoryId === key ? 0 : item.categoryId
      }))
    });
  }
}

const productController = new ProductsController();
export default productController;
