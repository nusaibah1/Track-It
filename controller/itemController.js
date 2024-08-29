import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
import { authenticateToken } from '../middleware/userAuth.js'



const itemRouter = express.Router()
itemRouter.use(bodyParser.json())

// Retrieve all Items
//authenticateToken
itemRouter.get('/' , (req, res) => {
products.fetchProducts(req, res)
})

// Recent Items
itemRouter.get('/recent', (req, res) => {
    products.recentProducts(req, res)
})

//Rerieve a Single Item
//, authenticateToken
itemRouter.get('/:id', (req, res) => {  
    products.fetchProduct(req, res)
})

// Add a single Item
itemRouter.post('/add',   (req, res) => {  
    products.addProduct(req, res)
})

//Update an item

itemRouter.patch('/:id',   (req, res) => { 
    products.updateProduct(req, res)
})

//Delete an item
itemRouter.delete('/:id',  (req, res) => { 
    products.deleteProduct(req, res)
})

export {
    itemRouter
}