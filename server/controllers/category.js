import {Product, getAllProductsFromDB} from './product.js';

const Category = require('../models/category');

const getAllCategoriesFromDB = () => {
  return Category.find();
};

class CategoriesController {
  getAllCategories(req, res) {
    getAllCategoriesFromDB()
      .then(data => {
        res.status(200).send({
          success: 'true',
          message: 'categories retrieved successfully',
          data,
        });
      })
      .catch(err => {
        res.status(404).send({
          success: 'false',
          message: 'Getting categories failed',
          errors: err,
        });
      });
  }

  getCategory(req, res) {
    const id = req.params.id;

    Category.findById(id)
      .then(data => {
        return res.status(200).send({
          success: 'true',
          message: 'category by id retrieved successfully',
          category: data,
        });
      })
      .catch(err => {
        return res.status(404).send({
          success: 'false',
          message: 'category id does not exist',
        });
      });
  }

  createCategory({body: {title}}, res) {
    if (!title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }

    const category = new Category({
      title,
    });

    category.save(err => {
      if (err) {
        return res.status(400).send({
          success: 'false',
          message: 'Category create failed',
          error: err,
        });
      }
      getAllCategoriesFromDB()
        .then(categories => {
          return res.status(201).send({
            success: 'true',
            message: 'category added successfully',
            categories,
          });
        })
        .catch(err => {
          res.status(404).send({
            success: 'false',
            message: 'error in getting categories',
            errors: err,
          });
        });
    });
  }

  deleteCategory({params: {key}}, res) {
    let data = {
      categories: [],
      products: [],
    };
    Product.updateMany({categoryId: key}, {$set: {categoryId: '0'}})
      .then(getAllProductsFromDB)
      .then(products => {
        data.products = products;
        return products;
      })
      .then(Category.findByIdAndRemove(key))
      .then(getAllCategoriesFromDB)
      .then(categories => {
        data.categories = categories;
        return data;
      })
      .then(data => {
        return res.status(201).send({
          success: 'true',
          message: 'Category delete and reset products categoryId failed',
          data,
        });
      })
      .catch(err => {
        return res.status(400).send({
          success: 'false',
          message: 'Category delete and reset products categoryId failed',
        });
      });
  }
}

const categoryController = new CategoriesController();
export default categoryController;
