import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Rotas
app.get('/', (req, res) => {
    res.send('Seja bem-vindo à minha aplicação Express.js!');
});

app.get('/hello', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/hello/:nome', (req, res) => {
    res.send('Olá, ' + req.params.nome + '!');
});

app.get('/hello-html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'hello.html'));
});

app.get('/sobre', (req, res) => {
    res.send('Esta é uma aplicação simples sendo desenvolvida em Express.js.');
});

// Iniciando o server
app.listen(3000, () => {
    console.log('O server está rodando!');
});
