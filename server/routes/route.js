// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Define the POST route to submit the contact form
router.post('/send-message', controller);

module.exports = router;
