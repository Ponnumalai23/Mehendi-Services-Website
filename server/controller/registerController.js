const User = require("../models/register.model");

// ✅ Register User
exports.addRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "Username or Email already exists!" });
    }

    const newUser = new User({ username, email, password, role: "client" });
    await newUser.save();
    res.status(201).json({ message: "Registered successfully!" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Failed to register user." });
  }
};

// ✅ Login User
exports.loginUser = async (req, res) => {
  const { input, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ username: input }, { email: input }] });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid Username or Email!" });
    }

    res.status(200).json({ message: "Login successful", role: user.role, userId: user._id });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
};

// ✅ Fetch User Details by ID
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Get User Error:", error);
    res.status(500).json({ message: "Failed to fetch user details." });
  }
};

// ✅ Update User
exports.updateUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, email }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error("Update User Error:", error);
    res.status(500).json({ message: "Failed to update user." });
  }
};

// ✅ Delete User
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ message: "User deleted successfully!" });
  } catch (error) {
    console.error("Delete User Error:", error);
    res.status(500).json({ message: "Failed to delete user." });
  }
};

// ✅ Fetch All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude passwords
    res.status(200).json(users);
  } catch (error) {
    console.error("Get All Users Error:", error);
    res.status(500).json({ message: "Failed to fetch users." });
  }
};

 