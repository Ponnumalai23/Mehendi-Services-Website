const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("Work", WorkSchema);
