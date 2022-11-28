/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:37:11
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-29 01:09:49
 * @ Description:
 */
const { sendWelcomeEmail } = require("../mailer");
const {
  adminRequired,
  loginRequired,
} = require("../middlewares/loginRequired");
const userValidator = require("../middlewares/userValidator");
const userModel = require("../models/user.model");
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
router.get("/all", adminRequired, async (req, res, next) => {
  const users = await userModel.find();
  res.status(200).json({
    status: "success",
    data: users,
  });
});
/**
 * Get all evaluators
 */
router.get("/all/evaluators", async (req, res, next) => {
  const evaluatorRole = await RoleModel.findOne({ name: "evaluator" });
  const user = await userModel.find({
    role: evaluatorRole._id,
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Get all admins
 */
router.get("/all/admins", async (req, res, next) => {
  const adminRole = await RoleModel.findOne({ name: "admin" });
  const user = await userModel.find({
    role: adminRole._id,
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Get a normal users
 */
router.get("/all/normal-users", loginRequired, async (req, res, next) => {
  const normalRole = await RoleModel.findOne({ name: "user" });
  const user = await userModel.find({
    role: normalRole._id,
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/**
 * Create regular user
 */
router.post(
  "/create/employee",
  adminRequired,
  userValidator,
  async (req, res, next) => {
    try {
      const originalPassword = req.body.password;
      req.body.password = await hashPassword(req.body.password);
      const userRole = await RoleModel.findOne({ name: "user" });
      const newUser = await userModel.create({
        ...req.body,
        role: userRole._id,
      });
      const response = await sendWelcomeEmail({
        password: originalPassword,
        email: req.body.email,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      });
      res.status(201).json({
        status: "success please check your email for login details",
        newEntry: newUser._id,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
);
/**
 * Create regular an evaluator
 */
router.post(
  "/create/evaluator",
  adminRequired,
  userValidator,
  async (req, res, next) => {
    try {
      const originalPassword = req.body.password;
      req.body.password = await hashPassword(req.body.password);
      const evaluatorRole = await RoleModel.findOne({ name: "evaluator" });
      const newUser = await userModel.create({
        ...req.body,
        role: evaluatorRole._id,
      });
      const response = await sendWelcomeEmail({
        password: originalPassword,
        email: req.body.email,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      });
      res.status(201).json({
        status: "success please check your email for login details",
        newEntry: newUser._id,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
);
/**
 * Create regular an Admin
 */
router.post(
  "/create/admin",
  adminRequired,
  userValidator,
  async (req, res, next) => {
    try {
      const originalPassword = req.body.password;
      req.body.password = await hashPassword(req.body.password);
      const adminRole = await RoleModel.findOne({ name: "admin" });
      const newUser = await userModel.create({
        ...req.body,
        role: adminRole._id,
      });
      const response = await sendWelcomeEmail({
        password: originalPassword,
        email: req.body.email,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      });
      res.status(201).json({
        status: "success please check your email for login details",
        newEntry: newUser._id,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  }
);

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
    console.log(error);
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
});
module.exports = router;
