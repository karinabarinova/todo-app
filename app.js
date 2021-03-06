const express = require('express');
const createError = require('http-errors')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser');
const homeRouter = require('./routes/home')
const passport = require('passport');
const session = require('express-session')
const flash = require('connect-flash')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(session({ secret: 'new secret'}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./passport-setup')(passport)


app.use('/', homeRouter)

app.use(function(req, res, next) {
    next(createError(404));
});
  
  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;