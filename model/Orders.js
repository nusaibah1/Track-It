import {connection as db} from '../config/config.js'

import {authenticateToken} from '../middleware/userAuth.js'


class Orders {
    /*
    orderID ,
userID ,
orderDate,
prodName
State,
Total DECIMAL(18, 2) NOT NULL */
    fetchOrders(req, res) {
        try{
         const strQry = `
         SELECT orderID, userID, orderDate, prodName, State, orderQuantity,Total
         FROM Orders;`
         db.query(strQry, (err, results) => {
            if(err) throw new Error(`Unable to retrieve all orders`)
                res.json({
            status: res.statusCode, results
            })
         })
        }catch(e) {
   res.json({
    status: 404,
    msg: e.message
   })
        }
    }

fetchOrder(req, res) {
    try{
        const strQry = `
        SELECT orderID, userID, orderDate, prodName, State, Total
        FROM Orders
        WHERE orderID = ${req.params.id};`
        db.query(strQry, (err, result) => {
            if(err){
                res.json({ 
                    status: 404,
                    msg: 'Issue when retrieving order'
                })
            }
            if(!result.length) {
                res.json({
                    status: 404,
                    msg: 'An invalid orderID was provided. Please try again '
                })
            } else {
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            }
        })
    } catch(e) {
     res.json({
        status: 404,
        msg: 'Please try again later'
     })
    }
}


    async addOrder(req, res) {
        try {
          // Authenticate token
          const decoded = await authenticateToken(req);
          if (!decoded) {
            return res.json({
              status: 401,
              msg: 'Unauthorized: Invalid token'
            });
          }
      
          // Get user ID from decoded token
          const userID = decoded.userID;
      
          // Get order data from request body
          const data = {...req.body, userID };
      
          // Insert order into database
          const strQry = `
            INSERT INTO Orders
            SET ?
          `;
          db.query(strQry, [data], (err) => {
            if (err) {
              res.json({
                status: res.statusCode,
                msg: 'Error adding order.Please try again later'
              });
            } else {
              res.json({
                status: res.statusCode,
                msg: 'Order added successfully'
              });
            }
          });
        } catch (e) {
          res.json({
            status: 500,
            msg: 'Internal Server Error'
          });
        }
      }

      async updateOrder(req, res) {
        try{
        const strQry = `
        UPDATE Orders
        SET ? 
        WHERE orderID = ${req.params.id};`

        db.query(strQry, [data], (err) => {
            if(err) throw new Error(`Unable to update order`)
                res.json({
            status: res.statusCode,
             msg: 'The order record was successfully updated.'
            })
        })
        } catch(e){
            res.json({
                status: 400,
                msg: e.message
             })
      } 
      }
deleteOrders(req, res) {
    try{
        const strQry = `
        DELETE FROM Orders;`
        db.query(strQry, (err) => {
if(err) {
    res.json({
        status: res.statusCode,
        msg:'Error deleting all order records. Please try again later.'
    })
} else {
    res.json({
        status: res.statusCode,
        msg: 'All orders was successfully removed.'
    })
}
        })
    }catch(e) {
   res.json({
    status: 404,
    msg: e.message
   })
    }
}
deleteOrder(req, res) {
    try{
      const strQry = ` 
      DELETE FROM Orders 
      WHERE orderID = ?;`
      db.query(strQry, [req.params.id], (err) => {
        if(err) {
            res.json({
                status: 404,
                msg: `Order  with ID ${req.params.id} not found or cannot be deleted. `
            })

        }else {
            res.json({
                status: res.statusCode,
                msg: 'Order was successfully removed.'
            })
        }
      })
    }catch(e) {
  res.json({
    status: 404,
    msg: e.message
  })
    }
}
}

export {
    Orders
}


