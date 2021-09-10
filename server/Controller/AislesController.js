const { Sequelize, Models, DataType } = require('sequelize')
const Aisles = require("../Models/Aisle")

let categoryId = 0

let categories = [
    {
        description: 'Baking',
        id: ++categoryId
    },
    {
        description: 'Beverage',
        id: ++categoryId
    },
    {
        description: 'Bread',
        id: ++categoryId
    },
    {
        description: 'Personal Care',
        id: ++categoryId
    },
    {
        description: 'Candy and Snack',
        id: ++categoryId
    },
    {
        description: 'Canned Goods',
        id: ++categoryId
    },
    {
        description: 'Condiment',
        id: ++categoryId
    },
    {
        description: 'Dairy',
        id: ++categoryId
    },
    {
        description: 'Boxed Dinners and Pasta',
        id: ++categoryId
    },
    {
        description: 'Paper Products and Cleaning',
        id: ++categoryId
    },
];
exports.getAisles = (req, res, next) => {
    Aisles.findAll()
        .then((response) => {
            if (response.length>0) {
                return res.json(response).status(200);
            } else {
                Aisles.bulkCreate(categories)
                    .then((response) => {
                        return res.json(response);
                    })
                    .catch((error) => next(error));
            }
        })
        .catch((error) => next(error));
}