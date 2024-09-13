import express from 'express'
import bodyParser from 'body-parser'
import {users} from '../model/index.js'
import { orders } from '../model/index.js'
import { authenticateToken } from '../middleware/userAuth.js'


const userRouter = express.Router()
userRouter.use(bodyParser.json())


//Retrieve All Users 
userRouter.get('/',authenticateToken,(req, res) => {
    users.fetchUsers(req, res)
})
// Retrieve a single User
userRouter.get('/:id',authenticateToken,(req, res) => {
    users.fetchUser(req, res)
})

// Add a single new User 
userRouter.post('/register',  (req, res) => {
    users.registerUser(req,res)
})
//Update a single User
userRouter.patch('/:id',(req, res) => {
    users.updateUser(req, res)
})

// Delete a single User
userRouter.delete('/:id',(req, res) => {
    users.deleteUser(req, res)
})

// User Login
userRouter.post('/login', (req, res) => {
    users.login(req, res)
})


// =====Orders=======
userRouter.get('/:id/orders',authenticateToken,(req, res) => {
    orders.fetchOrders(req, res)
})

// Retrieve an order based off the userID
userRouter.get('/:id/order/:orderID', authenticateToken,(req, res) => {
    orders.fetchOrder(req,res)
})

// Add an order
userRouter.post('/:id/order', authenticateToken,(req, res) => {
    orders.addOrder(req, res)
})

// Update an order 
userRouter.patch('/:id/order/:orderID', authenticateToken,(req, res) => {
    orders.updateOrder(req, res)
})

// Delete All Orders 
userRouter.delete('/:id/order', authenticateToken,(req, res) => {
    orders.deleteOrders(req,res)
})

// Delete a single order 
userRouter.delete('/:id/order/:orderID', authenticateToken,(req, res) => {
    orders.deleteOrder(req, res)
})
// Profit
userRouter.get('/profit', authenticateToken,(req, res) => {
    users.fetchProfit(req, res)
})
// Loss
userRouter.get('/loss', authenticateToken,(req, res) =>{
    users.fetchLoss(req, res)
})


export {
    express,
    userRouter
}