const CommunityChat = require('../models/CommunityChat');

// Get All Chat Messages
exports.getAllMessages = async (req, res) => {
  try {
    const messages = await CommunityChat.find().populate('userId', 'name');
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add a New Chat Message
exports.addMessage = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newMessage = new CommunityChat({ userId, message });
    const savedMessage = await newMessage.save();
    res.json(savedMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

