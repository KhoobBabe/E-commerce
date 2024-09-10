require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');
const uri = 'mongodb://127.0.0.1:27017/myapp';  // Use hardcoded URI or environment variable

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // Use CORS middleware before routes
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Product API');
});

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
