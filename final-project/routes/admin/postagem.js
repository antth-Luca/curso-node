import express from 'express';

import Postagem from '../../database/models/Postagem.js';

const router = express.Router();

// Read
router.get('/lista', (req, res) => {
    Postagem.find().sort({date: 'desc'}).then((postagens) => {
        res.render('admin/postagem/postagem_lista', {postagens: postagens});
    }).catch((error) => {
        req.flash('error_msg', 'Houve um erro.');
    });
});

export default router;
