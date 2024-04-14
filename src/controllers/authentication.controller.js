import authenService from '../services/authentication.service';
import jwt from 'jsonwebtoken';
import validate from '../services/validate.service';
require('dotenv').config();

let postLogin = async (req, res) => {
    console.log('>>> req.body', req.body);
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
                message: 'Login success',
                data: userLogin,
                accessToken: token
            });
        }


    } catch (e) {
        return res.status(500).json({
            message: e ?? e.message,
            errcode:1,
        })

    }
};

let postRegister = async (req, res) => {
    try{
        let data = req.body;
        console.log('>>> data', data);
        if (!data.Email || !data.Matkhau || !data.Hoten || !data.Sodienthoai || !data.Diachi) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing required fields'
            });
        }

        let checkEmail = validate.validateEmail(data.Email);
        if (!checkEmail) {
            return res.status(500).json({
                errCode: 1,
                message: 'Email is invalid'
            });
        }

        let checkPassword = validate.validatePassword(data.Matkhau);
        if (!checkPassword) {
            return res.status(500).json({
                errCode: 1,
                message: 'Password is invalid'
            });
        }

        let checkPhone = validate.validatePhone(data.Sodienthoai);
        if (!checkPhone) {
            return res.status(500).json({
                errCode: 1,
                message: 'Phone is invalid'
            });
        }

        let user = await authenService.handleRegister(data);
        if (user) {
            return res.status(200).json({
                errCode: 0,
                message: 'Register success',
                data: user
            });
        }
        
    }
    catch(error){
        return res.status(500).json({
            message: 'Unauthentiacted user',
            error: error.message ?? error,
            errcode:1,
        })
    }
};


export default {
    postLogin,
    postRegister
};