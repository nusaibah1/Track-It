import {connection as db} from '../config/config.js'



class Orders {
// Retrieving a specific (single) order using the orderID
fetchOrder(req, res) {
    try{
        const strQry = `
        SELECT orderID, userID, prodID, State, Total
        FROM Orders
        WHERE orderID = ${req.params.id};`
        db.query(strQry, (err, result) => {
            if(err){
                res.json({ 
                    status: 404,
                    msg: console.log(err)
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
    // Adding a single order
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
    
// Updating a single order
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

fetchLoss(req, res) {
    try {
        // Define the SQL query
        const strQry = `
            SELECT 
                P.prodName,
                S.quantitySold,
                (S.sellingPrice - Sup.suppCostPrice) AS lossPerUnit,
                (S.sellingPrice - Sup.suppCostPrice) * S.quantitySold AS totalLoss
            FROM Sales S
            JOIN Products P ON S.prodID = P.prodID
            JOIN Suppliers Sup ON P.SuppID = Sup.SuppID
            WHERE (S.sellingPrice - Sup.suppCostPrice) < 0;
        `;

        // Execute the query
        db.query(strQry, (err, result) => {
            if (err) {
                console.error('Database query error:', err); // Log the error for debugging
                return res.status(500).json({
                    status: 500,
                    msg: 'Unable to retrieve loss data'
                });
            }

            // Send the result as a JSON response
            res.json({
                status: res.statusCode,
                result: result
            });
        });
    } catch (e) {
        // Catch any unexpected errors
        console.error('Unexpected error:', e); // Log the error for debugging
        res.status(500).json({
            status: 500,
            msg: e.message
        });
    }
}

fetchProfit(req, res) {
    try{
     const strQry = `
     SELECT 
    P.prodName,
    S.quantitySold,
    (S.sellingPrice - Sup.suppCostPrice) AS profitPerUnit,
    (S.sellingPrice - Sup.suppCostPrice) * S.quantitySold AS totalProfit
    FROM Sales S
    JOIN Products P ON S.prodID = P.prodID
    JOIN Suppliers Sup ON P.SuppID = Sup.SuppID;
     `
     db.query(strQry, (err, result) => {
        if(err) console.log(err) //throw new Error('Unable to retrieve profit')
            res.json({
        status: res.statusCode, result  
    })

        
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
    Orders
}


