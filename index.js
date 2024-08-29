import express from 'express'
import path from 'path'
import {connection as db} from './config/config.js' 

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

// Endpoint
router.get('^/$|/TrackIt', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})





