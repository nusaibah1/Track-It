import {connection as db} from '../config/config.js'

class Products {
 
    fetchProducts(req, res) {
        try {
  
            const strQry = `
            SELECT prodID, prodSKU, prodURL, prodName, prodDescription,prodQuantity,sellingPrice,prodCategory,SuppID 
            FROM Products;`
            db.query(strQry, (err, results) => {
                if (err) console.log(err)
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

    recentProducts(req, res) {
        try {
            const strQry = `
            SELECT prodID,prodSKU, prodURL, prodName, prodDescription, prodQuantity,sellingPrice,prodCategory, SuppID 
            FROM Products
            ORDER BY prodID DESC
            LIMIT 5;`
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent products')
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
    fetchProduct(req, res) {
        const strQry = `
            SELECT prodID, prodSKU, prodURL, prodName, prodDescription, prodQuantity, sellingPrice, prodCategory, SuppID 
            FROM Products
            WHERE prodID = ?;
        `;
        
        db.query(strQry, [req.params.id], (err, result) => {
            if (err) {
                // Handle error gracefully and return a response
                return res.status(500).json({
                    status: 500,
                    msg: 'Unable to retrieve product',
                    error: err.message 
                });
            }
    
            // Check if the product was found
            if (result.length === 0) {
                return res.status(404).json({
                    status: 404,
                    msg: 'Product not found'
                });
            }
    
            // If the product is found, return it
            res.json({
                status: res.statusCode,
                result: result[0] // Return the first result as the product
            });
        });
    }
    
    addProduct(req, res) {
        try {
            const strQry = `
            INSERT INTO Products
            SET ?`
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add new product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product succesfully added'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    updateProduct(req, res) {
        try {
            const strQry = `
            UPDATE Products
            SET ? 
            WHERE prodID = ${req.params.id};`
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to update product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product was successfully updated'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    deleteProduct(req, res) {
        try {
            const strQry = `
            DELETE FROM Products
            WHERE prodID = ${req.params.id};`
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete specified product.Please try again later')
                res.json({
                    status: res.statusCode,
                    msg: 'The product was succesfully removed from the database.'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    
        
    categoryTotals(req, res) {
        const strQry = `
          SELECT 
            prodCategory,
            SUM(prodQuantity * sellingPrice) AS Total
          FROM 
            Products
          GROUP BY 
            prodCategory;
        `;
        
        db.query(strQry, (err, results) => {
          if (err) {
            // Send error response instead of throwing error
            return res.status(500).json({
              status: 500,
              msg: 'Unable to retrieve category totals',
              error: err.message // Add more error context if needed
            });
          }
          
          // If no error, return the results
          res.json({
            status: res.statusCode,
            results
          });
        });
      }
      
    }    
export {
    Products
}