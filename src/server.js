const express = require('express')
const productsRoutes = require('./routes/products.routes')
const categoriesRoutes = require('./routes/categories.routes')
const cors = require('cors')
require('dotenv').config()

const SERVER = express()

SERVER.use(express.json())
SERVER.use(cors())

SERVER.use('/products', productsRoutes)
SERVER.use('/categories', categoriesRoutes)

const PORT = process.env.PORT || 3001

SERVER.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})