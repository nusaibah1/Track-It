import express from 'express'
import path from 'path'
import {connection as db} from './config/config.js' 
import { userRouter} from './controller/userController.js'
import  {itemRouter} from './controller/itemController.js'
import {orderRouter} from './controller/orderController.js'
 
//Express Application
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

//Middleware 
app.use(router, 
    express.static('./static'),
    express.json(),
    express.urlencoded ({
    extended: true
    })
)
app.use('/user', userRouter)
app.use('/item', itemRouter)
app.use('/user/:userID/', orderRouter)

// Endpoint
router.get('^/$|/TrackIt', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.get('*', (req, res) => {
    res.json({
        status: 404,
        msg: 'Resource not found'
    })
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})





