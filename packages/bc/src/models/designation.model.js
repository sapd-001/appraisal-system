const mongoose = require("../db");

const DesignationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Designation name required"],
      lowerCase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Designation description required"],
      lowerCase: true,
      trim: true,
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "department",
      required: [true, "Department required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("designation", DesignationSchema);