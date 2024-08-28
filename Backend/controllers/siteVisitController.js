const SiteVisit = require('../models/SiteVisit');

exports.logSiteVisit = async (req, res) => {
  const ipAddress = req.ip;

  try {
    const visit = new SiteVisit({ ipAddress });
    await visit.save();
    res.status(200).send('Site visit logged');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

