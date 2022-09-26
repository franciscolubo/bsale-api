const mysql = require('mysql')
require('dotenv').config()

// Creo un objeto con la informacion de mi db_config, a traves de variables de entorno

const db_config = {
    host: process.env.HOST,
    user: process.env.USER,
    port: 3306,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}


const pool = mysql.createPool(db_config)
const conectionDB = () => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log('error when connect db', err)
        } else {
            console.log('Connect sucessfully')
        }
    })
}

// Realizo las distintas sentencias para MySQL con las siguientes funciones

const callProducts = (callback) => {
    const SQL = 'SELECT * FROM product ORDER BY category ASC'
    pool.query(SQL, (err, results) => {
        if (err) {
            throw err
        }
        callback(results) // Utilizo un callback para el manejo de los datos
    })
}

const callCategories = (callback) => {
    const SQL = 'SELECT * FROM category'
    pool.query(SQL, (err, results) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}

const callByCategory = (value, callback) => {
    const SQL = `SELECT * FROM product WHERE category = ${value}`
    pool.query(SQL, (err, results) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}

const callOrder = (order, type, callback) => {
    const SQL = `SELECT * FROM product ORDER BY ${type} ${order}`
    pool.query(SQL, (err, results) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}

const searchBar = (value, callback) => {
    const SQL = `SELECT * FROM product WHERE name LIKE '${value}%'`
    pool.query(SQL, (err, results) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}

module.exports = { conectionDB, callProducts, callCategories, callByCategory, callOrder, searchBar }
