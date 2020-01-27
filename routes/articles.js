const router = require('express').Router()

const { getAll } = require('../controllers/articles')

router.get('/', getAll)

module.exports = router
