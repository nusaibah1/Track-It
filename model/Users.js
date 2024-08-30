import {connection as db} from '../config/config.js' 
import {createToken} from '../middleware/userAuth.js'
import { compare, hash } from    'bcrypt' 
import { users } from './index.js'


class Users {
fetchUsers(req, res) {
        try {
            const strQry = `
            SELECT userName , userSurname, userEmailAdd, userRole, userUrl
            FROM Users;`
            db.query(strQry, (err, results) => {
                if(err)  console.log(err)//throw new Error(`Unable to fetch all users`) 
                    res.json({
                status: res.statusCode, results
                    })
            }) 
            } catch(e) {
                res.json({
                    status: 404,
                    msg: e.message
                })
            }
}

fetchUser(req, res) {
    try {
        const strQry = `
        SELECT userID, userName, userSurname ,userEmailAdd, userRole, userUrl
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(strQry, (err, result) => {
            if (err) {
                res.json({
                    status: 404,
                    msg: 'Issue when retrieving a user.'
                })
            }
            if (!result.length) {
                res.json({
                    status: 404,
                    msg: 'Incorrect ID provided.'
                })
            } else { 
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            } 
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: 'Please try again later.'
        })
    }
}

async  registerUser(req, res) {
    try {
        let data = req.body
        data.userPass = await hash(data.userPass, 12)  
        // Payload
        let user = {
            userName: data.userName,
             userPass: data.userPass
        }
        let strQry = `
        INSERT INTO Users
        SET ?`
        db.query(strQry, [data], (err) => {
        if(err) {
             res.json({
                status: res.statusCode,
                msg: 'The email provided is already in use'
            })
        } else {
            const token = createToken(user)
        res.json({
            token,
            msg: 'You are now registered.'
        })
        }
        } )
        } catch(e) {
        res.json({
            status: 404,
            msg: 'Unable to add new user.Please try again later'
        })
        }
        }
        

 async updateUser(req, res) {
    try{
        let data = req.body       
        if(data.userPass) {
            data.userPass = await hash(data.userPass, 12)
        }
        //ensure that the params is the same as when routed
        const strQry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};  
        `
        db.query(strQry, [data], (err) => {
            if(err) throw new Error('Unable to update user')
            res.json({
            status: res.statusCode,
                msg: 'The user record was updated'
            })
        })
    } catch(e) {
     res.json({
        status: 400,
        msg: e.message
     })
    }
}
deleteUser(req, res) {
    try {
        const strQry = `
         DELETE FROM Users
         WHERE userID = ?;
         ` 
       
         db.query(strQry, [req.params.id], (err) => {
           if(err) {
               res.json({
                   status: 404,
                   msg: `User with ID ${req.params.id} not found or cannot be deleted. Please check the user ID and try again.`
               })
           } else {
               res.json({
                   status: res.statusCode,
                   msg: 'A user\'s information was removed.'
               })
           }
         })
       }
       catch(e) {
       res.json({
           status: 404,
           msg: e.message
       })
       }
}

async login(req, res) {
    try{
        const {userEmailAdd, userPass } = req.body
        const strQry = `
        SELECT userID, userName , userSurname , userEmailAdd, userPass , userRole, userUrl
        FROM Users
        WHERE userEmailAdd = '${userEmailAdd}';
        `
        
        db.query(strQry,  async(err, result) =>{
          if(err) throw new Error ('An unexpected error occurred while logging in. Please try again later.')
              if(!result?.length) {
                  res.json(
                      {
                  
                      status: 401, 
                      msg: 'Authentication failed. Please ensure that the correct email address and password is provided.'
                  }
              )
               } else {
               
                  const isValidPass = await compare
                  (userPass, result[0].userPass)
                  if(isValidPass) {
                      
                      const token  = createToken ({
                        userEmailAdd,
                        userPass 
                      })
                      res.json({
                          status: res.statusCode,
                          token,
                          result: result[0],
                          msg: 'Welcome Back'
                      })
                  } else {
                      res.json({
                          status: 401,
                          msg: 'Authentication failed. Please ensure that the correct email address and password is provided.'
                      })
                  }
              }
        })
        } catch(e) {
      res.json({
          status: 404,
          msg: e.message
      }) 
        }
}
}

export {
    Users
}

