import app from './config.js';

import adminRouter from './routes/admin.js'

import Model from './database/models/User.js';

const PORT = 3000

// Routes
app.use('/admin', adminRouter);

// Server start
app.listen(PORT, () => {
    console.log('O server está rodando!');
});