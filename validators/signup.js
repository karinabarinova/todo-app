const validator = require('validator')
const models = require('../models')

const validateCreateUser = (errors, req) => {
    if (!validator.isEmail(req.body.email))
        errors['email'] = 'Please use a valid email'
    if (!validator.isAscii(req.body.password))
        errors['password'] = 'Invalid characters in password'
    if (!validator.isLength(req.body.password, {min: 8, max: 25}))
        errors['password'] = 'Minimum password length: 8 characters'
}

exports.validateUser = (errors, req) => {
    return new Promise((resolve, reject) => {
        validateCreateUser(errors, req)
        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user !== null)
                errors['email'] = 'Email is already in use. Login or reset your password'
            return models.User.findOne({
                where: {
                    username: req.body.username
                }
            }).then(user => {
                if (user !== null)
                    errors["username"] = 'Username is already in use. Login or reset your password'
                resolve(errors)
            })
            
        })
    })
}