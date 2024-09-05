import {connection as db} from '../config/config.js'
import {authenticateToken} from '../middleware/userAuth.js'


class Orders {
    fetchOrders(req, res) {
      try {
        const strQry = `SELECT orderID, userID, prodName, State, orderQuantity,Total FROM Orders;`;
        db.query(strQry, (err, results) => {
          if (err) {
            return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
          }
          res.json({ status: res.statusCode, results });
        });
      } catch (e) {
        return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
      }
    }
  
    fetchOrder(req, res) {
      try {
        const strQry = `SELECT orderID, userID, prodID, State, Total FROM Orders WHERE orderID = ${req.params.id};`;
        db.query(strQry, (err, result) => {
          if (err) {
            console.log(err)//return res.status(404).json({ status: 404, msg: 'Order not found' });
          }
          if (!result) {
            return res.status(404).json({ status: 404, msg: 'An invalid orderID was provided. Please try again' });
          }
          res.json({ status: res.statusCode, result: result[0] });
        });
      } catch (e) {
        return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
      }
    }
  
    async addOrder(req, res) {
      try {
        let data = req.body;
        const strQry = `INSERT INTO Orders SET ?`;
        db.query(strQry, [data], (err) => {
          if (err) {
            return res.status(500).json({ status: 500, msg: 'Unable to add new order' });
          }
          res.json({ status: res.statusCode, msg: 'Order succesfully placed' });
        });
      } catch (e) {
        return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
      }
    }
  
    async updateOrder(req, res) {
      try {
        let data = req.body;
        const strQry = `UPDATE Orders SET ? WHERE orderID = ${req.params.id};`;
        db.query(strQry, [data], (err) => {
          if (err) {
            return res.status(400).json({ status: 400, msg: 'Internal Error. Please contact the support team' });
          }
          res.json({ status: res.statusCode, msg: 'The order record was successfully updated.' });
        });
      } catch (e) {
        return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
      }
    }
  
    deleteOrders(req, res) {
      try {
        const strQry = `DELETE FROM Orders;`;
        db.query(strQry, (err) => {
          if (err) {
            return res.status(500).json({ status: 500, msg: 'Error deleting all order records.' });
          }
          res.json({ status: res.statusCode, msg: 'All orders were successfully removed.' });
        });
      } catch (e) {
        return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
      }
    }
  
    deleteOrder(req, res) {
      try {
        const strQry = `DELETE FROM Orders WHERE orderID = ?;`;
        db.query(strQry, [req.params.id], (err) => {
          if (err) {
            return res.status(404).json({ status: 404, msg: `Order with ID ${req.params.id} not found or cannot be deleted.` });
       

          }
          res.json({ status: res.statusCode, msg: 'All orders were successfully removed.' });
        });
      } catch (e) {
        return res.status(500).json({ status: 500, msg: 'Internal Server Error' });
      }
    }
} 

export {
    Orders
}
    
