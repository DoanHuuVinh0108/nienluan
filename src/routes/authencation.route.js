import authenController from '../controllers/authentication.controller.js';
import express from 'express';

let router = express.Router();

let initUserRoutes = (app) => {
    router.post('/login', authenController.postLogin);
    router.post('/register', authenController.postRegister);
    return app.use("/api/v1", router);
}

export default initUserRoutes;