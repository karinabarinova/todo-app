const models = require('../models')

exports.getPage = (req, res, next) => {
    res.render('home', {user: req.user})
}

exports.getTasks = (req, res, next) => {
    return models.Task.findAll({
        where: {
            author: req.user.dataValues.id,
            done: true
        }
    }).then(done => {
        return models.Task.findAll({
            where: {
                author: req.user.dataValues.id,
                done: false
            }
        }).then(planned => {
            res.render('tasks/tasks', { done, planned, user: req.user })
        })
        
    })
}

exports.createTask = (req, res, next) => {
    return models.Task.create({
        author: req.user.dataValues.id,
        description: req.body.task,
        done: false
    }).then(task => {
        res.redirect('/tasks')
    })
}

exports.finishTask = (req, res, next) => {
    return models.Task.update({
        done: true
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.send({message: "Success"})
    })
}

exports.deleteTask = (req, res, next) => {
    models.Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.send({message: "Success"})
    })
}