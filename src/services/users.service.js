import db from '../models/index.js';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashPassword(data.Matkhau);
            await db.User.create({
                Hoten: data.Hoten,
                Email: data.Email,
                Matkhau: hashPasswordFromBcrypt,
                Diachi: data.Diachi,
                Sodienthoai: data.Sodienthoai,
                Groupid: data.Groupid
            });
            resolve('Create user success');
        } catch (e) {
            reject(e);
        }
    });
};

let hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            let hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

let findOneUserByEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { Email: email }
            });
            if (user) {
                resolve(user);
            } else {
                resolve({});
            }
        } catch (e) {
            reject(e);
        }
    });
}

let comparePassword = (password, hashPassword) => {
    return new Promise((resolve, reject) => {
        try {
            let check = bcrypt.compareSync(password, hashPassword);
            resolve(check);
        } catch (e) {
            reject(e);
        }
    });
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll(
                {
                    attributes: {
                        exclude: ['Matkhau', 'createdAt', 'updatedAt','Groupid']
                    },
                    raw: true
                }
            );
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
}

let deleteUserById = (Userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.destroy({
                where: { Userid: Userid}
            });
            // console.log('>>> user', user);
            resolve(user);
        } catch (e) {
            reject(e);
        }
    });
}

let updateUser = (data,Userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.update(
                {
                    Hoten: data.Hoten,
                    Email: data.Email,
                    Diachi: data.Diachi,
                    Sodienthoai: data.Sodienthoai,
                    Groupid: data.Groupid
                },
                {
                    where: { Userid: Userid }
                }
            );
            [user] =user; 
            resolve(user);
        } catch (e) {
            reject(e);
        }
    });
}

export default  {
    createUser,
    getAllUsers,
    deleteUserById,
    updateUser,
};