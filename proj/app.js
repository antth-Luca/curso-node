import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';

import { User } from './database/models/User.js';

// Config
    // Express
    const app = express();
    // Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json())


// Routes
app.get('/hello', (req, res) => {
    res.render('hello');
});

app.get('/usuario/create', (req, res) => {
    res.render('usuario_form');
});

app.post('/usuario/create', (req, res) => {
    User.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        email: req.body.email,
        data_nasc: req.body.data_nasc
    }).then(() => {
        res.redirect('/hello');
    }).catch((error) => {
        res.send('Failed: ' + error);
    });
});


// Server start
app.listen(3000, () => {
    console.log('O server está rodando!');
});
