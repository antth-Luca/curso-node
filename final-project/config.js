import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'connect-flash';
import path from 'path';
import { fileURLToPath } from 'url';

// Express
const app = express();
// Session
app.use(session({
    secret: 'cursonode#blogexpress',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
// Middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});
// Template Engine
app.engine('handlebars', engine({
    defaultLayout: 'global',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Static files
app.use('/static', express.static(path.join(__dirname, 'public')));

export default app;
