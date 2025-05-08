function is_admin(req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.is_admin == true) {
            return next();
        }

        req.flash('error_msg', 'Necessário ser administrador');
        res.redirect('/');
    }

    req.flash('error_msg', 'Necessário estar logado!');
    res.redirect('/');
}

function is_auth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    req.flash('error_msg', 'Necessário estar logado!');
    res.redirect('/');
}

export { is_admin, is_auth };
