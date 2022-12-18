const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  homeScore: {
    type: Number,
    required: true,
  },
  guestScore: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Game', gameSchema);
