const express = require("express")
const dotenv = require("dotenv")

const mongoose = require('mongoose');


dotenv.config()
const app = express()

// Middleware
app.use(express.json())


const PORT = process.env.PORT || 7000

    mongoose.connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log('MongoDB Connected..!'));

     app.listen(PORT, ()=>{
        console.log(`server started running on ${PORT}`)
     })