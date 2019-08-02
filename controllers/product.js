import Product from "../models/product";
import { PRODUCTS_PER_PAGE } from "../config";

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

class ProductsController {
  getProductsByCategory({ params: { categoryId, page } }, res) {
    const filter = categoryId === "ALL_CATEGORIES" ? {} : { categoryId };
    const limit = parseInt(PRODUCTS_PER_PAGE, 10);
    const skip = limit * (page - 1);
    let pages = 1;

    Product.count(filter)
      .then(length => {
        pages = Math.ceil(length / limit);
      })
      .then(() => {
        Product.find(filter, null, { limit, skip }).then(products => {
          res.status(200).send({
            success: "true",
            message: "products by category retrived successfully",
            products,
            pages
          });
        });
      })
      .catch(error => {
        res.status(404).send({
          success: "false",
          message: "error in getting products by category",
          error
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

    const product = new Product({
      name,
      rowPrice,
      fullPrice,
      categoryId
    });

    product.save(err => {
      if (err) {
        return res.status(400).send({
          success: "false",
          message: "error saving product",
          error: err
        });
      }

      return res.status(201).send({
        success: "true",
        message: "product added successfully"
      });
    });
  }

  deleteProduct({ params: { key } }, res) {
    Product.findByIdAndRemove(key, err => {
      if (err) {
        return res.status(404).send({
          success: "false",
          message: "Product id not found"
        });
      }
      return res.status(201).send({
        success: "true",
        message: "Product deleted successfuly"
      });
    });
  }

  updateProduct(req, res) {
    if (_productDataValidation(req.body).valid === false) {
      return res.status(400).send({
        success: "false",
        message: _productDataValidation(req.body).message
      });
    }

    Product.findByIdAndUpdate(
      req.body._id,
      { $set: req.body },
      (err, product) => {
        if (err) {
          return res.status(400).send({
            success: "false",
            message: "product id not found"
          });
        }
        return res.status(201).send({
          success: "true",
          message: "product update successfuly"
        });
      }
    );
  }
}

const productController = new ProductsController();
export default productController;
