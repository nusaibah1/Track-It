import express from 'express'
import bodyParser from 'body-parser'
import {users} from '../model/index.js'
import { orders } from '../model/index.js'
import { authenticateToken } from '../middleware/userAuth.js'


const userRouter = express.Router()
userRouter.use(bodyParser.json())


//Retrieve All Users 
userRouter.get('/',(req, res) => {
    users.fetchUsers(req, res)
})
// Retrieve a single User
userRouter.get('/:id',(req, res) => {
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
userRouter.delete('/:id' ,(req, res) => {
    users.deleteUser(req, res)
})

// User Login
userRouter.post('/login', (req, res) => {
    users.login(req, res)
})


// =====Orders=======

//Retrieve  All Orders 
// authenticateToken,
// authenticateToken,
// authenticateToken,
// authenticateToken,
// authenticateToken,
// authenticateToken,
// authenticateToken,
// authenticateToken,
userRouter.get('/:id/orders',(req, res) => {
    orders.fetchOrders(req, res)
})

// Retrieve an order based off the userID
userRouter.get('/:id/order/:orderID', (req, res) => {
    orders.fetchOrder(req,res)
})

// Add an order
userRouter.post('/:id/order', (req, res) => {
    orders.addOrder(req, res)
})

// Update an order 
userRouter.patch('/:id/order/:orderID', (req, res) => {
    orders.updateOrder(req, res)
})

// Delete All Orders 
userRouter.delete('/:id/order', (req, res) => {
    orders.deleteOrders(req,res)
})

// Delete a single order 
userRouter.delete('/:id/order/:orderID', (req, res) => {
    orders.deleteOrder(req, res)
})
// Profit
userRouter.get('/profit', (req, res) => {
    users.fetchProfit(req, res)
})
// Loss
userRouter.get('/loss', (req, res) =>{
    users.fetchLoss(req, res)
})


export {
    express,
    userRouter
}