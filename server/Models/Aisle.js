const {Sequeilze, DataTypes} = require('sequelize')
const sequelize = require('./../util/databaseconnect')

const aisles = sequelize.define('aisles', {
  aisle_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  description: DataTypes.STRING
})

module.exports = aisles