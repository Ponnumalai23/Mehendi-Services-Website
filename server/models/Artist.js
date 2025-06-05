const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  description: { type: String, required: true },
  experience: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Artist", ArtistSchema);
