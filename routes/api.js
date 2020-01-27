const router = require('express').Router()
const { handleScrape } = require('../controllers/scrape')

router.get('/scrape', handleScrape)

module.exports = router
