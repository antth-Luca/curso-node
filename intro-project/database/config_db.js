import Sequelize from 'sequelize';

const sequelize = new Sequelize('cadastrosexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export { Sequelize, sequelize };
