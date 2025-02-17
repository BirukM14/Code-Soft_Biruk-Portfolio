// config/config.js
require('dotenv').config(); // Load environment variables from .env

module.exports = {
  dbUri: process.env.DB_URI,
  port: process.env.PORT || 5000,
};
