const { processLogger } = require("./logger")

module.exports = () => {
    process.on('uncaughtException', (err, origin) => {
        processLogger.error(JSON.stringify({
            err: err.message,
            origin: origin
        }))
    })
    process.on('unhandledRejection', (reason, promise) => {
        const promiseMessage =  promise.catch((err) = err.message)
        processLogger.error(JSON.stringify({
            err: reason,
            promise: promiseMessage
        }))
    })
}