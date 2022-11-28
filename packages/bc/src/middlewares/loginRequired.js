const express = require("express");
const { verifyToken } = require("../utils/tokens");
const RoleModel = require("../models/role.model");
const { ExpressError } = require("../errors/ExpressError");

/**
 * Login required middleware to check for a valid token
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports.loginRequired = async (req, res, next) => {
  try {
    const headers = req.headers.authorization;
    if (!headers) {
      return res.status(400).json({ error: "No auth headers provided" });
    }
    const token = headers.split(" ")[1];
    if (!token) {
      return res.status(400).json({ error: "No auth token provided" });
    }

    const user = await verifyToken(token);
    const role = await RoleModel.findById(user.role);
    if (!role) {
      return res.status(400).json({ error: "Please login again" });
    }
    if (role.name === "evaluator") {
      user.isEvaluator = true;
      user.isAdmin = false;
    } else if (role.name === "admin") {
      user.isEvaluator = false;
      user.isAdmin = true;
    } else {
      user.isEvaluator = false;
      user.isAdmin = false;
    }
    req.user = user;
    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: err.message ? err.message : "Please login" });
    // console.log(err);
    // return next(
    //   new ExpressError({
    //     data: {},
    //     message: err.message,
    //     status: "err",
    //     statusCode: 400,
    //   })
    // );
  }
};

/**
 * Ensure correct user middleware to check if a user is an evaluator
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports.evaluatorRequired = async (req, res, next) => {
  try {
    this.loginRequired(req, res, async () => {
      if (req.user.isEvaluator) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized",
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: "Please log in first",
    });
  }
};

/**
 * Ensure correct user middleware to check if a user is an admin
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports.adminRequired = async (req, res, next) => {
  try {
    this.loginRequired(req, res, async () => {
      if (req.user.isAdmin || req.user.isEvaluator) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized",
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      message: "Please log in first",
    });
  }
};
