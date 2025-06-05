const express = require("express");
const { createInquiry, getInquiries, deleteInquiry } = require("../controller/InquiryController");

const router = express.Router();

router.post("/", createInquiry);
router.get("/", getInquiries);
router.delete("/:id", deleteInquiry);

module.exports = router;
