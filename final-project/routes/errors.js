import express from 'express';

const router = express.Router();

router.get('/404', (req, res) => {
    res.send('Erro 404!');
});

export default router;