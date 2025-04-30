import { Sequelize, sequelize } from '../config_db.js';

const User = sequelize.define('user', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    data_nasc: {
        type: Sequelize.DATEONLY
    }
});

export { User };
