exports.getPage = (req, res, next) => {
    //add passing of req.user
    res.render('home', {})
}