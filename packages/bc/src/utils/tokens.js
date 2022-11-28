const jwt = require("jsonwebtoken");
const { secret } = require("./../config");

/**
 * Create a token
 * @param {{id:string, email:string, role:string}} param
 */
module.exports.createToken = ({ id, email, role } = {}) => {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    secret
  );
};

/**
 * Verify a token
 * @param {string} token
 * @returns {Promise<{id:string,email:string,role:string}>}
 */
module.exports.verifyToken = async (token) => {
  return jwt.verify(token, secret);
};
