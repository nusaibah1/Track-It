import  express  from 'express'
import bodyParser from 'body-parser'
import { suppliers } from '../model/index.js'
import { authenticateToken } from '../middleware/userAuth.js'

const supplierRouter = express.Router()
supplierRouter.use(bodyParser.json())

// Retrieve all Suppliers from the database
supplierRouter.get('/',(req, res) => {
    suppliers.fetchSuppliers(req, res)
})

// Retrieve  3 newest suppliers
supplierRouter.get('/new',(req, res) => {
    suppliers.newSuppliers(req, res)
})

// Retrieve a Single supplier
supplierRouter.get('/:id',(req, res) => {
    suppliers.fetchSupplier(req, res)
})

// Add Supplier
supplierRouter.post('/add' ,(req, res) => {
    suppliers.addSupplier(req, res)
})

// Update a  Supplier's  Records
supplierRouter.patch('/update/:id', (req, res) => {
    suppliers.updateSupplier(req,res)
})

//  Delete a Suppliers Records
supplierRouter.delete('/:id',(req, res) => {
    suppliers.removeSupplier(req, res)
})

export {
    supplierRouter
}