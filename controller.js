const controller = {

    index: (req, res) => {
        return res.render('index')    
    },

    show: (req, res) => {
        return res.render('show', {
            data: req.session.userLogged
        })    
    },

    add: (req, res) => {
        const userToLogin = req.body;
        req.session.userLogged = userToLogin;
        console.log(req.session.userLogged);
        res.redirect('show')
    }




    //(req, res) => {
    //    const userToLogin = req.body;
    //    req.session.userLogged = userToLogin;
    //    res.redirect('/register')
    //})

}

module.exports = controller;