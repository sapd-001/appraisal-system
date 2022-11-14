/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:39:02
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-14 17:59:29
 * @ Description:
 */
const { baseDir, dbUrl: mongoUrl, port, secret } = require('./../../node.config')

module.exports = {
    baseDir,
    mongoUrl,
    port,
    secret
}