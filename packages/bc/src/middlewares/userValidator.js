const express = require("express");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */
module.exports = async function userValidator(req, res, next) {
  const { password, firstName, lastName, email, designation, department } =
    req.body;
  const role = req.body.role;
  if (!firstName) {
    return res.status(400).json({
      status: "error",
      message: "First name is required",
    });
  }
  if (!lastName) {
    return res.status(400).json({
      status: "error",
      message: "Last name is required",
    });
  }
  if (!email) {
    return res.status(400).json({
      status: "error",
      message: "Email is required",
    });
  }

  if (!validateMongoId(role))
    return res
      .status(400)
      .json({ status: "error", message: "Invalid role id" });
  if (!validateMongoId(designation))
    return res
      .status(400)
      .json({ status: "error", message: "Invalid designation id" });
  if (!validateMongoId(department))
    return res

      .status(400)
      .json({ status: "error", message: "Invalid department id" });

  if (!password) {
    return res
      .status(400)
      .json({ status: "error", message: "Password is required" });
  }
  if (!/[A-Z]+/g.test(password)) {
    return res.status(400).json({
      status: "error",
      message: "Password must contain at least an uppercase letter",
    });
  }
  if (!/[a-z]+/g.test(password)) {
    return res.status(400).json({
      status: "error",
      message: "Password must contain at least a lowercase letter",
    });
  }
  if (!/[0-9]+/g.test(password)) {
    return res.status(400).json({
      status: "error",
      message: "Password must contain at least a number",
    });
  }
  //   if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(password)) {
  //     return res.status(400).json({
  //       status: "error",
  //       message: "Password must contain at least a special character",
  //     });
  //   }
  if (password.length < 8) {
    return res.status(400).json({
      status: "error",
      message: "Password must be at least 8 characters long",
    });
  }
  return next();
};
