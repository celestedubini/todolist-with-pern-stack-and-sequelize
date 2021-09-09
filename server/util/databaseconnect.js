const Sequelize = require('sequelize');
const sequelize = new Sequelize('perntodo', 'postgres', 'celeste', {
    dialect: 'postgres',
    host: 'localhost',
    logging: false
});

module.exports = sequelize;