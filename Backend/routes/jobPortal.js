const express = require('express');
const { getAllJobs, addJob } = require('../controllers/JobPortalController');

const router = express.Router();

// Get All Job Postings
router.get('/', getAllJobs);

// Add a New Job Posting
router.post('/add', addJob);

module.exports = router;

