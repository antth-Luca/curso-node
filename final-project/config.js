import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import flash from 'connect-flash';
import path from 'path';
import { fileURLToPath } from 'url';

import User from './database/models/User.js';

// Express
const app = express();
// Auth with Passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'senha'
},
    (email, senha, done) => {
        User.findOne({email: email}).then((user) => {
            if (!user) {
                return done(null, false, {message: 'Essa conta não existe'});
            }

            bcrypt.compare(senha, user.senha, (error, match) => {
                if (match) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Senha incorreta'});
                }
            })
        });
    }
));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user))
        .catch(error => done(error, null));
});
// Session
app.use(session({
    secret: 'cursonode#blogexpress',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Middlewares
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
// Template Engine
app.engine('handlebars', engine({
    helpers: {
        ifEquals: (a, b, options) => {
            return String(a) === String(b) ? options.fn(this) : options.inverse(this);
        }
    },
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
