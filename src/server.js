const express = require('express')
const { conectionDB } = require('./db')
const ROUTES = require('./routes/routes')
const cors = require('cors')
require('dotenv').config()

const SERVER = express()
conectionDB()

SERVER.use(express.json())
SERVER.use(cors())

SERVER.use('/', ROUTES)

const PORT = process.env.PORT

SERVER.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})