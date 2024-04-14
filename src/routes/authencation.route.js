import authenController from '../controllers/authentication.controller.js';
import express from 'express';

let router = express.Router();

let initUserRoutes = (app) => {
    router.post('/signin', authenController.postLogin);
    router.post('/signup', authenController.postRegister);
    return app.use("/api/v1/auth", router);
}

export default initUserRoutes;