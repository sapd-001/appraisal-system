const bcryptjs = require('bcryptjs');

module.exports.hashPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(salt, password)
    return hash
}

module.exports.compareHash = async (password, text) => {
    const match = await bcryptjs.compare(password, text)
    return match
}