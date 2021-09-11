const { Sequeilze, DataTypes } = require('sequelize')
const sequelize = require('./../util/databaseconnect')

const todos = sequelize.define('todos', {
  todo_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  aisle: {
    type: DataTypes.ENUM('Baking', 'Beverage', 'Bread', 'Personal Care', 'Candy and Snack', 'Canned Goods', 'Condiment', 'Dairy', 'Boxed Dinners and Pasta', 'Paper Products and Cleaning'),
    allowNull: false
  }
})

module.exports = todos