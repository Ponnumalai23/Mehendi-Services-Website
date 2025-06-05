const express = require("express");
const multer = require("multer");
const path = require("path");
const serviceController = require("../controller/serviceController");

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), serviceController.addService);
router.get("/", serviceController.getServices);
router.get("/:id", serviceController.getServiceById); // ✅ Fixed route for fetching by ID
router.put("/:id", upload.single("image"), serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
