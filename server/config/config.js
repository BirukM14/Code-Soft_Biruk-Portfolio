require('dotenv').config();
const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,  // smtp.gmail.com
  port: parseInt(process.env.EMAIL_PORT, 10) || 587,  // Convert port to number
  secure: false,  // False for STARTTLS (587), true for SSL (465)
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail address
    pass: process.env.EMAIL_PASS,  // Your App Password
  },
  tls: {
    rejectUnauthorized: false,  // Avoid self-signed cert issues (optional)
  },
  logger: true,  // Logs SMTP communication (useful for debugging)
  debug: true,   // Prints SMTP debug info
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is Ready to Send Emails');
  }
});

// Export transporter for use in controllers
module.exports = transporter;
