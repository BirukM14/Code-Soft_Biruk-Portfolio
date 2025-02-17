// controllers/contactController.js
const transporter = require('../config/config');

// Controller to handle contact form submission
exports.sendMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Send the email notification using Nodemailer
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address (your email)
    to: process.env.TO_EMAIL, // receiver address (where you want to receive the message)
    subject: `New Contact Form Submission: ${subject}`, // subject of the email
    text: `You have received a new message from ${name} (${email}):\n\n${message}`, // body of the email
  };

  // Sending the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
      return res.status(500).send('Failed to send email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Message received and email sent');
  });
};
