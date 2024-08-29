import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

function createToken(user) {
    return sign (
 {
       userEmailAdd: user.userEmailAdd,
       userPass: user.userPass
}, 
    process.env.SECRET_KEY,
{
expiresIn: '1h'
}

)
    
}
function  authenticateToken(req, res, next) {
    const token = req?.headers["authorization"] 
    if (token) {
        if(verify(token, process.env.SECRET_KEY)) {
            next()
        }
        else {
            res?.json({
                status: res.statusCode,
                msg: "Authentication failed. Token is invalid or has expired"
            })
        }
    }else {
        res?.json({
            status: res.statusCode,
            msg: "Invalid token. Please try logging in again"
        })
    } 

} 

export {
    createToken,
    authenticateToken
}