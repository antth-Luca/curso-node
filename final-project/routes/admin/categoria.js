import router from '../Router.js';

import Categoria from '../../database/models/Categoria.js';


router.get('/', (req, res) => {
    res.render('admin/categoria/categoria_lista');
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
            res.redirect('/admin/categoria');
        }).catch((error) => {
            console.log('Erro ao salvar: ' + error);
        });
});

export default router;
