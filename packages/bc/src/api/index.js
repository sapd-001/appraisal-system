/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:31:42
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:19:12
 * @ Description:
 */

const express = require("express");
const { expressErrorHandler } = require("../errors/errorHandler");
const userRouter = require("../routes/user.routes");
const taskRoutes = require("../routes/task.routes");
const evaluatorRoutes = require("../routes/evaluation.routes");
const departmentRoutes = require("../routes/department.routes");
const designationRoutes = require("../routes/designation.routes");
const authRoutes = require("../routes/auth.routes");
const rolesRoutes = require("../routes/roles.routes");

/**
 *
 * @param {{app:express.Application}} param
 *
 */
module.exports = function ({ app } = {}) {
  const router = express.Router();
  router.use("/users", userRouter);
  router.use("/tasks", taskRoutes);
  router.use("/evaluators", evaluatorRoutes);
  router.use("/departments", departmentRoutes);
  router.use("/designations", designationRoutes);
  router.use("/auth", authRoutes);
  router.use("/roles", rolesRoutes);
  app.use(expressErrorHandler);

  app.use("/api/v1", router);
  app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "error",
      message: "Route not found",
      path: req.originalUrl,
    });
  });
};
