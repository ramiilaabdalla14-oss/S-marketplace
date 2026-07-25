const mongoose = require('mongoose');
const Joi = require('joi');

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    condition: {
      type: String,
      enum: ['New', 'Like New', 'Used', 'Fair'],
      default: 'Used'
    },
    image: {
      type: String,
      required: true
    },
    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    },
    status: {
      type: String,
      enum: ['available', 'sold'],
      default: 'available'
    }
  },
  {
    timestamps: true
  }
);

// Joi validation schema
const validateItem = (data) => {
  const schema = Joi.object({
    title: Joi.string().trim().max(100).required().messages({
      'string.empty': 'Title is required',
      'string.max': 'Title cannot exceed 100 characters'
    }),
    description: Joi.string().trim().required().messages({
      'string.empty': 'Description is required'
    }),
    price: Joi.number().min(0).required().messages({
      'number.base': 'Price must be a valid number',
      'number.min': 'Price must be a positive number',
      'any.required': 'Price is required'
    }),
    condition: Joi.string().valid('New', 'Like New', 'Used', 'Fair').default('Used'),
    image: Joi.string().required().messages({
      'string.empty': 'Item image path is required'
    }),
    sellerId: Joi.string().hex().length(24).required().messages({
      'string.length': 'Invalid seller ID format',
      'any.required': 'Seller ID is required'
    }),
    categoryId: Joi.string().hex().length(24).required().messages({
      'string.length': 'Invalid category ID format',
      'any.required': 'Category ID is required'
    }),
    status: Joi.string().valid('available', 'sold').default('available')
  });

  return schema.validate(data);
};

const Item = mongoose.model('Item', itemSchema);

module.exports = {
  Item,
  validateItem
};