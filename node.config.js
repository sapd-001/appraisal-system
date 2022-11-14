/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:17:35
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-14 18:01:37
 * @ Description:
 */
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const config = {
    baseDir: path.resolve(path.dirname(__filename)),
    port: process.env.PORT,
    dbUrl: process.env.MONGO_URL,
    secret: process.env.SECRET
}

module.exports = config