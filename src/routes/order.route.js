import orderController from "../controllers/order.controller";
import express from "express";
import auth from "../middleware/authJwt.js"
const router = express.Router();

let initOrderRoutes = (app) => {
    router.post("/order/create",auth.verifyToken ,orderController.createOrder);
    router.get('/order/get/:id',orderController.getOrderByUserId)
    router.get('/order/get-orderid/:orderid',orderController.getOrderById)
    router.get('/order/get-all',orderController.getAllOrders)
    router.put('/order/update/:orderid',auth.verifyToken, auth.isAdmin,orderController.updateOrder)
    return app.use("/api/v1", router);
}

export default initOrderRoutes;

