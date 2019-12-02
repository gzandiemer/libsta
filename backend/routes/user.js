const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const key = require('../config/keys').secret
const user = require('../model/user')

const UserService = require('../services/user-service')

router.post('/signup', async (req, res) => {
    const { username, fullname, email, password, confirmPassword } = req.body
    if (password !== confirmPassword) {
        return res.status(400).json({
            msg: "Password do not match."
        })
    }
    // check username
    user.find({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            })
        }
    })
    //check email
    user.find({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registered. Did you forget your password?"
            })
        }
    })

    // Data is valid => register the user
    const newUser = new UserService({
        username, fullname, email, password
    })

    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registered"
                })
            })
        })
    })


})


router.get('/signin', async (req, res) => {
    user.find({ username: req.body.username }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            })

        }

        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    fullname: user.fullname,
                    email: user.email,
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user: user,
                        token: `Bearer ${token}`,
                        msg: "You are now signed in."
                    })
                })

            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                })
            }
        })
    })
})

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    })

})


module.exports = router