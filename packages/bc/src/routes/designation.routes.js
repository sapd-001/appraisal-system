/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:13:32
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 21:53:26
 * @ Description:
 */

const { adminRequired } = require("../middlewares/loginRequired");
const DesignationModel = require("../models/designation.model");
const { validateMongoId } = require("../utils/mongoId");

const router = require("express").Router();

/**
 * Create a new designation
 */
router.post("/create", adminRequired, async (req, res, next) => {
  try {
    const { name, description, department } = req.body;
    if (!name || !description || !department) {
      return res.status(400).json({
        message: "Please fill all fields name, description and department",
      });
    }
    if (!validateMongoId(department)) {
      return res.status(400).json({
        message: "Invalid department id",
      });
    }

    const newDesignation = await DesignationModel.create({
      name,
      description,
      department,
    });

    return res.status(201).json({
      message: "Designation created successfully",
    });
  } catch (error) {
    return next(error);
  }
});

/**
 * Get all designations
 */
router.get("/all", adminRequired, async (req, res, next) => {
  const data = await DesignationModel.find({});
  res.status(200).json({ data });
});

/**
 * Get a designation by id
 */
router.get("/:id", adminRequired, (req, res, next) => {});
/**
 * Update a designation by id
 */
router.put("/:id", adminRequired, (req, res, next) => {});
/**
 * Delete a designation by id
 */
router.delete("/:id", adminRequired, (req, res, next) => {});

module.exports = router;
