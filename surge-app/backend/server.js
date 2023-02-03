require('dotenv').config()
const express = require('express')
const postsRoutes = require('./routes/posts')
const mongoose = require('mongoose')



// express app
const app = express()

var cors = require('cors')
app.use(cors())

//middleware
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/post', postsRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    //listen for request
    app.listen(process.env.PORT, ()=> {
        console.log('connected to db & listening on port' , process.env.PORT)
    })
})
.catch((error) =>{
    console.log(error)
})




