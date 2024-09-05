import express from 'express'
import path from 'path'
import {connection as db} from './config/config.js' 
import { userRouter} from './controller/userController.js'
import  {itemRouter} from './controller/itemController.js'
import cors from 'cors'

 
//Express Application
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

//Middleware 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
  
    next()
})
app.use(router, 
    express.static('./static'),
    express.json(),
    express.urlencoded ({
    extended: true
    })

);
app.use(cors())
app.use('/user', userRouter)
app.use('/item', itemRouter)

// Endpoint
router.get('^/$|/TrackIt', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})