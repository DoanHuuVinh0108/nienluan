import authenController from '../controllers/authentication.controller.js';
import express from 'express';

let router = express.Router();

let initUserRoutes = (app) => {
    router.post('/login', authenController.postLogin);
    return app.use("/api/v1", router);
}

export default initUserRoutes;