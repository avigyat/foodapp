const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const jwt_secret = 'mynameiscjinchin'

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
                let success = false
                return res.status(400).json({ errors: errors.array(), success })
            }

            const { email, password } = req.body;//destructuring request body

            let user = await User.findOne({ email });
            console.log(user)
            if (!user) {
                let success = false;
                return res.status(400).json({ error: "email does not exist", success })
            }

            const passwordCompare = await bcrypt.compare(password, user.password)//returns boolean
            console.log(passwordCompare)

            if (!passwordCompare) {
                let success = false;
                return res.status(400).json({ error: "Password did not match", success })
            }
            else {
                const data = {
                    userdata: {
                        id: user._id
                    }
                }

                const authToken = jwt.sign(data, jwt_secret);
                console.log(authToken);
                let success = true;
                return res.json({ authToken, success })
            }


        } catch (error) {
            success = false;
            
            return res.status(500).json({ "message": "some error occured", success })
        }
    })

module.exports = router;