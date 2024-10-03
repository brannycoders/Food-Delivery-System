// Load environment variables
require('dotenv').config();

const mongoose = require('mongoose');

// Use MONGO_URI from the .env file
const url = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
