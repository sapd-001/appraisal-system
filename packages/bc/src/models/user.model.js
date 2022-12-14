/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:11:19
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-29 11:00:42
 * @ Description:
 */
const mongoose = require("../db");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    lowerCase: true,
    trim: true,
  },
  lastName: {
    type: String,
    lowerCase: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email address required"],
    lowerCase: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password  required"],
    lowerCase: true,
    trim: true,
    select: false,
  },
  role: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "role",
    required: [true, "Role required"],
  },
  department: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "department",
  },
  designation: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "designation",
  },
  phone: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
