const Aisles = require("../Models/Aisle");
const Todos = require("../Models/Todo")

Aisles.hasOne(Todos, { foreignKey: 'aislesTodos'});

// Añade una clave userId a la tabla addresses
Todos.belongsTo(Aisles, {  foreignKey: 'aislesTodos' });
console.log("Paso algo?")