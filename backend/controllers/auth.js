const bcrypt = require('bcryptjs')

const User = require('../models/User')


module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // if user with this mail already registered
        res.status(409).json({
            shortCode: 'USER_WITH_MAIL_ALREADY_EXIST'
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

        }

    }
}

module.exports.login = (req, res) => {
    res.status(200).json({
        login: true
    })
}
