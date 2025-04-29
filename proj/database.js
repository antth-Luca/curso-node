import Sequelize from 'sequelize';

const sequelize = new Sequelize('cadastrosexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    define: {
        timestamps: true,
        underscored: true
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch((error) => {
    console.log('Falha ao se conectar: ' + error);
});

const Usuario = sequelize.define('usuario', {
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
        type: Sequelize.DATE
    }
});

Usuario.create({
    nome: 'Luca',
    sobrenome: 'Anthony',
    email: 'luca@mail.com',
    data_nasc: new Date('2005-05-09')
});
