// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config'); // Import config file
const route= require('./routes/route')

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', route); // Add the user routes

// Connect to MongoDB using the connection string from config
mongoose.connect(config.dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB:', err);
  });

// Start the server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
