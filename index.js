const express = require('express')
const bodyParser = require('body-parser')
const mongoClient = require('mongoose')
const userRouter = require("./routes/users.js")
const nameRouter = require("./routes/names.js")
const port = 4001
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//home page
app.get('/', (req,res) => {
    console.log(req)
    res.send("Home Page")
})

//middleware functions
app.use('/users', userRouter)
app.use('/names', nameRouter)

//mongodb connect
mongoClient.connect('mongodb://127.0.0.1:27017/dokonaly', (err) => {
    if(err){
        console.log(`Db is not connected. Error: ${err}`)
    }
    else{
        console.log("Db is connected")
    }
})

//port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})