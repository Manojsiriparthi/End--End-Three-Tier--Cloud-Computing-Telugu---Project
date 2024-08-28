const express = require('express');
const { logSiteVisit } = require('../controllers/siteVisitController');

const router = express.Router();

// Log Site Visit
router.get('/log', logSiteVisit);

module.exports = router;

