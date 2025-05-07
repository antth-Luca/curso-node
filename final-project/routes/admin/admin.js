import express from 'express';

import categoriaRouter from './categoria.js';
import postagemRouter from './postagem.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.use('/categoria', categoriaRouter);
router.use('/postagem', postagemRouter);

export default router;
