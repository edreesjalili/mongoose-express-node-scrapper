const { Article } = require('../models')

const getAll = async (req, res) => {
  const articles = await Article.find({})
    .limit(100)
    .lean()
  res.render('articles/index', { title: 'Articles', articles })
}

module.exports = {
  getAll,
}
