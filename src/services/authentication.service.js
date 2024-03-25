import db from '../models/index';
import bcrypt from 'bcryptjs';
import userService from './users.service';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {

            let User = await db.User.findOne({
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

                    reject(false)
                }
            } else {

                console.log('>>> Email not found');
                reject(false)
            }

        } catch (e) {
            reject(e);
        }
    });
};

let handleRegister = (data) =>{
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.password || !data.name || !data.phone || !data.address) {
                reject('Missing required fields');
            } else {
               
            }
        } catch (e) {
            reject(e);
        }
    });
}

export default {
    handleUserLogin,
}