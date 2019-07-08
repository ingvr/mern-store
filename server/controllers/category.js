import { categories } from "../db";

const Category = require("../models/category");

const getAllCategoriesFromDB = () => {
  return Category.find().exec();
};

class CategoriesController {
  getAllCategories(req, res) {
    getAllCategoriesFromDB()
      .then(data => {
        res.status(200).send({
          success: "true",
          message: "categories retrieved successfully",
          data
        });
      })
      .catch(err => {
        res.status(RESPONSE_CODES.NOT_FOUND).send({
          success: "false",
          message: "error in getting categories",
          errors: err
        });
      });
  }

  getCategory(req, res) {
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
  }

  createCategory(req, res) {
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
  }

  deleteCategory(req, res) {
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
  }
}

const categoryController = new CategoriesController();
export default categoryController;
