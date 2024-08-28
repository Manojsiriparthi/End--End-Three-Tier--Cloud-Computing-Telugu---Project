const JobPortal = require('../models/JobPortal');

// Get All Job Postings
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await JobPortal.find();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Add a New Job Posting
exports.addJob = async (req, res) => {
  const { position, company, salary, experience, location } = req.body;

  try {
    const newJob = new JobPortal({ position, company, salary, experience, location });
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

