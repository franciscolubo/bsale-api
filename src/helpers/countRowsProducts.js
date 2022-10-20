const { conectionDB } = require('../database/db')

const countRowsProducts = (addSQL, cb) => {
    const SQL = 'SELECT count(*) as count FROM productos '

    try {
        return conectionDB(SQL + addSQL, result => cb(result[0].count))
    } catch (error) {
        throw { status: error.status, message: error.message }
    }
}

module.exports = { countRowsProducts }