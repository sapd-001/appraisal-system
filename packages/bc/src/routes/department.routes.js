/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:13:32
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 19:59:46
 * @ Description:
 */

const { adminRequired } = require("../middlewares/loginRequired");
const DepartmentModel = require("../models/department.model");
const router = require("express").Router();

/**
 * Create a new department
 */
router.post("/create", adminRequired, async (req, res, next) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Please provide name and description" });
  }
  const department = await DepartmentModel.create({ name, description });

  res.status(201).json({ data: department });
});

/**
 * Get all departments
 */
router.get("/all", adminRequired, async (req, res, next) => {
  const departments = await DepartmentModel.find({});

  res.status(200).json({ data: departments });
});

/**
 * Get a department by id
 */
router.get("/:id", adminRequired, (req, res, next) => {});
/**
 * Update a department by id
 */
router.put("/:id", adminRequired, (req, res, next) => {});
/**
 * Delete a department by id
 */
router.delete("/:id", adminRequired, (req, res, next) => {});

module.exports = router;
