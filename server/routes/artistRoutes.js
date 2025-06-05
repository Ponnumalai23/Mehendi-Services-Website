const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const artistController = require("../controller/artistController");

// Set up storage for image uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), artistController.createArtist);
router.get("/", artistController.getArtists);
router.get("/:id", artistController.getArtistById);
router.put("/:id", upload.single("image"), artistController.updateArtist);
router.delete("/:id", artistController.deleteArtist);

module.exports = router;
