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

export default {
    getAllCategories
}