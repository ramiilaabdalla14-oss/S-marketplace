const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    enum: ['New', 'Like New', 'Good', 'Used'],
    default: 'Like New'
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  sellerName: {
    type: String,
    required: true
  },
  sellerPhone: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);