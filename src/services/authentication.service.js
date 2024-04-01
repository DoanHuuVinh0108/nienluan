import db from '../models/index';
import bcrypt from 'bcryptjs';
import usersService from './users.service';



let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {

            let User = await db.Users.findOne({
                where: { Email: email },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'Groupid']
                },
                raw: true
            });

            if (User) {
                // console.log('>>> User', User);

                let checkPassWord = await bcrypt.compare(password, User.Matkhau);
                // console.log('>>> checkPassWord', checkPassWord);

                if (checkPassWord) {
                    resolve({
                        Hoten: User.Hoten,
                        Email: User.Email,
                        Sodienthoai: User.Sodienthoai,
                        Diachi: User.Diachi,
                    })
                } else {
                    reject('Wrong Email or Password')
                }
            } else {
                reject('Wrong Email or Password')

            }

        } catch (e) {
            reject(e);
        }
    });
};

let handleRegister = (data) => {
    return new Promise(async (resolve, reject) => {

        try {
            let hashPasswordFromBcrypt = await usersService.hashPassword(data.Matkhau);
            let checkMail = await usersService.checkUserEmail(data.Email);
            if (checkMail === true) {
                throw new Error('Email da ton tai');
            }
            await db.Users.create({
                Hoten: data.Hoten,
                Email: data.Email,
                Matkhau: hashPasswordFromBcrypt,
                Diachi: data.Diachi,
                Sodienthoai: data.Sodienthoai,
                Groupid: 1,
            });
            resolve(data);
        } catch (e) {
            console.log('>>> e', e);
            reject(e);
        }

    });
}


export default {
    handleUserLogin,
    handleRegister,
}