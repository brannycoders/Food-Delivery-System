const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    contactInfo: { type: String, required: true },
    menu: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
