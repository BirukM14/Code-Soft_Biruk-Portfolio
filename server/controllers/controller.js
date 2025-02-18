require('dotenv').config(); // Load environment variables
const { mailClient } = require('../config/config'); // Import the mail client function

const contactController = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const mailOptions = {
    from: email, // Sender's email from the form
    to: process.env.TO_EMAIL, // Receiver email from .env
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    const response = await mailClient(mailOptions);
    console.log('Email sent:', response);
    res.status(200).json({ message: 'Message received and email sent' });
    
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
};

module.exports = contactController;
