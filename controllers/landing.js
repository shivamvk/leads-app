exports.get_landing = function(req, res, next){
    res.render('index', { title: 'Buzz App' });
}

exports.submit_email = function(req, res, next){
    console.log("email : " + req.body.email);
    res.redirect("/");
}
