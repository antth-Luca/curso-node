import router from './Router.js';

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/post', (req, res) => {
    res.render('admin/post');
});

router.get('/categoria', (req, res) => {
    res.render('admin/categoria');
});

export default router;
