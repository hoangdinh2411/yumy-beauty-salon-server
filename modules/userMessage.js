const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
  phone : Number,
  roll: { type: String, default: 'Guest'}
});

const userMessage = mongoose.model("UserMessage", userSchema);
module.exports =  userMessage;
