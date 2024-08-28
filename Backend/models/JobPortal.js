const mongoose = require('mongoose');

const jobPortalSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  salary: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const JobPortal = mongoose.model('JobPortal', jobPortalSchema);
module.exports = JobPortal;

