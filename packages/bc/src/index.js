/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:36:27
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 16:04:15
 * @ Description:
 */

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("./process")();
const config = require("./config");
const { baseLogger } = require("./logger");
const api = require("./api");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
api({ app });


app.listen(config.port, () => {
  baseLogger.info(`Server on port ${config.port}`);
});
