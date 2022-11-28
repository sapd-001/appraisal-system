const mongoose = require("../db");

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Role name required"],
      lowerCase: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Role description required"],
      lowerCase: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("role", RoleSchema);
