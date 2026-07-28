const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  studentId: { 
    type: String, 
    required: true, 
    unique: true 
  }
}, { timestamps: true });

module.exports = mongoose.model('users', usersSchema);