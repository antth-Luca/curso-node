import express from 'express';

import Categoria from '../../database/models/Categoria.js';

import get_errors_categoria from '../../validators/categoria.js';

const router = express.Router();

// Read
router.get('/lista', (req, res) => {
    Categoria.find().sort({date: 'desc'}).then((categorias) => {
        res.render(
            'admin/categoria/categoria_lista', {categorias: categorias});
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro.');
    });
});
// Create
router.get('/criar', (req, res) => {
    res.render('admin/categoria/categoria_criar');
});

router.post('/criar', (req, res) => {
    const errors = get_errors_categoria(req.body);
    if (errors.length > 0) {
        res.render('admin/categoria/categoria_criar', {errors: errors});
    } else {
        const newCategoria = new Categoria({
            nome: req.body.nome,
            nome_slug: req.body.nome_slug
        });
    
        newCategoria.save()
            .then(() => {
                req.flash('success_msg', 'Categoria criada!');
                res.redirect('/admin/categoria/lista');
            }).catch((error) => {
                req.flash('error_msg', 'Houve um erro.');
            });
    }
});
// Update
router.get('/editar/:id', (req, res) => {
    Categoria.findOne({_id: req.params.id}).then((categoria => {
        res.render(
            'admin/categoria/categoria_editar', {categoria: categoria});
    })).catch((error) => {
        req.flash('error_msg', 'A categoria não existe.');
        res.redirect('/admin/categoria/lista');
    });
});

router.post('/editar/:id', (req, res) => {
    const errors = get_errors_categoria(req.body);
    if (errors.length > 0) {
        res.render('admin/categoria/categoria_editar', {
            errors: errors,
            categoria: {
                _id: req.body._id,
                nome: req.body.nome,
                nome_slug: req.body.nome_slug
            }
        });
    } else {
        Categoria.findOne({_id: req.params.id}).then((categoria) => {
            categoria.nome = req.body.nome
            categoria.nome_slug = req.body.nome_slug
    
            categoria.save().then(() => {
                req.flash('success_msg', 'Categoria editada!');
                res.redirect('/admin/categoria/lista');
            }).catch((error) => {
                req.flash('error_msg', 'Houve um erro.');
            });
        }).catch((error) => {
            req.flash('error_msg', 'Houve um erro.');
        });
    }
});
// Delete
router.get('/deletar/:id', (req, res) => {
    Categoria.findOne({_id: req.params.id}).then((categoria) => {
        res.render(
            'admin/categoria/categoria_deletar', {categoria: categoria});
    }).catch((error) => {
        req.flash('error_msg', 'A categoria não existe.');
        res.redirect('/admin/categoria/lista');
    });
});

router.post('/deletar/:id', (req, res) => {
    Categoria.deleteOne({_id: req.params.id}).then(() => {
        req.flash('success_msg', 'Categoria deletada!');
        res.redirect('/admin/categoria/lista');
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});

export default router;
