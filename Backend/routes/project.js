const express = require('express');
const { getAllProjects, addProject } = require('../controllers/projectController');

const router = express.Router();

// Get All Projects
router.get('/', getAllProjects);

// Add a New Project
router.post('/add', addProject);

module.exports = router;

