import { createPool } from "mysql2"; 
import 'dotenv/config'

let connection = createPool({
  host: process.env.hostDB,
  user: process.env.userDB,
  password: process.env.passDB,
  database: process.env.DBname,
  multipleStatements: true,  
  connectionLimit: 30  
})
connection.on('connection', (pool) => { 
    if(!pool) throw new Error('Couldn\'t connect to the database.Please try again later, if the issue persists please contact the site adminastrator.')
}) 


export {
    connection
}

