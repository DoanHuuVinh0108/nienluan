import categoryController from '../controllers/category.controller';
import express from 'express';
import auth from "../middleware/authJwt"

let router = express.Router();

let initCategoryRoutes = (app) => {
    router.get('/category/get-all', categoryController.getAllCategories);
    router.get('/category/get/:id', categoryController.getCategoryById);
    router.post('/category/create', auth.verifyToken,auth.isAdmin,categoryController.createCategory);
    router.put('/category/update',auth.verifyToken,auth.isAdmin ,categoryController.updateCategory);
    router.delete('/category/delete/:id',auth.verifyToken,auth.isAdmin ,categoryController.deleteCategory);
    return app.use("/api/v1", router);
}

export default initCategoryRoutes;