/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-28 08:13:32
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 08:14:49
 * @ Description:
 */

const router = require("express").Router();

/**
 * Create a new department
 */
router.post("/create", (req, res) => {});

/**
 * Get all departments
 */
router.get("/all", (req, res) => {});

/**
 * Get a department by id
 */
router.get("/:id", (req, res) => {});
/**
 * Update a department by id
 */
router.put("/:id", (req, res) => {});
/**
 * Delete a department by id
 */
router.delete("/:id", (req, res) => {});

module.exports = router;
