const { conectionDB } = require('../database/db')
const { countRowsProducts } = require('../helpers/countRowsProducts')

const getProductsPaginate = (req, res) => {
    const { page } = req.params

    const SQL = `SELECT * FROM productos LIMIT ${(page - 1) * 10}, 10`
    countRowsProducts('', cb => {
        try {
            conectionDB(SQL, result => {
                res.status(200).json({
                    data: result,
                    totalRows: cb,
                    actuallyPage: +page
                })
            })
        } catch (error) {
            throw { stats: error.status, message: error.message }
        }
    })
}

const getProductsForCategory = (req, res) => {
    const { category } = req.params
    const { page } = req.query

    const SQL = `SELECT * FROM productos `
    const typeSQL = `WHERE id_category = ${category}`
    const pagination = ` LIMIT ${(page - 1) * 10}, 10`
    countRowsProducts(typeSQL, cb => {
        try {
            conectionDB(SQL + typeSQL + pagination, result => {
                res.status(200).json({
                    data: result,
                    totalRows: cb,
                    actuallyPage: +page
                })
            })
        } catch (error) {
            throw { stats: error.status, message: error.message }
        }
    })
}

const getProductsSearch = (req, res) => {
    const { value } = req.params
    const { page } = req.query

    const SQL = `SELECT * FROM productos `
    const typeSQL = `WHERE title LIKE '%${value}%'`
    const pagination = ` LIMIT ${(page - 1) * 10}, 10`
    countRowsProducts(typeSQL, cb => {
        try {
            conectionDB(SQL + typeSQL + pagination, result => {
                res.status(200).json({
                    data: result,
                    totalRows: cb,
                    actuallyPage: +page
                })
            })
        } catch (error) {
            throw { stats: error.status, message: error.message }
        }
    })
}

const getProductsOrdered = (req, res) => {
    const { order, type } = req.query
    const { page } = req.query

    const SQL = `SELECT * FROM productos `
    const typeSQL = `ORDER BY ${type} ${order}`
    const pagination = ` LIMIT ${(page - 1) * 10}, 10`
    countRowsProducts(typeSQL, cb => {
        try {
            conectionDB(SQL + typeSQL + pagination, result => {
                res.status(200).json({
                    data: result,
                    totalRows: cb,
                    actuallyPage: +page
                })
            })
        } catch (error) {
            throw { stats: error.status, message: error.message }
        }
    })
}

const createProduct = (req, res) => {
    const { title, price, discount, urlImage, id_category } = req.body

    if (!title || !price || discount < 0 || discount > 100 || !id_category) {
        res.status(404).send('Missing filds')
    }

    const SQL = `INSERT INTO productos (title, price, discount, urlImage, id_category) VALUES ('${title}', ${price}, ${discount}, '${urlImage}', ${id_category})`
    try {
        conectionDB(SQL, result => {
            res.status(201).json({ title, price, discount, urlImage, id_category })
        })
    } catch (error) {
        throw { status: error.status, message: error.message }
    }
}

const updateProduct = (req, res) => {
    const { title, price, discount, urlImage, id_category } = req.body
    const { id } = req.params
    if (!id) {
        res.status(404).send('Missing id to update')
    }

    if (!title || !price || discount > 100 || discount < 0 || !urlImage || !id_category) {
        res.status(404).send('Missing filds')
    }

    const SQL = `UPDATE productos SET title='${title}', price=${price}, discount=${discount}, urlImage='${urlImage}', id_category=${id_category} WHERE id=${id}`
    try {
        conectionDB(SQL, result => {
            res.status(200).json(result)
        })
    } catch (error) {
        throw { status: error.status, message: error.message }
    }

}

const deleteProduct = (req, res) => {
    const { id } = req.params

    if (!id) {
        res.status(404).send('Missing id to delete')
    }
    const SQL = `DELETE FROM productos WHERE id = ${id}`
    try {
        conectionDB(SQL, result => {
            res.status(200).json(result)
        })
    } catch (error) {
        throw { status: error.status, message: error.message }
    }
}

module.exports = {
    getProductsPaginate,
    getProductsForCategory,
    getProductsSearch,
    getProductsOrdered,
    createProduct,
    updateProduct,
    deleteProduct
}