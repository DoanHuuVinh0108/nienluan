import productController from "../controllers/product.controller";
import express from "express";

let router = express.Router();

let initProductRoutes = (app) => {
    router.get('/product/get-all',productController.getAllProducts);
    router.get('/product/get/:id',productController.getProductById);
    router.post('/product/create',productController.postProduct);
    router.put('/product/update/:id',productController.putProduct);
    router.delete('/product/delete/:id',productController.deleteProductById);
    router.get('/product/get-list/:offset',productController.fetchListProducts);
    return app.use("/api/v1", router);
}

export default initProductRoutes;