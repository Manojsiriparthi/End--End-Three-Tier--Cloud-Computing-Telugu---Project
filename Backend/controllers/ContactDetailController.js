const ContactDetail = require('../models/ContactDetail');

// Get Contact Details
exports.getContactDetails = async (req, res) => {
  try {
    const contactDetails = await ContactDetail.findOne();
    res.json(contactDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update Contact Details
exports.updateContactDetails = async (req, res) => {
  const { phone, email } = req.body;

  try {
    let contactDetails = await ContactDetail.findOne();
    if (contactDetails) {
      // Update existing contact details
      contactDetails.phone = phone;
      contactDetails.email = email;
      contactDetails = await contactDetails.save();
      res.json(contactDetails);
    } else {
      // Create new contact details if none exist
      const newContactDetail = new ContactDetail({ phone, email });
      contactDetails = await newContactDetail.save();
      res.json(contactDetails);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

