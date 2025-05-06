import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

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
// Files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Static files
app.use(express.static(path.join(__dirname, 'public')));

export default app;
