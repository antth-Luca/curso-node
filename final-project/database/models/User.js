import mongoose from '../config_db.js';

// Model
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    data_nasc: {
        type: Date,
        required: true
    }
});

// Collection
const User = mongoose.model('user', UserSchema);

export default User;
