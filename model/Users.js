import {connection as db} from '../config/config.js' 
import {createToken} from '../middleware/userAuth.js'
import { compare, hash } from    'bcrypt' 


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

// async  registerUser(req, res) {
//     try {
//         let data = req.body
//         data.userPass = await hash(data.userPass, 12)  
//         // Payload
//         let user = {
//             userEmailAdd: data.userEmailAdd,
//              userPass: data.userPass
//         }
//         let strQry = `
//         INSERT INTO Users
//         SET ?`
//         db.query(strQry, [data], (err) => {
//         if(err) {
//              res.json({
//                 status: res.statusCode,
//                 msg: console.log(err)                  // msg: 'The email provided is already in use'
//             })
//         } else {
//             const token = createToken(user)
//         res.json({
//             token,
//             msg: 'You are now registered.'
//         })
//         }
//         } )
//         } catch(e) {
//         res.json({
//             status: 404,
//             msg: 'Unable to add new user.Please try again later'
//         })
//         }
//         }
async registerUser(req, res) {
    try {
        let data = req.body;
        data.userPass = await hash(data.userPass, 12);
   
        // Check if the email already exists
        let emailCheckQry = `SELECT * FROM Users WHERE userEmailAdd = ?`;
        db.query(emailCheckQry, [data.userEmailAdd], (err, results) => {
            if (err) {
                return res.json({
                    status: 500,
                    msg: 'Database query error',
                });
            }
            if (results.length > 0) {
                return res.json({
                    status: 409,
                    msg: 'The email provided is already in use.',
                });
            }
   
            // If email does not exist, proceed to insert the new user
            let strQry = `
            INSERT INTO Users
            SET ?`;
            db.query(strQry, [data], (err) => {
                if (err) {
                    return res.json({
                        status: 500,
                        msg: 'Error inserting user into database.',
                    });
                } else {
                    const token = createToken({ userEmailAdd: data.userEmailAdd });
                    return res.json({
                        token,
                        msg: 'You are now registered.',
                    });
                }
            });
        });
    } catch (e) {
        return res.json({
            status: 404,
            msg: 'Unable to add new user. Please try again later.',
        });
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
        const { userEmailAdd, userPass } = req.body

        const strQry = `
        SELECT userID, userName, userSurname, userEmailAdd, userPass, userRole, userUrl
        FROM Users
        WHERE userEmailAdd = '${userEmailAdd}';
        `
        
        db.query(strQry,  async(err, result) =>{
          if(err) throw new Error ('To login, please ensure that you provide the correct credentials.')
              if(!result?.length) {
                  res.json(
                      {
                  
                      status: 401, 
                      msg: 'Invalid email address. Please ensure that you provide the correct email address.'
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
                          result: result[0]
                      })
                  } else {
                      res.json({
                          status: 401,
                          msg: 'Incorrect password provided.'
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


fetchReports(req, res) {
    try{
     const strQry = `
     `
    }catch(e) {
        //
    }
}
fetchReport() {
    try{
        const strQry =``
    } catch(e) {
        //
    }
}
  
}


export {
    Users
}

