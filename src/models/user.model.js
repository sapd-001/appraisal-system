/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:11:19
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 09:00:37
 * @ Description:
 */
const mongoose = require("./../db");

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
    unique: true,
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
});

module.exports = mongoose.model("user", UserSchema);
