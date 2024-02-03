const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');

router.post("/loginUser",
[
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 6 })
],
async (req, res) => {
    try {
    const errors = validationResult(req);
    //check for validation errors
    if (!errors.isEmpty()) {
        let success=false
         return res.status(400).json({ errors: errors.array(),success }) }

    const { email, password } = req.body;//destructuring request body

    
        let user = await User.findOne({ email });
        console.log(user)
        if (!user) { 
            let success=false;
            res.status(400).json({ error: "Please enter correct credentials",success}) }

    //     const passwordCompare = await bcrypt.compare(password, user.password)//returns boolean



        if (password !== user.password) { 
           let success= false;
           
            res.status(400).json({ error: "Please enter correct credentials",success }) }
        else{    
        const data = {
            user: {
                id: user._id
            }
        }
    //     const authToken = jwt.sign(data, jwt_secret);

    //     console.log(authToken);
        let success = true;
        res.json({ success })
    }


    } catch (error) {
        success = false;
        console.error(error.message);
        res.status(500).json({"message":"some error occured",success})
    }
})

module.exports = router;