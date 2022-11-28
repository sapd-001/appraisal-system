/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:21:56
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 09:01:01
 * @ Description:
 */

const { baseLogger } = require("../logger");
const RoleModel = require("../models/role.model");
const UserModel = require("../models/user.model");

// Create roles and then create a default admin user

(async () => {
  try {
    // check if roles exist
    const roles = await RoleModel.find({});
    if (roles.length === 0) {
      await RoleModel.insertMany([
        { name: "admin", description: "Admin" },
        { name: "evaluator", description: "Evaluator" },
        { name: "user", description: "User" },
      ]);
      baseLogger.info("Roles created successfully");
    }
    const adminRole = await RoleModel.findOne({ name: "admin" });
    // check if admin exists
    const admin = await UserModel.findOne({ role: adminRole._id });
    if (!admin) {
      await UserModel.create();

      await UserModel.create({
        name: "admin",
        email: "admin@gmail.com",
        role: adminRole,
        password: "admin1234",
      });
      baseLogger.info("Admin created successfully");
    }
    baseLogger.info("Migrations upto date");
  } catch (error) {
    baseLogger.error({
      message: "Error running migrations",
      error: error.message,
    });
  } finally {
    process.exit(0);
  }
})();
