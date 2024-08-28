const express = require('express');
const { getAllMessages, addMessage } = require('../controllers/CommunityChatController');

const router = express.Router();

// Get All Chat Messages
router.get('/', getAllMessages);

// Add a New Chat Message
router.post('/add', addMessage);

module.exports = router;

