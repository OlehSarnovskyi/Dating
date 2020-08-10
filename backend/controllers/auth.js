module.exports.register = (req, res) => {
    res.status(200).json({
        register: {
            email: req.body.email,
            password: req.body.password
        }
    })
}

module.exports.login = (req, res) => {
    res.status(200).json({
        login: true
    })
}
