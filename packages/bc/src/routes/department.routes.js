/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:13:32
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 13:52:37
 * @ Description:
 */

const { adminRequired } = require("../middlewares/loginRequired");

const router = require("express").Router();

/**
 * Create a new department
 */
router.post("/create", adminRequired, (req, res, next) => {});

/**
 * Get all departments
 */
router.get("/all", adminRequired, (req, res, next) => {});

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
router.delete("/:id",adminRequired, (req, res, next) => {});

module.exports = router;
