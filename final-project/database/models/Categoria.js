import mongoose from '../config_db.js';

// Model
const CategoriaSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    nome_slug: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// Collection
const Categoria = mongoose.model('categoria', CategoriaSchema);

export default Categoria;
