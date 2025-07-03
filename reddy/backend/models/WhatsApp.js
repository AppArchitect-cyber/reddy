// models/WhatsApp.js
const mongoose = require('mongoose');

const WhatsAppSchema = new mongoose.Schema({
  number: { type: String, required: true }
});

module.exports = mongoose.model('WhatsApp', WhatsAppSchema);
