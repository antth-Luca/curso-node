import app from './config.js';

import Model from './database/models/User.js';

const PORT = 3000

// Server start
app.listen(PORT, () => {
    console.log('O server está rodando!');
});