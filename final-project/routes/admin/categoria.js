import router from '../Router.js';

import Categoria from '../../database/models/Categoria.js';


router.get('/lista', (req, res) => {
    Categoria.find().then((categorias) => {
        res.render(
            'admin/categoria/categoria_lista',
            {categorias: categorias});
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro');
    });
});

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

export default router;
