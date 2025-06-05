const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Gallery', GallerySchema);
