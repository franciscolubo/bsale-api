const express = require('express')
const { callProducts, callCategories, callByCategory, callOrder, searchBar } = require('../db.js')
const ROUTES = express.Router()

// Creo mis distintos endpoints deseados

ROUTES.get('/products', (req, res) => {
    callProducts(result => {
        res.status(200).json(result)
    })
})

ROUTES.get('/categories', (req, res) => {
    callCategories(result => {
        res.status(200).json(result)
    })
})

ROUTES.get('/products/:category', (req, res) => {
    const { category } = req.params
    callByCategory(category, result => {
        res.status(200).json(result)
    })
})

ROUTES.get('/products/search/:value', (req, res) => {
    const { value } = req.params
    searchBar(value, result => {
        res.status(200).json(result)
    })
})

// Utilizo el metodo POST ya que me permite enviar informacion a travez del body y crear una busqueda mas personalizada

ROUTES.post('/products', (req, res) => {
    const { order, type } = req.body
    callOrder(order, type, result => {
        res.status(200).json(result)
    })
})


module.exports = ROUTES