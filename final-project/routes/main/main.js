import express from 'express';

import Postagem from '../../database/models/Postagem.js'

const router = express.Router();

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/home', (req, res) => {
    Postagem.find().populate('categoria').sort({data: 'desc'}).then((postagens) => {
        res.render('main/home', {postagens: postagens});
    }).catch((error) => {
        req.flash('error_msg', 'Erro ao carregar postagens');
        res.redirect('/404');
    });
});

router.get('/sobre-nos', (req, res) => {
    res.render('main/sobre');
});

export default router;
