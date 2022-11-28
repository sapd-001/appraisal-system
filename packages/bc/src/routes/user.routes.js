/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:37:11
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 14:46:54
 * @ Description:
 */
const {
  adminRequired,
  loginRequired,
} = require("../middlewares/loginRequired");
const userModel = require("../models/user.model");
const { validateMongoId } = require("../utils/mongoId");
const { hashPassword } = require("../utils/passwordHash");

const router = require("express").Router();

/**
 * Create a new admin
 */
router.post("/account/create", async (req, res, next) => {
  const newUser = await userModel.create(req.body);
});

/**
 * Get all users
 */
router.get("/all", adminRequired,async (req, res, next) => {
  const users = await userModel.find();
  res.status(200).json({
    status: "success",
    data: users,
  });
});
/**
 * Get a new evaluator
 */
router.get("/account/:id", async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Create regular user
 */
router.post("/create", adminRequired, async (req, res, next) => {
  const role = req.body.role;
  if (!validateMongoId(role))
    return res
      .status(400)
      .json({ status: "error", message: "Invalid role id" });

  if ((!firstName, !lastName, !email, !password, !role))
    return res
      .status(400)
      .json({ status: "error", message: "Please fill all fields" });
  req.body.password = await hashPassword(req.body.password);
  const newUser = await userModel.create(req.body);
  res.status(201).json({
    status: "success",
    newEntry: newUser._id,
  });
});

/**
 * Get all users
 */
router.get("/account/all", async (req, res, next) => {
  const users = await userModel.find({});
  res.status(200).json({
    status: "success",
    data: users,
  });
});

/**
 * Get a user by id
 */
router.get("/account/:id", loginRequired, async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Update a user by id
 */
router.put("/account/update/:id", async (req, res, next) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
});
/**
 * Delete a user by id
 */
router.delete("/account/:id", adminRequired, async (req, res, next) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Get all users in a department
 */
router.get("/account/department/:id", async (req, res, next) => {
  const users = await userModel.find({ department: req.params.id });
  res.status(200).json({
    status: "success",
    data: users,
  });
});

/**
 * Get all users in a designation
 */
router.get("/account/designation/:id", async (req, res, next) => {
  const users = await userModel.find({ designation: req.params.id });
  res.status(200).json({
    status: "success",
    data: users,
  });
});

/**
 * Get all users in a role
 */
router.get("/account/role/:role", async (req, res, next) => {
  const users = await userModel.find({ role: req.params.role });
  res.status(200).json({
    status: "success",
    data: users,
  });
});

/**
 * Get all users in a department and designation
 * @param {String} department
 * @param {String} designation
 */
router.get(
  "/account/department/:department/designation/:designation",
  async (req, res, next) => {
    const users = await userModel.find({
      department: req.params.department,
      designation: req.params.designation,
    });
    res.status(200).json({
      status: "success",
      data: users,
    });
  }
);

router.all("*", (req, res, next) => {
  res.status(404).json({
    status: "error",
    message: "Invalid route",
  });
})
module.exports = router;
