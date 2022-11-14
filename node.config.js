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