const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "interview", "accepted", "rejected"],
    default: "pending",
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: "USD",
    },
  },
  description: String,
  notes: String,
  urls: [String],
  timeline: [
    {
      status: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      notes: String,
    },
  ],
  interviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Interview",
    },
  ],
  level: {
    type: String,
    enum: [
      "Internship",
      "Entry",
      "Junior",
      "Mid-level",
      "Senior",
      "Lead",
      "Manager",
    ],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
applicationSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Application", applicationSchema);
