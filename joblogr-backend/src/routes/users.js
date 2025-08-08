const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

// @route   GET api/users/profile
// @desc    Get current user's profile
// @access  Private
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/users/profile
// @desc    Update user profile
// @access  Private
router.put(
  "/profile",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, profile, settings } = req.body;

    try {
      let user = await User.findById(req.user.id);

      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }

      // Update fields
      user.name = name;
      if (profile) user.profile = { ...user.profile, ...profile };
      if (settings) user.settings = { ...user.settings, ...settings };

      await user.save();

      // Return user without password
      const updatedUser = await User.findById(req.user.id).select("-password");
      res.json(updatedUser);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/users/settings
// @desc    Update user settings
// @access  Private
router.put("/settings", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    user.settings = { ...user.settings, ...req.body };
    await user.save();

    res.json(user.settings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
