const { conectionDB } = require('../database/db')

const getCategories = (req, res) => {
    const SQL = 'SELECT * FROM category'
    conectionDB(SQL, result => {
        res.status(200).json(result)
    })
}

const createCategory = (req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(404).send('Missing filds')
    }

    const SQL = `INSERT INTO category (name) VALUES ('${name}')`
    try {
        conectionDB(SQL, result => {
            res.status(201).json(result)
        })
    } catch (error) {
        throw { status: error.status, message: error.message }
    }
}

const updateCategory = (req, res) => {
    const { name } = req.body
    const { id } = req.params

    if (!id) {
        res.status(404).send('Missing id')
    }

    if (!name) {
        res.status(404).send('Missing filds')
    }

    const SQL = `UPDATE category SET name = '${name}' WHERE id = ${id}`
    try {
        conectionDB(SQL, result => {
            res.status(200).json(result)
        })
    } catch (error) {
        throw { status: error.status, message: error.message }
    }
}

const deleteCategory = (req, res) => {
    const { id } = req.params

    if (!id) {
        res.status(404).send('Missing filds')
    }

    const SQL = `DELETE FROM category WHERE id = ${id}`
    try {
        conectionDB(SQL, result => {
            res.status(200).json(result)
        })
    } catch (error) {
        throw { status: error.status, message: error.message }
    }
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
}