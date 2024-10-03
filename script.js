// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const http = require('http'); 
const WebSocket = require('ws'); 
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const userRoutes = require('./routes/userRoutes');

// Initialize express app
const app = express();

// Use JSON middleware
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/deliveries', deliveryRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MONGODB CONNECTED...!'))
    .catch(err => console.error('MONGODB connection error:', err));

// Create HTTP server
const server = http.createServer(app);

// Initialize WebSocket server
const wss = new WebSocket.Server({ server });
const clients = new Map();  // To track connected WebSocket clients

// WebSocket connection logic
wss.on('connection', (ws, req) => {
    const userId = req.headers['user-id']; // Assuming user ID is passed in headers
    clients.set(userId, ws);

    console.log(`WebSocket connection established with user: ${userId}`);

    ws.on('close', () => {
        clients.delete(userId);
        console.log(`WebSocket connection closed with user: ${userId}`);

    });
});

// Function to send real-time notifications
function sendRealTimeNotification(userId, message) {
    const client = clients.get(userId);
    if (client && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
    }
}

// Export the function for use in other modules
module.exports = { sendRealTimeNotification };

// Start the HTTP server and WebSocket server on the specified port
const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
