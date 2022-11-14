const userModel = require('../models/user.model');

const router = require('express').Router();


router.post('/account/create',async(req,res,next)=>{
    const newUser = await userModel.create(req.body);
    
})


module.exports = router;