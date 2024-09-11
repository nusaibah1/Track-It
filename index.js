import express from 'express'
import path from 'path'
import cors from 'cors'
import {connection as db} from './config/config.js' 
import { userRouter} from './controller/userController.js'
import { supplierRouter } from './controller/supplierController.js'
import  {itemRouter} from './controller/itemController.js'
// const fs = require('fs')
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

 
//Express Application
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

//Middleware 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
  
    next()
})
app.use(router, 
    express.static('./static'),
    express.json(),
    express.urlencoded ({
    extended: true
    })

);
app.use(cors())
app.use('/user', userRouter)
app.use('/item', itemRouter)
app.use('/supplier', supplierRouter);



// CSV writer
// const csvWriter = createCsvWriter({
//     path: 'sales_data.csv',
//     header: [
//       { id: 'id', title: 'ID' },
//       { id: 'product_name', title: 'Product Name' },
//       { id: 'quantity', title: 'Quantity' },
//       { id: 'price', title: 'Price' }
//     ]
//   });
  
  // Fetch data from MySQL and write to CSV
//   db.query('SELECT * FROM sales', (error, results) => {
//     if (error) throw error;
  
//     // Write data to CSV
//     csvWriter.writeRecords(results)
//       .then(() => {
//         console.log('CSV file has been written successfully.');
//       });
//   });
  
  // Serve static files
//   app.use(express.static(path.join(__dirname, 'public')));
  
  // Route to display the chart
//   app.get('/chart-data', (req, res) => {
//     connection.query('SELECT * FROM sales', (error, results) => {
//       if (error) throw error;
  
//       // Send the data as JSON for the chart
//       res.json(results);
//     });
//   });


app.get('^/$|/trackIt', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})
  app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})



  