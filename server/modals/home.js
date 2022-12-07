const mongoose = require("mongoose");

const Home = mongoose.model(
  "Home",
  new mongoose.Schema({
    title: {
      type: String,
      default: "home",
    },
    value: {
      type: Number,
      required: true
    },
  })
);

exports.Home = Home;
