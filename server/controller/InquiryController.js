const Inquiry = require("../models/Inquiry");

// @desc    Create a new inquiry
// @route   POST /api/inquiries
// @access  Public
const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const inquiry = new Inquiry({ name, email, phone, message });
    await inquiry.save();

    res.status(201).json({ message: "Inquiry submitted successfully!", inquiry });
  } catch (error) {
    res.status(500).json({ message: "Error submitting inquiry", error });
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Admin
const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching inquiries", error });
  }
};

// @desc    Delete an inquiry
// @route   DELETE /api/inquiries/:id
// @access  Admin
const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }

    await inquiry.deleteOne();
    res.status(200).json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting inquiry", error });
  }
};

module.exports = { createInquiry, getInquiries, deleteInquiry };
