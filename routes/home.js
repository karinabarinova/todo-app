const express = require('express')
const router = express.Router()
const home = require('../controllers/home')
const auth = require('../controllers/auth')

router.get('/', home.getPage);
router.post('/add', home.createTask);
router.post('/delete/:id', home.finishTask)
router.get('/tasks', home.getTasks);

//Authentication
router.get('/signup', auth.signup_show)
router.post('/signup', auth.signup)
router.get('/login', auth.login_show)
router.post('/login', auth.login)


module.exports = router