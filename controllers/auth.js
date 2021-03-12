const { isEmpty } = require('lodash');
const passport = require('passport');
const models = require('../models')
const bcrypt = require('bcrypt')
const {validateUser} = require('../validators/signup')

const generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.login_show = (req, res, next) => {
    res.render('auth/login', {})
}

const rerender_signup = (err, req, res, next) => {
    res.render('auth/signup', {errors: err})
}

exports.signup = (req, res, next) => {
    const {username, password, email} = req.body
    let errors = {};
    return validateUser(errors, req).then(errors => {
        if (!isEmpty(errors)) {
            rerender_signup(errors, req, res, next);
        } else {
            let newUser = models.User.build({
                email,
                password: generateHash(password),
                username
            })
            return newUser.save().then(result => {
                passport.authenticate('local', {
                    successRedirect: '/tasks',
                    failureRedirect: '/signup',
                    failureFlash: true
                })(req, res, next);
            })
        }
    })
}

exports.signup_show = (req, res, next) => {
    res.render('auth/signup', {})
}