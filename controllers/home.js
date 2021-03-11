exports.getPage = (req, res, next) => {
    //add passing of req.user
    res.render('home', {})
}

exports.createTask = (req, res, next) => {
    console.log(req.body.task)
    res.redirect('/')
}