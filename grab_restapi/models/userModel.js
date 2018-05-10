const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    trim: true,
    required: [true, 'Password is required']
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email is required']
  },
  avatar_url: {
    type: String,
    trim: true,
    default: null
  },
  created_time: {
    type: Date,
    default: Date.now()
  },
  updated_time: {
    type: Date,
    default: Date.now()
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'reject'],
    default: 'pending'
  }
});

const User = (module.exports = mongoose.model('Users', UserSchema, 'Users'));
