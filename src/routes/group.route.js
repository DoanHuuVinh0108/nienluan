import groupController from '../controllers/group.controller';
import express from 'express';
import auth from "../middleware/authJwt"

let router = express.Router();

let initGroupRoutes = (app) => {
    router.post('/group/create',auth.verifyToken,auth.isAdmin ,groupController.postCreateGroup);
    router.get('/group/get-all', groupController.getAllGroups);
    router.get('/group/get/:id', groupController.getGroupById);
    router.delete('/group/delete/:id',auth.verifyToken,auth.isAdmin ,groupController.deleteGroupById);
    router.put('/group/update/:id',auth.verifyToken,auth.isAdmin,groupController.putUpdateGroup);
    return app.use("/api/v1", router);
}

export default initGroupRoutes;