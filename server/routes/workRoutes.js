const express = require("express");
const router = express.Router();
const workController = require("../controller/workController");

router.post("/add", workController.addWork);
router.get("/", workController.getAllWorks);
router.delete("/:id", workController.deleteWork);

module.exports = router;
