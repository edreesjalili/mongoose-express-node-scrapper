const router = require('express').Router();
const api = require('./api');
const articles = require('./articles');

router.use('/api', api);
router.use('/articles', articles);


router.use('/', (req, res) => res.redirect('/articles'));
router.use('*', (req, res) => res.render('error'));

module.exports = router;
