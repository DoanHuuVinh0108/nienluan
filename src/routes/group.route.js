import groupController from '../controllers/group.controller';
import express from 'express';
import auth from "../middleware/authJwt"

let router = express.Router();

let initGroupRoutes = (app) => {
    router.post('/group/create', groupController.postCreateGroup);
    router.get('/group/get-all', groupController.getAllGroups);
    router.delete('/group/delete/:id', groupController.deleteGroupById);
    router.put('/group/update/:id',groupController.putUpdateGroup);
    return app.use("/api/v1", router);
}

export default initGroupRoutes;