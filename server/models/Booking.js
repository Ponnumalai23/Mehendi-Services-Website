const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  email: String,
  phone: String,
  serviceName: String,
  date: String,
  time: String,
  location: String,
  artistpreference: String,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("Booking", bookingSchema);
