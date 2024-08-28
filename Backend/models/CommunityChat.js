const mongoose = require('mongoose');

const communityChatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const CommunityChat = mongoose.model('CommunityChat', communityChatSchema);
module.exports = CommunityChat;

