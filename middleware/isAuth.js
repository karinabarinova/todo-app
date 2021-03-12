const createError = require('http-errors')

exports.isAuth = (req, res, next) => {
    if (req.user)
        next()
    else
        next(createError(404, "Page does not exist"))
}