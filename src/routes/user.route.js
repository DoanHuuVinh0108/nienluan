import userController from '../controllers/user.controller.js';
import express from 'express';

let router = express.Router();

let initUserRoutes = (app) => {
    router.post('/user/create', userController.postCreateUser);
    router.get('/user/get-all', userController.getAllUsers);
    router.delete('/user/delete/:id', userController.deleteUser);
    router.put('/user/update/:id', userController.putUpdateUser);
    return app.use("/api/v1", router);
}

export default initUserRoutes;