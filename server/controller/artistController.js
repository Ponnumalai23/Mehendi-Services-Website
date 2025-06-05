const Artist = require("../models/Artist");
const mongoose = require("mongoose");

// Create a new artist
exports.createArtist = async (req, res) => {
  try {
    const { name, skill, description, experience } = req.body;
    const image = req.file ? req.file.filename : null;

    const newArtist = new Artist({ name, skill, description, experience, image });
    await newArtist.save();

    res.status(201).json({ message: "Artist added successfully!", artist: newArtist });
  } catch (error) {
    res.status(500).json({ message: "Error adding artist", error });
  }
};

// Get all artists
exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: "Error fetching artists", error });
  }
};
exports.getArtistById = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid artist ID" });
  }

  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update an artist
exports.updateArtist = async (req, res) => {
  try {
    const { name, skill, description, experience } = req.body;
    const image = req.file ? req.file.filename : req.body.image;

    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.id,
      { name, skill, description, experience, image },
      { new: true }
    );

    res.status(200).json({ message: "Artist updated successfully", artist: updatedArtist });
  } catch (error) {
    res.status(500).json({ message: "Error updating artist", error });
  }
};

// Delete an artist
exports.deleteArtist = async (req, res) => {
  try {
    await Artist.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Artist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting artist", error });
  }
};
