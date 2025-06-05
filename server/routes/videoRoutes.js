const express = require('express');
const multer = require('multer');
const path = require('path');
const { uploadVideo, getVideos } = require('../controller/videoController');

const router = express.Router();

// Configure Multer for video uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure 'uploads/' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// POST: Upload video
router.post('/upload', upload.single('video'), uploadVideo);

// GET: Fetch uploaded videos
router.get('/videos', getVideos);

module.exports = router;
