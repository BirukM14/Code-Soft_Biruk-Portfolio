const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes/route'); // Import routes

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Allow frontend requests from this port
  credentials: true                // Enable credentials (cookies or authentication headers)
}));
app.use(bodyParser.json());

// Routes
app.use('/api/contact', route);

// Add the user routes

// Start the server
const PORT = process.env.PORT || 5000; // Use port 5173
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
