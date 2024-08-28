const Project = require('../models/Project');

// Get All Projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add a New Project
exports.addProject = async (req, res) => {
  const { title, description, course } = req.body;

  try {
    const newProject = new Project({ title, description, course });
    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

