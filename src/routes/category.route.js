import categoryController from '../controllers/category.controller';
import express from 'express';

let router = express.Router();

let initCategoryRoutes = (app) => {
    router.get('/category/get-all', categoryController.getAllCategories);
    return app.use("/api/v1", router);
}

export default initCategoryRoutes;