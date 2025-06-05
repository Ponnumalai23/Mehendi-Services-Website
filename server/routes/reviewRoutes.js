const express = require("express");
const router = express.Router();
const reviewController = require("../controller/reviewController");

router.post("/", reviewController.createReview); // Create review
router.get("/", reviewController.getAllReviews); // Get all reviews
router.get("/:userId", reviewController.getReviewsByUserId); 
router.put("/:id", reviewController.updateReview);  
router.delete("/:id", reviewController.deleteReview);  

module.exports = router;
