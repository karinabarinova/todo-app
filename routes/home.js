const express = require('express')
const router = express.Router()
const home = require('../controllers/home')
const auth = require('../controllers/auth')
const { isAuth } = require('../middleware/isAuth')

router.get('/', home.getPage);
router.post('/add', isAuth, home.createTask);
router.post('/finish/:id', isAuth, home.finishTask)
router.delete('/delete/:id', isAuth, home.deleteTask)
router.get('/tasks', isAuth, home.getTasks);

//Authentication
router.get('/signup', auth.signup_show)
router.post('/signup', auth.signup)
router.get('/login', auth.login_show)
router.post('/login', auth.login)
router.get('/logout', isAuth, auth.logout)

module.exports = router