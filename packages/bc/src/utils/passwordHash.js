/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:51:15
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 15:14:55
 * @ Description:
 */

const bcryptjs = require("bcryptjs");

module.exports.hashPassword = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);
  return hash;
};

/**
 *
 * @param {string} password
 * @param {string} hash
 * @returns
 */
module.exports.compareHash = async (password, hash) => {
  const match = await bcryptjs.compare(password, hash);
  return match;
};
