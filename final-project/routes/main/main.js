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
        req.flash('error_msg', 'Erro ao carregar postagens.');
        res.redirect('/404');
    });
});

router.get('/sobre-nos', (req, res) => {
    res.render('main/sobre');
});

router.get('/postagem/:slug', (req, res) => {
    Postagem.findOne({titulo_slug: req.params.slug}).populate('categoria').then((postagem) => {
        res.render('main/postagem', {postagem: postagem});
    }).catch((error) => {
        req.flash('error_msg', 'A postagem não existe.');
    });
});

export default router;
