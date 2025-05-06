import router from '../Router.js';

import Categoria from '../../database/models/Categoria.js';

// Read
router.get('/lista', (req, res) => {
    Categoria.find().then((categorias) => {
        res.render(
            'admin/categoria/categoria_lista',
            {categorias: categorias});
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});
// Create
router.get('/criar', (req, res) => {
    res.render('admin/categoria/categoria_criar');
});

router.post('/criar', (req, res) => {
    const newCategoria = new Categoria({
        nome: req.body.nome,
        nome_slug: req.body.nome_slug
    });

    newCategoria.save()
        .then(() => {
            res.redirect('/admin/categoria/lista');
        }).catch((error) => {
            console.log('Erro ao salvar: ' + error);
        });
});
// Update
router.get('/editar/:id', (req, res) => {
    Categoria.findOne({_id: req.params.id}).then((categoria => {
        res.render(
            'admin/categoria/categoria_editar',
            {categoria: categoria});
    })).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});

router.post('/editar/:id', (req, res) => {
    Categoria.findOne({_id: req.params.id}).then((categoria) => {
        categoria.nome = req.body.nome
        categoria.nome_slug = req.body.nome_slug

        categoria.save().then(() => {
            res.redirect('/admin/categoria/lista');
        }).catch((error) => {
            req.flash('error_msg', 'Houve um erro');
        });
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});
// Delete
router.get('/deletar/:id', (req, res) => {
    Categoria.findOne({_id: req.params.id}).then((categoria) => {
        res.render(
            'admin/categoria/categoria_deletar',
            {categoria: categoria});
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});

router.post('/deletar/:id', (req, res) => {
    Categoria.deleteOne({_id: req.params.id}).then(() => {
        res.redirect('/admin/categoria/lista');
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});

export default router;
