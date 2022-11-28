const mongoose = require("../db");

const EvaluationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Evaluation name required"],
      lowerCase: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Evaluation description required"],
      lowerCase: true,
      trim: true,
      unique: true,
    },
    status: {
      type: String,
      required: [true, "Evaluation status required"],
      lowerCase: true,
      trim: true,
      unique: true,
    },

    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
      required: [true, "User required"],
    },
    task: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "task",
      required: [true, "Task required"],
    },
  },
  { timestamps: true }
);
