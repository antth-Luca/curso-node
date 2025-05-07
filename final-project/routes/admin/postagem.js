import express from 'express';

import Postagem from '../../database/models/Postagem.js';
import Categoria from '../../database/models/Categoria.js';

import get_errors_postagem from '../../validators/postagem.js';

const router = express.Router();

// Read
router.get('/lista', (req, res) => {
    Postagem.find().populate('categoria').sort({date: 'desc'}).then((postagens) => {
        res.render('admin/postagem/postagem_lista', {postagens: postagens});
    }).catch((error) => {
        req.flash('error_msg', 'Erro ao obter postagens.');
    });
});
// Create
router.get('/criar', (req, res) => {
    Categoria.find().sort({date: 'desc'}).then((categorias) => {
        res.render('admin/postagem/postagem_criar', {categorias: categorias});
    }).catch((error) => {
        req.flash('error_msg', 'Erro ao carregar formulário.');
    });
});

router.post('/criar', (req, res) => {
    const errors = get_errors_postagem(req.body);
    if (errors.length > 0) {
        Categoria.find().sort({date: 'desc'}).then((categorias) => {
            res.render('admin/postagem/postagem_criar', {
                errors: errors,
                categorias: categorias
            });
        }).catch((error) => {
            req.flash('error_msg', 'Erro ao carregar formulário.');
        });
    } else {
        const newPostagem = new Postagem({
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            conteudo: req.body.conteudo
        });

        newPostagem.save()
            .then(() => {
                req.flash('success_msg', 'Postagem criada!');
                res.redirect('/admin/postagem/lista');
            }).catch((error) => {
                req.flash('error_msg', 'Erro ao criar postagem.');
            });
    }
});
// Update
router.get('/editar/:id', (req, res) => {
    Postagem.findOne({_id: req.params.id}).then((postagem) => {
        Categoria.find().sort({date: 'desc'}).then((categorias) => {
            res.render('admin/postagem/postagem_editar', {
                postagem: postagem,
                categorias: categorias
            });
        }).catch((error) => {
            req.flash('error_msg', 'Erro ao carregar formulário.');
        });
    }).catch((error) => {
        req.flash('error_msg', 'A postagem não existe.');
        res.redirect('/admin/categoria/lista');
    });
});

router.post('/editar/:id', (req, res) => {
    const errors = get_errors_postagem(req.body);
    if(errors.length > 0) {
        Categoria.find().sort({date: 'desc'}).then((categorias) => {
            res.render('admin/postagem/postagem_editar', {
                errors: errors,
                postagem: {
                    _id: req.params.id,
                    titulo: req.body.titulo,
                    categoria: req.body.categoria,
                    conteudo: req.body.conteudo
                },
                categorias: categorias
            });
        }).catch((error) => {
            req.flash('error_msg', 'Erro ao carregar formulário.');
        });
    } else {
        Postagem.findOne({_id: req.params.id}).then((postagem) => {
            postagem.titulo = req.body.titulo,
            postagem.categoria = req.body.categoria,
            postagem.conteudo = req.body.conteudo

            postagem.save()
                .then(() => {
                    req.flash('success_msg', 'Postagem editada!');
                    res.redirect('/admin/postagem/lista');
                }).catch((error) => {
                    req.flash('error_msg', 'Erro ao editar.');
                });
        }).catch();
    }
});

export default router;
