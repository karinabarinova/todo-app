const models = require('../models')

exports.getPage = (req, res, next) => {
    //add passing of req.user
    return models.Task.findAll().then(tasks => {
        console.log(tasks)
        res.render('home', { tasks })
    })
}

exports.createTask = (req, res, next) => {
    models.Task.create({
        description: req.body.task,
        done: false
    }).then(task => {
        res.redirect('/')
    })
}

exports.finishTask = (req, res, next) => {
    // models.Task.update({
    //     done: true
    // }, {
    //     where: { id: req.params.id }
    // }).then(result => {
    //     res.redirect('/')
    // })
    models.Task.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.redirect('/')
    })
}