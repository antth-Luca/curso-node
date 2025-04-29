import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem-vindo à minha aplicação Express.js!');
});

app.get('/hello', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/hello/:nome', (req, res) => {
    res.send('Olá, ' + req.params.nome + '!');
});

app.get('/sobre', (req, res) => {
    res.send('Esta é uma aplicação simples sendo desenvolvida em Express.js.');
});


app.listen(3000, () => {
    console.log('O server está rodando!');
});
