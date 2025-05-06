import router from './Router.js';

router.get('/', (req, res) => {
    res.send('Página principal do ADMIN');
});

router.get('/post', (req, res) => {
    res.send('Página de posts');
});

router.get('/categoria', (req, res) => {
    res.send('Página de categorias');
});

export default router;
