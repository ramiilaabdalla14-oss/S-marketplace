const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Route Imports
const itemsRoute = require('./routes/ahmedabdirahman/items.route');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/s-marketplace';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB successfully connected.'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Base Route
app.get('/', (req, res) => {
  res.send('Server-ka Suuqa Ardayda (S-marketplace) waa diyaar!');
});

// API Routes
app.use('/api/items', itemsRoute);

// Global 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server-ku wuxuu ku dhex shaqaynayaa port ${PORT}`));