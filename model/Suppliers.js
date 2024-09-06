import { connection as db } from "../config/config.js";


class Suppliers {
    fetchSuppliers(req,res) {
        try{
     
          const strQry = `
          SELECT SuppID, suppCompany, suppProduct, suppCostPrice, suppAgent, suppemailAdd, suppPhoneNum
          FROM Suppliers; 
        `
        db.query(strQry, (err, results) => {
            if(err) throw new Error('Unable to retrieve all suppliers')
            res.json({
            status: res.statusCode,
            results
    })
        })
        } catch(e) {
          res.json({ 
            status: 404,
            msg: e.message
          })
        }
    }
    
    newSuppliers(req, res) {
        try{
     const strQry = ` 
     SELECT  SuppID,suppCompany ,suppProduct,suppCostPrice,suppAgent,suppemailAdd,suppPhoneNum
     FROM Suppliers
     ORDER BY SuppID DESC
    LIMIT 3;  `
    db.query(strQry, (err, results) => {
        if(err) throw new Error('Unable to retrieve new suppliers')
            res.json({ 
        status: res.statusCode,
        results
    })
    })
        }catch(e) {
        res.json({
            status: 404,
            msg: e.message
        })
        }
    }
 
    fetchSupplier(req, res) {
        try {
            
            const strQry = `
                SELECT SuppID, suppCompany, suppProduct, suppCostPrice, suppAgent, suppemailAdd, suppPhoneNum
                FROM Suppliers
                WHERE SuppID = ?;
            `;
    
            
            db.query(strQry, [req.params.id], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        status: 500,
                        msg: 'Internal Server Error'
                    })
                }
    
                //  if the result is an array with at least one element
                if (Array.isArray(result) && result.length > 0) {
                    res.json({
                        status: res.statusCode,
                        result: result[0]
                    })
                } else {
                    
                    res.status(404).json({
                        status: 404,
                        msg: 'Supplier not found'
                    })
                }
            })
        } catch (e) {
            res.status(500).json({
                status: 500,
                msg: e.message
            })
        }
    }
    

    addSupplier(req, res) {
        try{
        const strQry = `
        INSERT INTO Suppliers 
        SET ? `
        db.query(strQry, [req.body], (err) => {
            if(err) throw new Error('Unable to add additional supplier')
          res.json({
         status: res.statusCode,
         msg: 'Supplier was added sucessfully'
        })
            })
        } catch(e) {
          res.json({
            status: 404,
            msg: e.message
          })
        }
    }
    updateSupplier(req, res) {
        try{
         const strQry = `
         UPDATE Suppliers
         SET ? 
         WHERE SuppID = ${req.params.id};`
        db.query(strQry, [req.body], (err) => {
            if(err) throw new Error('Unable to update supplier record')
        res.json({
       status: res.statusCode,
       msg:'Supplier record was successfully updated'
        })
            })
        }catch(e) {
         res.json({
            status: 404,
            msg: e.message
         })
        }
    }
    removeSupplier(req, res) {
 try{
    const strQry = `
    DELETE FROM Suppliers
    WHERE SuppID = ${req.params.id};`
    db.query(strQry, (err) => {
        if(err) throw new Error('Unable to remove supplier from the database.')
     res.json({ 
    status: res.statusCode,
    msg: 'The supplier was successfully removed from the database.'
    })
   
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
    Suppliers
}