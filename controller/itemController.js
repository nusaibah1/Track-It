import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
import { authenticateToken } from '../middleware/userAuth.js'



const itemRouter = express.Router()
itemRouter.use(bodyParser.json())

// Retrieve all Items
itemRouter.get('/' ,authenticateToken,(req, res) => {
products.fetchProducts(req, res)
})

// Recent Items
itemRouter.get('/recent',authenticateToken,(req, res) => {
    products.recentProducts(req, res)
})

//Rerieve a Single Item
//
itemRouter.get('/:id' , authenticateToken,(req, res) => {  
    products.fetchProduct(req, res)
})

// Add a single Item
itemRouter.post('/add',  authenticateToken,(req, res) => {  
    products.addProduct(req, res)
})

//Update an item
itemRouter.patch('/:id',authenticateToken,(req, res) => { 
    products.updateProduct(req, res)
})

//Delete an item
itemRouter.delete('/:id',authenticateToken, (req, res) => { 
    products.deleteProduct(req, res)
})



export {
    itemRouter
}