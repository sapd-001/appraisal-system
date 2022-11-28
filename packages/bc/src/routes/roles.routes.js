/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:13:32
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:47:19
 * @ Description:
 */

const { adminRequired } = require("../middlewares/loginRequired");
const RoleModel = require("../models/role.model");

const router = require("express").Router();

/**
 * Create a new role
 */
router.post("/create", adminRequired, (req, res, next) => {});

/**
 * Get all roles
 */
router.get("/all", adminRequired, async (req, res, next) => {
  const roles = await RoleModel.find({});
  res.status(200).json({ data:roles });
});

/**
 * Get a role by id
 */
router.get("/:id", adminRequired, (req, res, next) => {});
/**
 * Update a role by id
 */
router.put("/:id", adminRequired, (req, res, next) => {});
/**
 * Delete a role by id
 */
router.delete("/:id", adminRequired, (req, res, next) => {});

module.exports = router;
