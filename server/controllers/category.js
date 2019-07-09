import {categories} from '../db';

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
          message: 'error in getting categories',
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
          message: 'error saving category',
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

  deleteCategory(req, res) {
    const key = parseInt(req.params.key, 10);

    categories.items.map((category, index) => {
      if (category.key === key) {
        categories.items.splice(index, 1);
        return res.status(200).send({
          success: 'true',
          message: 'Category deleted successfuly',
          categories,
        });
      }
      return res.status(404).send({
        success: 'false',
        message: 'Category id not found',
      });
    });
  }
}

const categoryController = new CategoriesController();
export default categoryController;
