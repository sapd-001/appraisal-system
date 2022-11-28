const { ExpressError } = require("./ExpressError");
const express = require("express");
/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
module.exports.expressErrorHandler = function (err, req, res, next) {
  if (err instanceof ExpressError) {
    return res.status(err.statusCode).json({
      ...err,
    });
  }
  if (err.name === "ValidationError") {
    const error = [];
    for (const key of Object.keys(err["errors"]))
      error.push(`${key} field is required`);

    return res.status(400).json({
      data: {
        error,
      },
      status: "error",
      message: "Invalid inputs",
    });
  }
  if (err.code === 11000) {
    let error = "";
    const x = err["keyValue"];
    for (const key of Object.keys(x))
      error += `${capitalize(key)} ${x[key]} already exists`;

    return res.status(409).json({
      status: "error",
      message: "Duplicate entry",
      data: { error },
    });
  }

  return res.status(500).json({
    status: "error",
    message: err.message ? err.message : "Internal server error",
    data: {},
  });
};
