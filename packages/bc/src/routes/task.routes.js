/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:37:25
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 07:56:20
 * @ Description:
 */

const router = require("express").Router();

/**
 * Create a new task
 */
router.post("/create", (req, res) => {});

/**
 * Get all tasks
 */
router.get("/all", (req, res) => {});

/**
 * Get a task by id
 */
router.get("/:id", (req, res) => {});

/**
 * Update a task by id
 */
router.put("/:id", (req, res) => {});
/**
 * Delete a task by id
 */
router.delete("/:id", (req, res) => {});
/**
 * Get all tasks assigned to a user
 */
router.get("/assigned-to/:id", (req, res) => {});
/**
 * Get all tasks assigned by a user
 */
router.get("/assigned-by/:id", (req, res) => {});
/**
 * Get all tasks assigned to a department
 */
router.get("/department/:id", (req, res) => {});
/**
 * Get all tasks assigned to a designation
 */
router.get("/designation/:id", (req, res) => {});

module.exports = router;
