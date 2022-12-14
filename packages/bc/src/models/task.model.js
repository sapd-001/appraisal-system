const mongoose = require("../db");

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Task name required"],
      lowerCase: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Task description required"],
      lowerCase: true,
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Task status required"],
      lowerCase: true,
      trim: true,
    },
    priority: {
      type: Number,
      required: [true, "Task priority required"],
      min: 0,
      max: 5,
      enum: [0, 1, 2, 3, 4, 5],
    },
    assignedTo: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: [true, "Assigned to required"],
    },
    assignedBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: [true, "Assigned by required"],
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "department",
      required: [true, "Department required"],
    },
    designation: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "designation",
      required: [true, "Designation required"],
    },
    evaluator: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: [true, "Evaluator required"],
    },
    dueDate: {
      type: String,
      required: [true, "Due date required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", TaskSchema);
