const Video = require('../models/Video');

exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No video uploaded' });
    }

    const { description } = req.body;
    const videoPath = `/uploads/${req.file.filename}`; // Corrected path

    const newVideo = new Video({
      description,
      videoPath,
    });

    await newVideo.save();
    res.status(201).json({ message: 'Video uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading video', error });
  }
};

// Fetch all videos from MongoDB
exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find(); // Fetch from MongoDB
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error });
  }
};
