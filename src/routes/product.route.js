import productController from "../controllers/product.controller";
import express from "express";
import auth from "../middleware/authJwt.js"

let router = express.Router();

let initProductRoutes = (app) => {
    router.get('/product/get-all',productController.getAllProducts);
    router.get('/product/get/:id',productController.getProductById);
    router.post('/product/create',auth.verifyToken,auth.isAdmin,productController.postProduct);
    router.put('/product/update/:id',auth.verifyToken,auth.isAdmin,productController.putProduct);
    router.delete('/product/delete/:id',auth.verifyToken,auth.isAdmin,productController.deleteProductById);
    router.get('/product/get-list/:offset',productController.fetchListProducts);
    router.get('/product/search/:name?',productController.getSearchPoducts);
    router.get('/product/get-name-image/:id',productController.getNameAndImageById);
    router.get('/product/category/:id',productController.getSearchProductByCategory);
    router.post('/product/price',productController.getSearchProductByPrice);
    router.post('/product/category-price',productController.getSearchProductsByCategoryAndPrice);
    router.get('/product/count',productController.getCountProducts);
    return app.use("/api/v1", router);
}

export default initProductRoutes;