const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Interview = require("../models/Interview");
const Application = require("../models/Application");
const { check, validationResult } = require("express-validator");

// @route   GET api/interviews
// @desc    Get all interviews for a user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const interviews = await Interview.find({ userId: req.user.id })
      .sort({ date: 1 })
      .populate("applicationId", ["jobTitle", "company"]);
    res.json(interviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/interviews
// @desc    Create a new interview
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("applicationId", "Application ID is required").not().isEmpty(),
      check("type", "Interview type is required").not().isEmpty(),
      check("date", "Interview date is required").not().isEmpty(),
      check("duration", "Interview duration is required").not().isEmpty(),
      check("location", "Interview location is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Verify application exists and belongs to user
      const application = await Application.findById(req.body.applicationId);
      if (!application || application.userId.toString() !== req.user.id) {
        return res.status(404).json({ msg: "Application not found" });
      }

      const newInterview = new Interview({
        userId: req.user.id,
        ...req.body,
      });

      const interview = await newInterview.save();

      // Add interview to application's interviews array
      application.interviews.push(interview._id);
      await application.save();

      res.json(interview);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/interviews/:id
// @desc    Get interview by ID
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id).populate(
      "applicationId",
      ["jobTitle", "company"]
    );

    if (!interview) {
      return res.status(404).json({ msg: "Interview not found" });
    }

    // Make sure user owns interview
    if (interview.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    res.json(interview);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Interview not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/interviews/:id
// @desc    Update interview
// @access  Private
router.put("/:id", auth, async (req, res) => {
  try {
    let interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({ msg: "Interview not found" });
    }

    // Make sure user owns interview
    if (interview.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    interview = await Interview.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body, updatedAt: Date.now() } },
      { new: true }
    );

    res.json(interview);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Interview not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/interviews/:id
// @desc    Delete interview
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({ msg: "Interview not found" });
    }

    // Make sure user owns interview
    if (interview.userId.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Remove interview from application's interviews array
    const application = await Application.findById(interview.applicationId);
    if (application) {
      application.interviews = application.interviews.filter(
        (id) => id.toString() !== req.params.id
      );
      await application.save();
    }

    await interview.remove();
    res.json({ msg: "Interview removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Interview not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
