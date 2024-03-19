import userService from '../services/users.service.js';

let postCreateUser = async (req, res) => {
    try {
        let data = req.body;
        console.log('>>> data', data);
        await userService.createUser(data);
        return res.status(200).json({ message: 'Create user success' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

let getAllUsers = async (req, res) => {
    try {
        let users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

let deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        console.log('>>> id', id);
        let user = await userService.deleteUserById(id);
        if (user === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Delete user success' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

let putUpdateUser = async (req, res) => {
    try {
        let data = req.body;
        let id = req.params.id;
        let user = await userService.updateUser(data, id);
        console.log('>>> user', user);
        if (user[0] === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Update user success' });
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
};

export default {
    postCreateUser,
    getAllUsers,
    deleteUser,
    putUpdateUser,
};