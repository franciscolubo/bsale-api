const mysql = require('mysql')
require('dotenv').config()

const db_config = {
    host: process.env.HOST,
    user: process.env.USER,
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

const callProducts = (callback) => {
    const SQL = 'SELECT * FROM product'
    pool.query(SQL, (err, results, fields) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}

const callCategories = (callback) => {
    const SQL = 'SELECT * FROM category'
    pool.query(SQL, (err, results, fields) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}

const callByCategory = (value, callback) => {
    const SQL = `SELECT * FROM product WHERE category = ${value}`
    pool.query(SQL, (err, results, fields) => {
        if (err) {
            throw err
        }
        callback(results)
    })
}



module.exports = { conectionDB, callProducts, callCategories, callByCategory }