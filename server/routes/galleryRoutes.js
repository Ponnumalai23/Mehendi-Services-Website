const express = require('express');
const multer = require('multer');
const { getGallery, addGallery, deleteGallery } = require('../controller/galleryController');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Define Routes
router.get('/', getGallery);
router.post('/add', upload.single('image'), addGallery);
router.delete('/delete/:id', deleteGallery); // Delete Image API

module.exports = router;
