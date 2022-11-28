/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:13:32
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 18:11:47
 * @ Description:
 */

const { adminRequired } = require("../middlewares/loginRequired");
const DesignationModel = require("../models/designation.model");

const router = require("express").Router();

/**
 * Create a new designation
 */
router.post("/create", adminRequired, (req, res, next) => {});

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
