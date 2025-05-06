import router from '../Router.js';
import categoriaRouter from './categoria.js';

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.use('/categoria', categoriaRouter);

export default router;
