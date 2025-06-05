const Gallery = require('../models/gallery');
const fs = require('fs');
const path = require('path');

// Fetch all gallery images
exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find();
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new gallery image
exports.addGallery = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const imageUrl = `/uploads/${req.file.filename}`;
    const newGalleryItem = new Gallery({ imageUrl });

    await newGalleryItem.save();
    res.status(201).json(newGalleryItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a gallery image
exports.deleteGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const galleryItem = await Gallery.findById(id);

    if (!galleryItem) return res.status(404).json({ message: 'Image not found' });

    // Remove file from uploads folder
    const imagePath = path.join(__dirname, '..', galleryItem.imageUrl);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    await Gallery.findByIdAndDelete(id);
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
