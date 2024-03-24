import authenService from '../services/authentication.service';
import jwt from 'jsonwebtoken';
require('dotenv').config();

let postLogin = async (req, res) => {
    try {
        let data = req.body;
        if (!data.email || !data.password) {
            return res.status(500).json({
                errCode: 1,
                message: 'Email & Password is required'
            });
        }

        let userLogin = await authenService.handleUserLogin(data.email, data.password);
        // console.log('>>> userLogin', userLogin);
        if (userLogin) {
            console.log('>>> userLogin', userLogin);
            let payload = {
                user: userLogin
            };

            let options = {
                expiresIn: process.env.JWT_EXPIRE
            };

            let secret = process.env.JWT_SECRET;

            let token = jwt.sign(payload, secret, options);

            console.log('>>> token', token);
            return res.status(200).json({
                errCode: 0,
                message: 'OK',
                data: userLogin.user,
                token: token
            });
        }


    } catch (error) {
        return res.status(500).json({
            message: 'Unauthentiacted user'
        })

    }
};

export default {
    postLogin
};