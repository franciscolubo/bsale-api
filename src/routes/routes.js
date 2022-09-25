const express = require('express')
const { callProducts, callCategories, callByCategory } = require('../db.js')
const ROUTES = express.Router()

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

ROUTES.get('/categories/:category', (req, res) => {
    const { category } = req.params
    callByCategory(category, result => {
        res.status(200).json(result)
    })
})

module.exports = ROUTES