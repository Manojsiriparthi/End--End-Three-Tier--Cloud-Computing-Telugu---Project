const mongoose = require('mongoose');

const projectUsageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  timestamp: { type: Date, default: Date.now }
});

const ProjectUsage = mongoose.model('ProjectUsage', projectUsageSchema);
module.exports = ProjectUsage;

