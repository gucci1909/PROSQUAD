const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["admin", "student", "teacher"],
      default: "student",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "approved",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

mongoose.models = {};
module.exports = mongoose.model("users", usersSchema);
