const Wishlist = require("../models/Wishlist");

// Add to Wishlist
exports.addToWishlist = async (req, res) => {
  try {
    const { userId, serviceId } = req.body;
    
    // Check if already exists
    const existingItem = await Wishlist.findOne({ userId, serviceId });
    if (existingItem) return res.status(400).json({ message: "Already in wishlist" });

    const wishlistItem = new Wishlist({ userId, serviceId });
    await wishlistItem.save();
    res.status(201).json({ message: "Added to wishlist", wishlistItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding to wishlist" });
  }
};

// Remove from Wishlist
exports.removeFromWishlist = async (req, res) => {
  try {
    const { userId, serviceId } = req.body;
    await Wishlist.findOneAndDelete({ userId, serviceId });
    res.json({ message: "Removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: "Error removing from wishlist" });
  }
};

// Get User Wishlist
exports.getUserWishlist = async (req, res) => {
  try {
    const { userId } = req.params;
    const wishlist = await Wishlist.find({ userId }).populate("serviceId");
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: "Error fetching wishlist" });
  }
};
