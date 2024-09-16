const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: { type: String },
  vehicle_details: { type: String },
  status: { type: String, enum: ['available', 'on delivery'], default: 'available' }
});

module.exports = mongoose.model('Delivery', DeliverySchema);
