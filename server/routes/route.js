// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/controller');

// Define the POST route to submit the contact form
router.post('/send-message', contactController.sendMessage);

module.exports = router;
