/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:51:15
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-28 13:59:09
 * @ Description:
 */

const bcryptjs = require('bcryptjs');

module.exports.hashPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(password, salt);
    return hash
}

module.exports.compareHash = async (password, text) => {
    const match = await bcryptjs.compare(password, text)
    return match
}