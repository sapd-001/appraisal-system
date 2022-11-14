/**
 * @ Author: Felix Orinda
 * @ Create Time: 2022-11-14 08:37:11
 * @ Modified by: Felix Orinda
 * @ Modified time: 2022-11-14 18:00:35
 * @ Description:
 */
const userModel = require('../models/user.model');

const router = require('express').Router();


router.post('/account/create', async (req, res, next) => {
    const newUser = await userModel.create(req.body);

})


module.exports = router;