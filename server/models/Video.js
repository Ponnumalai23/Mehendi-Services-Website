const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  videoPath: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Video', VideoSchema);
