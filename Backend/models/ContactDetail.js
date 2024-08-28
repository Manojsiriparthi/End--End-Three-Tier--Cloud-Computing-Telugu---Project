const mongoose = require('mongoose');

const contactDetailSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const ContactDetail = mongoose.model('ContactDetail', contactDetailSchema);
module.exports = ContactDetail;

