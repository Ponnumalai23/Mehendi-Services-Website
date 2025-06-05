const Work = require("../models/Work");
const multer = require("multer");
const path = require("path");

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save images in the uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage }).single("image");

// @desc    Add new work
// @route   POST /works/add
exports.addWork = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: "Error uploading file", error: err });
        }

        try {
            const { title } = req.body;
            const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

            const newWork = new Work({ title, imageUrl });
            await newWork.save();

            res.json({ message: "Work added successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Error adding work", error });
        }
    });
};

// @desc    Get all works
// @route   GET /works
exports.getAllWorks = async (req, res) => {
    try {
        const works = await Work.find();
        res.json(works);
    } catch (error) {
        res.status(500).json({ message: "Error fetching works", error });
    }
};

// @desc    Delete work by ID
// @route   DELETE /works/:id
exports.deleteWork = async (req, res) => {
    try {
        const { id } = req.params;
        await Work.findByIdAndDelete(id);
        res.json({ message: "Work deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting work", error });
    }
};
