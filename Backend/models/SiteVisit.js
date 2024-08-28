const mongoose = require('mongoose');

const siteVisitSchema = new mongoose.Schema({
  ipAddress: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const SiteVisit = mongoose.model('SiteVisit', siteVisitSchema);
module.exports = SiteVisit;

