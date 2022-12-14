const express = require("express");
const { validateMongoId } = require("../utils/mongoId");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */
module.exports = async function taskValidator(req, res, next) {
  try {
    const { name, description, department, evaluator, assignedTo } = req.body;
    if (!name) {
      return res.status(400).json({
        status: "error",
        message: "Name is required",
      });
    }
    if (!description) {
      return res.status(400).json({
        status: "error",
        message: "Description is required",
      });
    }
    if (!department) {
      return res.status(400).json({
        status: "error",
        message: "Department is required",
      });
    }
    if (!evaluator) {
      return res.status(400).json({
        status: "error",
        message: "Evaluator is required",
      });
    }
    if (!assignedTo) {
      return res.status(400).json({
        status: "error",
        message: "Assigned to is required",
      });
    }
    if (!validateMongoId(department)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid department id",
      });
    }
    if (!validateMongoId(evaluator)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid evaluator id",
      });
    }
    if (!validateMongoId(assignedTo)) {
      return res.status(400).json({
        status: "error",
        message: "Invalid assigned to id",
      });
    }
    if (!req.body.priority) {
      return res.status(400).json({
        status: "error",
        message: "Task priority is required",
      });
    }
    return next();
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
