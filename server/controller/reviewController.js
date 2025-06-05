const Review = require("../models/Review");

// Create a new review
exports.createReview = async (req, res) => {
    try {
        const { userId, username, rating, reviewText } = req.body;

        if (!userId || !username || !rating || !reviewText) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newReview = new Review({ userId, username, rating, reviewText });
        await newReview.save();

        res.status(201).json({ message: "Review submitted successfully", review: newReview });
    } catch (error) {
        res.status(500).json({ message: "Error submitting review", error: error.message });
    }
};

// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().sort({ createdAt: -1 });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reviews", error: error.message });
    }
};

// Get reviews by user ID
exports.getReviewsByUserId = async (req, res) => {
    try {
        const reviews = await Review.find({ userId: req.params.userId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user reviews", error: error.message });
    }
};

// Update a review
exports.updateReview = async (req, res) => {
    try {
        const { rating, reviewText } = req.body;

        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { rating, reviewText },
            { new: true }
        );

        if (!updatedReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json({ message: "Review updated successfully", review: updatedReview });
    } catch (error) {
        res.status(500).json({ message: "Error updating review", error: error.message });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);

        if (!deletedReview) {
            return res.status(404).json({ message: "Review not found" });
        }

        res.json({ message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting review", error: error.message });
    }
};
