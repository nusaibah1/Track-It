import {connection as db} from '../config/index.js' 



class Users {
fetchUsers(req, res) {
        try {
            const strQry = `
            SELECT userName , userSurname, age, userEmailAdd, userRole, userUrl
            FROM Users;`
            db.query(strQry, (err, results) => {
                if(err)  throw new Error(`Unable to fetch all users`) 
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
/* Database Columns
userID 
userName 
userSurname 
userRole  ,
userEmailAdd,
userPass 
userUrl */
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
}