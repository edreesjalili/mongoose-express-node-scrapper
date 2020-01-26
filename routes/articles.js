const router = require('express').Router();

const {
  handleIndex
} = require('../controllers/articles');

router
  .get('/', handleIndex);

module.exports = router;
