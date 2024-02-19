// Need only 2 functons
import { config } from "dotenv";
config()
import jwt from "jsonwebtoken";
const {sign, verify} = jwt

// First function is the createToken funcion
function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPwd: user.userPwd
    },
    process.env.SECRET_KEY,)
    {
        expiresIn: '1h'
    }
}

// Second function is the verifyAToken function
function verifyAToken(req, res, next /* Always takes these 3 arguments */) {
    // Retrieve a token from the browser
    const token = req?.headers['Authorization']
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) {
            next()
        }else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {
    createToken,
    verifyAToken
}