const ProjectUsage = require('../models/ProjectUsage');

exports.logProjectUsage = async (req, res) => {
  const { userId, projectId } = req.body;

  try {
    const usage = new ProjectUsage({ userId, projectId });
    await usage.save();
    res.status(200).send('Project usage logged');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

