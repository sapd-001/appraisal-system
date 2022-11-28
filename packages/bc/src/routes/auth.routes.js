const router = require("express").Router();

// Login user
router.post("/login",async (req, res) => {
  res.send("Login user");
});

/**
 * reset password
 */
router.post("/reset-password",async (req, res) => {
  res.send("Reset password");
});

module.exports = router;
