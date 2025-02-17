// controllers/contactController.js
const transporter = require('../config/config');
const Contact = require('../models/contact');  // Optional if you want to save to DB

// Controller to handle contact form submission
exports.sendMessage = (req, res) => {
  const { name, email, subject, message } = req.body;

  // Optionally save to the database
  const newMessage = new Contact({
    name,
    email,
    subject,
    message,
  });

  newMessage.save()
    .then(() => {
      // Send the email notification using Nodemailer
      const mailOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.TO_EMAIL, // receiver address
        subject: `New Contact Form Submission: ${subject}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error occurred:', error);
          return res.status(500).send('Failed to send email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Message received and email sent');
      });
    })
    .catch((err) => {
      console.error('Error saving message:', err);
      res.status(500).send('Failed to save message');
    });
};
