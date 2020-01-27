const router = require('express').Router()

const { getAll, getSaved } = require('../controllers/articles')

router.get('/', getAll).get('/saved', getSaved)

module.exports = router
