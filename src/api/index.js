const express = require('express')
const userRouter = require('./../routes/user.routes')
const taskRoutes = require('./../routes/task.routes')

module.exports = function () {
    const router = express.Router()

    router.use('/users', userRouter)
    router.use('/tasks', taskRoutes)

    return router;
}