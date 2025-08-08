const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema({
  applicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["phone", "video", "onsite", "technical", "behavioral", "other"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // in minutes
    required: true,
  },
  location: {
    type: String,
    required: true, // could be URL for video interviews or physical address
  },
  contactPerson: {
    name: String,
    title: String,
    email: String,
  },
  notes: {
    prep: String, // preparation notes
    questions: [String], // questions to ask
    feedback: String, // post-interview notes
  },
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled", "rescheduled"],
    default: "scheduled",
  },
  reminders: [
    {
      date: Date,
      sent: {
        type: Boolean,
        default: false,
      },
    },
  ],
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
interviewSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Interview", interviewSchema);
