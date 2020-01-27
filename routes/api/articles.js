const router = require('express').Router()
const { saveArticle, deleteAll } = require('../../controllers/articles')

router.delete('/', deleteAll).put('/:id', saveArticle)

module.exports = router
