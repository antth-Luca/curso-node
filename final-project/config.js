import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';

// Express
const app = express();
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

export default app;
