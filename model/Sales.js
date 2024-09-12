import { connection as db } from "../config/config.js"


class Sales {
 fetchSales(req, res) {
    try{
        const strQry = `
        SELECT * 
        FROM Sales;`
  db.query(strQry, (err, results) => {
    if(err) throw new Error ('Unable to retrieve sales information')
       res.json({
    status: res.statusCode, results})
    })
    }catch(e) {
        res.json({
            status: 404,
            msg: e.message
        })
     }
 } 
fetchSale(req, res) {
    try{
    const strQry = `SELECT *
    FROM Sales
    WHERE saleID = ${req.params.id}; `
    db.query(strQry,[req.params.id],(err, result) => {
        if(err) console.log(err)
        
        // if (err) {  
        //     res.json({ 
        //         status: 404,
        //         msg: 'Issue when retrieving sale.'
        //     })
        // }
        if (!result) {
            res.json({
                status: 404,
                msg: 'Incorrect sale ID provided.Please review the sales log and try again.'
            })
        } else { 
            res.json({
                status: res.statusCode,
                result: result[0]
            })
        } 
    })
    }catch(e) {
     
       res.json({
        status: 404,
        msg: 'Apologies, we are experiancing internal issues at the momement.Please contact the site administrator for support.'
       })
    }
}
fetchProfit(req, res) {
    try {
      const strQry = `
        SELECT 
          P.prodName,
          S.quantitySold,
          (S.sellingPrice - Sup.suppCostPrice) AS profitPerUnit,
          (S.sellingPrice - Sup.suppCostPrice) * S.quantitySold AS totalProfit
        FROM Sales S
        JOIN Products P ON S.prodID = P.prodID
        JOIN Suppliers Sup ON P.SuppID = Sup.SuppID
        WHERE S.saleID = ?;
      `;
      db.query(strQry, [req.params.id], (err, results) => {
        if (err) throw new Error('Unable to retrieve current income. Please review your sales log before you proceed.')
        res.json({
          status: res.statusCode,
          results
        })
      })
    } catch (e) {
      res.json({
        status: 404,
        msg: e.message
      })
    }
  }
  
  fetchLoss(req, res) {
    try {
      const strQry = `
        SELECT 
          P.prodName,
          S.quantitySold,
          (S.sellingPrice - Sup.suppCostPrice) AS lossPerUnit,
          (S.sellingPrice - Sup.suppCostPrice) * S.quantitySold AS totalLoss
        FROM Sales S
        JOIN Products P ON S.prodID = P.prodID
        JOIN Suppliers Sup ON P.SuppID = Sup.SuppID
        WHERE S.saleID = ?;
      `
      console.log(`Fetching loss for sale ID: ${req.params.id}`);
      db.query(strQry, [req.params.id], (err, results) => {
        if (err) {
          console.error(`Error fetching loss: ${err}`);
          throw new Error('Unable to retrieve the loss and expenses');
        }
      
        res.json({
          status: res.statusCode,
          results
        });
      });
    } catch (e) {
      console.error(`Error fetching loss: ${e}`);
      res.json({
        status: 404,
        msg: e.message
      });
    }
  }



}

export{
    Sales
}