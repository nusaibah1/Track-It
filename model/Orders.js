import {connection as db} from '../config/config.js'
import {authenticateToken} from '../middleware/userAuth.js'


class Orders {
fetchOrders(req, res) {
        try{
         const strQry = `
         SELECT orderID, userID, prodName, State, orderQuantity,Total
         FROM Orders;`
         db.query(strQry, (err, results) => {
            if(err) console.log(err)// throw new Error(`Unable to retrieve all orders`)
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
        SELECT orderID, userID, prodName, State, Total
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
        let data = req.body
        const strQry = `
            INSERT INTO Orders
            SET ?`
        db.query(strQry, [data], (err) => {
            if (err) throw new Error('Unable to add new order')
            res.json({
                status: res.statusCode,
                msg: 'Order succesfully placed'
            })
        })
    } catch (e) {
        res.json({
            status: 404,
            err: e.message
        })
    }
}

      async updateOrder(req, res) {
       try{
        let data = req.body

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
                 msg: 'Internal Error. Please contact the surpport team'
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
        msg:'Error deleting all order records.'
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


