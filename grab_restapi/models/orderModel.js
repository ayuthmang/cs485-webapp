const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  // Owner of order
  user_owner: {
    type: String,
    trim: true,
    required: [true, 'Owner username is required']
  },
  user_grabber: {
    type: String,
    trim: true,
    required: [true, 'Grabber username is required']
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'reject'],
    default: 'pending'
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  tip: {
    type: Number,
    default: 0,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value'
    }
  },
  created_time: {
    type: Date,
    default: Date.now()
  },
  updated_time: {
    type: Date,
    default: Date.now()
  }
});

const User = (module.exports = mongoose.model('Orders', OrderSchema, 'Orders'));
