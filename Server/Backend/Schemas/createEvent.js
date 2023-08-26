const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  sponsors: {
    type: [String], // An array of strings
    default: null, // Assuming you want it to be null by default
  },
  speaker: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
