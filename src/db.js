const mysql = require('mysql')
require('dotenv').config()

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    port: 3306,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

const conectionDB = () => {
    con.connect(err => {
    if (err) throw err
    console.log('Connect to database!')
})}

const obtenerData = () => {
    const SQL = `SHOW * FROM products`;
    con.query(SQL, (err, result) => {
        if (err) console.log('falle en obtener la data', err)
        console.log(result)
    })
}

module.exports = obtenerData