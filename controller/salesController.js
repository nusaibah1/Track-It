import express from 'express'
import bodyParser from 'body-parser'
import { sales } from '../model/index.js'


const salesRouter = express.Router()
salesRouter.use(bodyParser.json())


// Retrieve Total Sales
salesRouter.get('/', (req, res) => {
    sales.fetchSales(req, res)
})

salesRouter.get('/:id', (req, res) => {
    sales.fetchSale(req, res)
})

salesRouter.get('/:id/profit', (req, res) => {
    sales.fetchProfit(req, res)
})

salesRouter.get('/:id/loss', (req, res) => {
    sales.fetchLoss(req, res)
})
export{
    salesRouter
}