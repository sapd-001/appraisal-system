const { loginRequired } = require("../middlewares/loginRequired");
const UserModel = require("../models/user.model");
const { compareHash } = require("../utils/passwordHash");
const { createToken } = require("../utils/tokens");

const router = require("express").Router();

// Login user
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        status: "error",
        message: "Please fill all fields password and email",
      });
    const user = await UserModel.findOne({ email }).select("+password").lean();
    if (!user)
      return res
        .status(400)
        .json({ status: "error", message: "Account does not exist" });
    const isPasswordValid = await compareHash(password, user.password);
    if (!isPasswordValid)
      return res
        .status(400)
        .json({ status: "error", message: "Invalid email or password" });
    const token = createToken({ ...user, id: user._id });
    res.status(200).json({
      status: "success",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    return next(error);
  }
});

/**
 * reset password
 */
router.post("/reset-password", async (req, res) => {
  res.send("Reset password");
});

/**
 * Get profile
 * @route GET /api/v1/users/profile
 * @access Private
 * @description Get profile of logged in user
 * @returns {Object} User object
 */
router.get("/profile", loginRequired, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).populate("role");
    const { role, ...props } = user._doc;
    const uiRole =
      role.name.toLowerCase() === "admin"
        ? "admin"
        : role.name.toLowerCase() === "evaluator"
        ? "evaluator"
        : "user";

    res.status(200).json({
      status: "success",
      data: { ...props, role: uiRole },
    });
  } catch (error) {
    return next(error);
  }
});

/**
 * Update profile
 */
router.put("/profile/update", loginRequired, async (req, res) => {
  try {
    const { email, firstName, lastName, phone } = req.body;
    const user = await UserModel.findByIdAndUpdate(
      req.user.id,
      {
        email,
        firstName,
        lastName,
        phone,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message ? error.message : "Internal Server error",
    });
  }
});

module.exports = router;
