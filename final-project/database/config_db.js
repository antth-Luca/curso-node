import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/blogexpress')
    .then(() => {
        console.log('>> MongoDB conectado...');
    }).catch((error) => {
        console.log('>> Houve um erro: ' + error);
    });

export default mongoose;
