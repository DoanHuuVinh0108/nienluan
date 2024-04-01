import db from '../models/index.js';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let createUser = (data,Group) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashPassword(data.Matkhau);
            let checkMail = await checkUserEmail(data.Email);
            if (checkMail === true) {
                throw new Error('Email da ton tai');
            }
            await db.Users.create({
                Hoten: data.Hoten,
                Email: data.Email,
                Matkhau: hashPasswordFromBcrypt,
                Diachi: data.Diachi,
                Sodienthoai: data.Sodienthoai,
                Groupid: Group ? Group : data.Groupid
            });
            resolve(data);
        } catch (e) {
            console.log('>>> e', e);
            reject(e);
        }
    });
};

let hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        try {
            let hashPassword = bcrypt.hashSync(password, salt);
            // console.log('>>> hashPassword', hashPassword);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { Email: email }
            });
            if (user) {
                resolve(true); // Email da ton tai
            } else {
                resolve(false); // Email chua ton tai
            }
        } catch (e) {
            reject(e);
        }
    });
}


let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.Users.findAll(
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
            let user = await db.Users.destroy({
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
            let user = await db.Users.update(
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
            console.log('>>> user', user); 
            [user] =user; 
            resolve(user);
        } catch (e) {
            reject(e);
        }
    });
}

let getUserById = (Userid) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { Userid: Userid },
                raw: true,
                attributes: {
                    exclude: ['Matkhau', 'createdAt', 'updatedAt','Groupid']
                },
                include: [
                    {
                        model: db.Groups,
                        as: 'Group',
                        attributes: ['Tennhom']
                    }
                ],
            });
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
    checkUserEmail,
    hashPassword,
    getUserById,
};