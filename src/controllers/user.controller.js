import userService from '../services/users.service.js';

let postCreateUser = async (req, res) => {
    try {
        let data = req.body;
        // console.log('>>> data', data);
        let user = await userService.createUser(data);
        return res.status(201).json(
            { 
                message: 'Create user success',
                data: user,
                errcode:0,
            }
        );
    } catch (e) {
        return res.status(500).json(
            { 
                message: 'Create user fail',
                errcode:1,
                error: e.message,
            }
        );
    }
};

let getAllUsers = async (req, res) => {
    try {
        console.log('>>> run into getAllUsers');
        let users = await userService.getAllUsers();
        console.log('>>> users', users);
        return res.status(200).json({
            message: 'Get all users success',
            data: users,
            errcode:0,
        
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Get all users fail',
            errcode:1,
            error: e.message,
        });
    }
};

let deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        console.log('>>> id', id);
        let user = await userService.deleteUserById(id);
        if (user === 0) {
            return res.status(404).json({
                message: 'User not found',
                errcode:1,
            
            });
        }
        return res.status(200).json({
            message: 'Delete user success',
            errcode:0,
        });
    } catch (e) {
        return res.status(500).json(
            {
                message: 'Delete user fail',
                errcode:1,
                error: e.message,
            }
        );
    }
};

let putUpdateUser = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;
        let user = await userService.updateUser(data, id);
        console.log('>>> user', user);
        if (user[0] === 0) {
            return res.status(404).json({
                message: 'User not found',
                errcode:1,
            });
        }
        return res.status(200).json({
            message: 'Update user success',
            errcode:0,
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Update user fail',
            errcode:1,
            error: e.message,
        });
    }
};

let getUserById = async (req, res) => {
    try {
        let id = req.params.id;
        let user = await userService.getUserById(id);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                errcode:1,
            
            });
        }
        return res.status(200).json({
            message: 'Get user by id success',
            data: user,
            errcode:0,
        
        });
    } catch (e) {
        return res.status(500).json({
            message: 'Get user by id fail',
            errcode:1,
            error: e.message,
        
        });
    }

}

export default {
    postCreateUser,
    getAllUsers,
    deleteUser,
    putUpdateUser,
    getUserById,
};