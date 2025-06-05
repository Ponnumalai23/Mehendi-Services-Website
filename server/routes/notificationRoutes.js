const express = require("express");
const { 
  getUserNotifications, 
  createNotification, 
  markNotificationAsRead 
} = require("../controller/notificationController");

const router = express.Router();

router.get("/:userId", getUserNotifications);  // Get notifications for a user
router.post("/", createNotification);         // Create a new notification
router.put("/read/:id", markNotificationAsRead); // Mark a notification as read

module.exports = router;
