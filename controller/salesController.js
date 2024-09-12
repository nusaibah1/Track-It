import express from 'express'
import bodyParser from 'body-parser'
import { sales } from '../model/index.js'
import {authenticateToken} from '../middleware/userAuth.js'
const salesRouter = express.Router()
salesRouter.use(bodyParser.json())


// Retrieve Total Sales
salesRouter.get('/', authenticateToken , (req, res) => {
    sales.fetchSales(req, res)
})

salesRouter.get('/:id', authenticateToken,(req, res) => {
    sales.fetchSale(req, res)
})

salesRouter.get('/:id/profit',authenticateToken ,(req, res) => {
    sales.fetchProfit(req, res)
})

salesRouter.get('/:id/loss', authenticateToken,(req, res) => {
    sales.fetchLoss(req, res)
})
export{
    salesRouter
}