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
                console.log('>>> User', User);
                // let checkPassWord =  bcrypt.compareSync(password, User.Matkhau);
                // let hashPassword= await userService.hashPassword(password);
                let checkPassWord = await bcrypt.compare(password, User.Matkhau);
                console.log('>>> checkPassWord', checkPassWord);

                if (checkPassWord) {
                    // resolve({
                    //     errCode: 0,
                    //     errMessage: 'OK',
                    //     user: findUser
                    // })
                    resolve(User)
                } else {
                    // reject({
                    //     errCode: 3,
                    //     errMessage: 'Email and/or password is incorrect'
                    // })
                    reject(false)
                }
            } else {
                // reject({
                //     errCode: 3,
                //     errMessage: 'Email and/or password is incorrect'
                // })
                console.log('>>> Email not found');
                reject(false)
            }

        } catch (e) {
            reject(e);
        }
    });
};

export default {
    handleUserLogin,
}