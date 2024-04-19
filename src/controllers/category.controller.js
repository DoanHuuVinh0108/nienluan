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

export default {
    getAllCategories
}