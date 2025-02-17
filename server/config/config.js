require('dotenv').config();

const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,  // smtp.gmail.com
  port: process.env.EMAIL_PORT,  // 587 (STARTTLS)
  secure: false,  // Use false for 587 (STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail address
    pass: process.env.EMAIL_PASS,  // Your app password
  },
});

// Export transporter for use in controller
module.exports = transporter;
