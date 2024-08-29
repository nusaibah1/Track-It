import express from 'express'
import bodyParser from 'body-parser'
import { orders } from '../model/index.js'
import  {authenticateToken} from '../middleware/userAuth.js'

const orderRouter = express.Router()
orderRouter.use(bodyParser.json())

//Retrieve all Orders 
orderRouter.get('/', authenticateToken, (req, res) => {
    orders.fetchOrders(req, res)
})

// Retrieve an Order 
orderRouter.get('/:id', authenticateToken, (req, res) => {
    orders.fetchOrder(req, res)
})

// Add an Order 
orderRouter.post('/order', authenticateToken, (req, res) => {
    orders.addOrder(req, res)
})

// Update an Order 
orderRouter.patch('/order/:id', authenticateToken, (req, res) => {
    orders.updateOrder(req, res)
})


// Delete All Orders
orderRouter.delete('/orders/:id', authenticateToken, (req, res) => {
    orders.deleteOrders(req, res)
})


// Delete A single Order
orderRouter.delete('/order/:id', authenticateToken, (req, res) => {
    orders.deleteOrder(req, res)
})
