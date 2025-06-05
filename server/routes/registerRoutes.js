const express = require("express");
const router = express.Router();
const { addRegister, loginUser, getUserDetails, updateUser, deleteUser,getAllUsers  } = require("../controller/registerController");

router.post("/register", addRegister);
router.post("/login", loginUser);
router.get("/user/:id", getUserDetails);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/users", getAllUsers);
 
module.exports = router;
