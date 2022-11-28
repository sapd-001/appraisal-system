const UserModel = require("../models/user.model");
const { compareHash } = require("../utils/passwordHash");
const { createToken } = require("../utils/tokens");

const router = require("express").Router();

// Login user
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ status: "error", message: "Please fill all fields password and email" });
    const user = await UserModel.findOne({ email }).select('+password').lean();
    console.log(user);
    if (!user)
      return res
        .status(400)
        .json({ status: "error", message: "Account does not exist" });
    const isPasswordValid = await compareHash(password, user.password);
    if (!isPasswordValid)
      return res
        .status(400)
        .json({ status: "error", message: "Invalid email or password" });
    const token = createToken(user);
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

module.exports = router;
