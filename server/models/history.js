const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  homeScore: {
    type: Number,
    required: true,
  },
  guestScore: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('History', historySchema);
