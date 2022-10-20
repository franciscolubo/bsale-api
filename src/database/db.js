const mysql = require('mysql')
require('dotenv').config()

// Creo un objeto con la informacion de mi db_config, a traves de variables de entorno

const db_config = {
    host: process.env.HOST,
    user: process.env.USER,
    port: 3306,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10
}


const pool = mysql.createPool(db_config)

const conectionDB = (SQL, callback) => {
    pool.getConnection((err, connection) => {
        if (err) {
            connection.release()
            throw err
        }

        connection.query(SQL, (err, results) => {
            if (err) {
                throw err
            }
            callback(results)
        })

        connection.release()
    })
}

module.exports = { conectionDB }
