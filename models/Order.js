const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
        quantity: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'preparing', 'on the way', 'delivered', 'cancelled'], default: 'pending' },
    estimatedDeliveryTime: { type: Date },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
