/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 11:31:42
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-14 18:02:16
 * @ Description:
 */

const express = require('express')
const userRouter = require('./../routes/user.routes')
const taskRoutes = require('./../routes/task.routes')

module.exports = function () {
    const router = express.Router()
    router.use('/users', userRouter)
    router.use('/tasks', taskRoutes)

    return router;
}