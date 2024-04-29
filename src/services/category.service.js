import db from "../models/index.js";

let getAllCategories = async () => {
  try {
    let categories = await db.Categories.findAll({
      attributes: ['Categoryid', 'Tenloai'],
      raw: true
    });
    return categories;
  } catch (e) {
    throw new Error(e);
  }
}

let getCategoryById = async (id) => {
  try {
    let category = await db.Categories.findOne({
      where: {
        Categoryid: id
      },
      raw: true
    });
    return category;
  } catch (e) {
    throw new Error(e);
  }

}

let createCategory = async (data) => {
  try {
    let newCategory = await db.Categories.create(data);
    return newCategory;
  } catch (e) {
    throw new Error(e);
  }
}

let updateCategory = async (data) => {
  try {
    let category = await db.Categories.update(data, {
      where: {
        Categoryid: data.Categoryid
      }
    });
    return category;
  } catch (e) {
    throw new Error(e);
  }
}

let deleteCategory = async (id) => {
  try {
    let category = await db.Categories.destroy({
      where: {
        Categoryid: id
      }
    });
    return category;
  } catch (e) {
    throw new Error(e);
  }
}

export default {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById
}