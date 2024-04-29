import categoryController from '../controllers/category.controller';
import express from 'express';

let router = express.Router();

let initCategoryRoutes = (app) => {
    router.get('/category/get-all', categoryController.getAllCategories);
    router.get('/category/get/:id', categoryController.getCategoryById);
    router.post('/category/create', categoryController.createCategory);
    router.put('/category/update', categoryController.updateCategory);
    router.delete('/category/delete/:id', categoryController.deleteCategory);
    return app.use("/api/v1", router);
}

export default initCategoryRoutes;