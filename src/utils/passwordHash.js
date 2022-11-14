/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:51:15
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-14 18:00:42
 * @ Description:
 */

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