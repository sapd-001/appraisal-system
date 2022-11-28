/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:17:35
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 13:13:35
 * @ Description:
 */
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const config = {
  baseDir: path.resolve(path.dirname(__filename)),
  port: process.env.PORT,
  dbUrl: process.env.MONGO_URL,
  secret: process.env.SECRET,
  mailer: {
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  },
};
module.exports = config;
