const express = require('express')
// const conectionDB = require('../db.js')
const obtenerData = require('../db.js')
const ROUTES = express.Router()

ROUTES.get('/text', (req, res) => {
    // conectionDB()
    obtenerData()
    res.send('hola')
})

module.exports = ROUTES