const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('perntodo', 'postgres', 'celeste', {
    dialect: 'postgres',
    host: 'localhost',
    logging: false
});

module.exports = sequelize;

