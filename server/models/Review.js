const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        username: { type: String, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        reviewText: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
