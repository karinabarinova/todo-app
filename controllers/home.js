const models = require('../models')

exports.getPage = (req, res, next) => {
    //add passing of req.user
    res.render('home', {})
}

exports.getTasks = (req, res, next) => {
    return models.Task.findAll({
        where: {
            done: true
        }
    }).then(done => {
        return models.Task.findAll({
            where: {
                done: false
            }
        }).then(planned => {
            res.render('tasks/tasks', { done, planned })
        })
        
    })
}

exports.createTask = (req, res, next) => {
    models.Task.create({
        description: req.body.task,
        done: false
    }).then(task => {
        res.redirect('/tasks')
    })
}

exports.finishTask = (req, res, next) => {
    models.Task.update({
        done: true
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.redirect('/tasks')
    })
}