const express = require('express');
const { getAllCourses, addCourse } = require('../controllers/courseController');

const router = express.Router();

// Get All Courses
router.get('/', getAllCourses);

// Add New Course
router.post('/add', addCourse);

module.exports = router;

