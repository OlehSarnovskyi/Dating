const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')


module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // if user with this email already registered
        res.status(409).json({
            shortCode: 'USER_WITH_EMAIL_ALREADY_EXIST'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save()
            res.status(201).json({
                user,
                shortCode: 'USER_CREATED'
            })
        } catch (e) {
            errorHandler(res, e)
        }

    }
}

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

        if (passwordResult) {
            // gen token, passwords match
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                accessToken: `Bearer ${token}`,
                shortCode: 'SIGNED_IN'
            })
        } else {
            res.status(401).json({
                shortCode: 'INCORRECT_PASSWORD'
            })
        }

    } else {
        // if user with this email not found
        res.status(404).json({
            shortCode: 'USER_WITH_EMAIL_NOT_FOUND'
        })
    }
}
