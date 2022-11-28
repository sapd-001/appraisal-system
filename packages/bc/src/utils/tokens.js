const jwt = require("jsonwebtoken");
const { secret } = require("./../config");

/**
 * Create a token
 * @param {string} id
 * @param {string} email
 * @param {string} role
 */
module.exports.createToken = (id, email, city) => {
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
