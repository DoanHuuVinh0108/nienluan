import categoryService from '../services/category.service.js';

let getAllCategories = async (req, res) => {
  try {
    let categories = await categoryService.getAllCategories();
    if (categories && categories.length > 0) {
      res.status(200).json({
        data: categories,
        errcode: 0,
        message: "Get all categories successful",
      });
    } else {
      res.status(200).json({
        data: [],
        errcode: 0,
        message: "No category found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e,
    });
  }
}

let getCategoryById = async (req, res) => {
  try {
    let id = req.params.id;
    let category = await categoryService.getCategoryById(id);
    if (category) {
      res.status(200).json({
        data: category,
        errcode: 0,
        message: "Get category successful",
      });
    } else {
      res.status(200).json({
        data: {},
        errcode: 0,
        message: "No category found",
      });
    }
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e,
    });
  }

}

let createCategory = async (req, res) => {
  try {
    let data = req.body;
    let newCategory = await categoryService.createCategory(data);
    res.status(200).json({
      data: newCategory,
      errcode: 0,
      message: "Create category successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e,
    });
  }
}

let updateCategory = async (req, res) => {
  try {
    let data = req.body;
    let category = await categoryService.updateCategory(data);
    res.status(200).json({
      data: category,
      errcode: 0,
      message: "Update category successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Internal server error",
      error: e,
    });
  }
}

let deleteCategory = async (req, res) => {
  try {
    let id = req.params.id;
    let category = await categoryService.deleteCategory(id);
    res.status(200).json({
      data: category,
      errcode: 0,
      message: "Delete category successful",
    });
  } catch (e) {
    res.status(500).json({
      errcode: 1,
      message: "Delete category failed",
      error: e,
    });
  }
}

export default {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById
}