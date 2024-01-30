const express = require('express');
const router = express.Router();
const User = require('../models/User.js')

router.post("/createUser", async(req,res)=>{
try {
    await User.create({
        name:"avigyat",
        email:"avigyatss@gmail.com",
        password:"123456",
        location:"chd"
    })
    res.json({'success':'true'})
} catch (error) {
    res.json({'success':'false'})
    console.log(error)
}
})

module.exports = router;