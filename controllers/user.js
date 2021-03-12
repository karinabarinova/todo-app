const models = require('../models')

exports.signup = (req, res, next) => {
    const {username, password, email} = req.body
    console.log(username, password, email)
}

exports.signup_show = (req, res, next) => {
    res.render('auth/signup', {})
}