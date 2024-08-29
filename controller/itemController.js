import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
import { verifyAToken } from '../middleware/userAuth.js'



const itemRouter = express.Router()
itemRouter.use(bodyParser.json())

// Retrieve all Items
itemRouter.get('/', verifyAToken , (req, res) => {
products.fetchProducts(req, res)
})

// Recent Items
itemRouter.get('/recent', (req, res) => {
    products.recentProducts(req, res)
})

//Rerieve a Single Item
itemRouter.get('/:id', verifyAToken, (req, res) => {  
    products.fetchProduct(req, res)
})

// Add a single Item
itemRouter.post('/add', verifyAToken,  (req, res) => {  
    products.addProduct(req, res)
})

//Update an item
itemRouter.patch('/:id', verifyAToken,  (req, res) => { 
    products.updateProduct(req, res)
})

//Delete an item
itemRouter.delete('/:id', verifyAToken, (req, res) => { 
    products.deleteProduct(req, res)
})

export {
    itemRouter
}