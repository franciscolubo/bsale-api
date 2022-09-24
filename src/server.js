const express = require('express')
const ROUTES = require('./routes/routes')
require('dotenv').config()

const SERVER = express()

SERVER.use(express.json())
SERVER.use('/', ROUTES)

const PORT = process.env.PORT

SERVER.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})