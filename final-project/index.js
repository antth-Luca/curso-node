import app from './config.js';
import userRouter from './routes/user.js';
import adminRouter from './routes/admin/admin.js';
import voidRouter from './routes/main.js';
import errorsRouter from './routes/errors.js';

// Consts
const PORT = 3000;

// Routes
app.use('/', userRouter);
app.use('/', voidRouter);
app.use('/admin', adminRouter);
app.use('/', errorsRouter);

// Server start
app.listen(PORT, () => {
    console.log('O server está rodando!');
});
