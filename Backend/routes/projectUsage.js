const express = require('express');
const { logProjectUsage } = require('../controllers/projectUsageController');

const router = express.Router();

// Log Project Usage
router.post('/log', logProjectUsage);

module.exports = router;

