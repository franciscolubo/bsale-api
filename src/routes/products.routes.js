const express = require('express')
const productsController = require('../controllers/products.controllers')

const productsRoutes = express.Router()

// Creo mis distintos endpoints deseados

productsRoutes
    .get('/paginate/:page', productsController.getProductsPaginate)
    .get('/ordered', productsController.getProductsOrdered)
    .get('/category/:category', productsController.getProductsForCategory)
    .get('/search/:value', productsController.getProductsSearch)
    .post('/', productsController.createProduct)
    .patch('/:id', productsController.updateProduct)
    .delete('/:id', productsController.deleteProduct)

module.exports = productsRoutes