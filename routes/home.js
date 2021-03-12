const express = require('express')
const router = express.Router()
const home = require('../controllers/home')

router.get('/', home.getPage);
router.post('/add', home.createTask);
router.post('/delete/:id', home.finishTask)

module.exports = router