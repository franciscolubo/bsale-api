const express = require('express')
const categoriesControllers = require('../controllers/categories.controllers')
const categoriesRoutes = express.Router()

categoriesRoutes
    .get('/', categoriesControllers.getCategories)
    .post('/', categoriesControllers.createCategory)
    .patch('/:id', categoriesControllers.updateCategory)
    .delete('/:id', categoriesControllers.deleteCategory)

module.exports = categoriesRoutes