import mongoose from "../config_db.js";

// Model
const PostagemSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    titulo_slug: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria',
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// Collection
const Postagem = mongoose.model('postagem', PostagemSchema);

export default Postagem;
