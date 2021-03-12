const express = require('express')
const router = express.Router()
const home = require('../controllers/home')
const user = require('../controllers/user')

router.get('/', home.getPage);
router.post('/add', home.createTask);
router.post('/delete/:id', home.finishTask)
router.get('/tasks', home.getTasks);

//Authentication
router.get('/signup', user.signup_show)
router.post('/signup', user.signup)


module.exports = router