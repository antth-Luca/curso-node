import express from 'express';
import bcrypt from 'bcryptjs';

import User from '../database/models/User.js';

import get_errors_user from '../validators/user.js';
import nodemon from 'nodemon';

const router = express.Router();

// Registrar
router.get('/registrar', (req, res) => {
    res.render('user/user_registrar');
})

router.post('/registrar', (req, res) => {
    const errors = get_errors_user(req.body);
    if (errors.length > 0) {
        res.render('user/user_registrar', {errors: errors});
    } else {
        User.findOne({email: req.body.email}).then((user) => {
            if (user) {
                errors.push({text: 'Já existe uma conta com esse email'});
                res.render('user/user_registrar', {errors: errors});
            } else {
                bcrypt.genSalt(10, (error, salt) => {
                    bcrypt.hash(req.body.senha, salt, (error, hash) => {
                        const newUser = new User({
                            nome: req.body.nome,
                            sobrenome: req.body.sobrenome,
                            data_nasc: req.body.data_nasc,
                            email: req.body.email,
                            senha: hash
                        });
                
                        newUser.save()
                            .then(() => {
                                req.flash('success_msg', 'Conta criada!');
                                res.redirect('/home');
                            }).catch((error) => {
                                req.flash('error_msg', 'Erro ao criar conta.');
                            });
                    });
                });
            }
        });
    }
});

export default router;
