const { Sequelize, Models, DataType } = require('sequelize')
const Todos = require("../Models/Todo")

exports.getTodos = (req, res, next) => {
  Todos.findAll({ order: [["createdAt", "DESC"]] }).then(todos => {
    res.status(200).json({
      todos: todos
    })
  })
}

exports.postTodos = async (req, res, next) => {
  const { description, aisle } = req.body
  if (!description || !aisle) return res.send({ error: 500, message: "All fields are required" });
  if (aisle !== 'Baking' && aisle !== 'Beverage' && aisle !== 'Bread' && aisle !== 'Personal Care' && aisle !== 'Candy and Snack' && aisle !== 'Canned Goods' && aisle !== 'Condiment' && aisle !== 'Dairy' && aisle !== 'Boxed Dinners and Pasta' && aisle !== 'Paper Products and Cleaning') {
    return res.send({ error: 500, message: "Not a valid aisle" });
  }
  try {
    const newTodos = await Todos.create({
      description: description,
      aisle: aisle
    })
    res.status(200).json({
      newEntry: newTodos
    })
  } catch (error) {
    console.log(error)
  }
}

exports.updateTodos = async (req, res, next) => {
  const id = req.params.id
  const { description, aisle } = req.body
  if (!description || !aisle) return res.send({ error: 500, message: "All fields are required" });
  if (aisle !== 'Baking' && aisle !== 'Beverage' && aisle !== 'Bread' && aisle !== 'Personal Care' && aisle !== 'Candy and Snack' && aisle !== 'Canned Goods' && aisle !== 'Condiment' && aisle !== 'Dairy' && aisle !== 'Boxed Dinners and Pasta' && aisle !== 'Paper Products and Cleaning') {
    return res.send({ error: 500, message: "Not a valid aisle" });
  }
  try {
    const editedTodos = await Todos.update({
      description: description,
      aisle: aisle
    }, {
      where: {
        id: id
      }
    })
    res.status(200).json({
      status: "Updated"
    })
  } catch (error) {
    console.log(error)
  }
}

exports.deleteTodos = async (req, res, next) => {
  const id = req.params.id
  const { description } = req.body
  try {
    const deleteTodos = await Todos.destroy(
      { where: { id: id } })
    res.status(200).json({
      status: "Deleted"
    })
  } catch (error) {
    console.log(error)
  }
}