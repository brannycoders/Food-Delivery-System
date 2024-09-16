const express = require("express")
const dotenv = require("dotenv")
const connectDB = require('./config/db');



dotenv.config()
const app = express()

// Middleware
app.use(express.json())

const PORT = process.env.PORT || 7000

// Connect Database
connectDB();


// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/restaurants', require('./routes/restaurant'));
app.use('/api/orders', require('./routes/order'));
app.use('/api/deliveries', require('./routes/delivery'));



   
   app.listen(PORT, ()=>{
        console.log(`server started running on ${PORT}`)
     })