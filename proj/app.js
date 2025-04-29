import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { engine } from 'express-handlebars';
import Sequelize from 'sequelize';

// Config
    // Files
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Express
    const app = express();
    // Template Engine
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Database
    const sequelize = new Sequelize('cadastrosexpress', 'root', '', {
        host: 'localhost',
        dialect: 'mysql'
    });

// Rotes
app.get('/cadastrar-usuario', (req, res) => {
    res.render('usuario_form');
});


// Server start
app.listen(3000, () => {
    console.log('O server está rodando!');
});
