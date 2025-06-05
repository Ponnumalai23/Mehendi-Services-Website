const express = require("express");
const router = express.Router();
const { addToWishlist, removeFromWishlist, getUserWishlist } = require("../controller/wishlistController");

router.post("/add", addToWishlist);
router.post("/remove", removeFromWishlist);
router.get("/:userId", getUserWishlist);

module.exports = router;
