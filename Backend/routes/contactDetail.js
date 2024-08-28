const express = require('express');
const { getContactDetails, updateContactDetails } = require('../controllers/ContactDetailController');

const router = express.Router();

// Get Contact Details
router.get('/', getContactDetails);

// Update Contact Details
router.post('/update', updateContactDetails);

module.exports = router;

