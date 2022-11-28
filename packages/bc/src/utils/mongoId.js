const mongoose = require('mongoose');
/**
 * Validate a mongo id
 */
module.exports.validateMongoId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};
