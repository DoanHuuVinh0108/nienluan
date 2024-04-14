require('dotenv').config();
import jwt from "jsonwebtoken";

let verifyToken =async (req, res, next) => {
    console.log('>>> req.headers', req.headers);
    const authorizationHeader = req.headers.authorization;
    let result;
    if (authorizationHeader) {
        const token = req.headers.authorization.split(' ')[1]; // jwt <token>
        try {
            // verify makes sure that the token hasn't expired and has been issued by us
            result = await jwt.verify(token, process.env.JWT_SECRET);

            // Let's pass back the decoded token to the request object
            req.decoded = result;
            // We call next to pass execution to the subsequent middleware
            next();
        } catch (err) {
            // Throw an error just in case anything goes wrong with verification
            console.log(err);
            return res.status(500).json({
                message: 'Something wrong with verification'
            })

        }
    }else{
        return res.status(404).json({
            message: 'Cookie not found'
        })

    }
}

let verifyRefreshToken = async refreshToken => {
//   let privateKey = process.env.REFRESH_TOKEN_SECRET

//   let userToken = await UserToken.findOne({ refresh_token: refreshToken })

//   if (!userToken) {
//     return { error: true, message: "Refresh token không hợp lệ." }
//   }
//   try {
//     let tokenDetails = jwt.verify(refreshToken, privateKey)
//     return {
//       tokenDetails,
//       error: false,
//       message: "Refresh token hợp lệ"
//     }
//   } catch (error) {
//     return { error: true, message: "Refresh token không hợp lệ" }
//   }
}


export default {
    verifyToken,verifyRefreshToken
}