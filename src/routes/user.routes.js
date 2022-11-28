/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:37:11
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 09:00:30
 * @ Description:
 */
const userModel = require("../models/user.model");

const router = require("express").Router();

/**
 * Create a new admin
 */
router.post("/account/create", async (req, res, next) => {
  const newUser = await userModel.create(req.body);
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
router.post("/create", async (req, res, next) => {
  const newUser = await userModel.create(req.body);
  res.status(200).json({
    status: "success",
    data: newUser,
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
router.get("/account/:id", async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Update a user by id
 */
router.put("/account/:id", async (req, res, next) => {
  const user = await userModel.findByIdAndUpdate;
});

/**
 * Delete a user by id
 */
router.delete("/account/:id", async (req, res, next) => {
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

module.exports = router;
