const { Article } = require('../models')

/* === html handlers === */
const getAll = async (req, res) => {
  const articles = await Article.find({})
    .limit(100)
    .lean()
  res.render('articles/index', { title: 'Articles', header: 'Recent Articles', articles })
}

const getSaved = async (req, res) => {
  const articles = await Article.find({})
    .where({ saved: true })
    .limit(100)
    .lean()
  res.render('articles/index', { title: 'Saved Articles', header: 'Saved Articles', articles })
}

/* === api handlers === */

const saveArticle = async (req, res) => {
  try {
    const { id } = req.params
    const { saved } = req.body
    await Article.updateOne({ _id: id }, { saved })
    res.send('ok')
  } catch (error) {
    res.status(500).send()
  }
}

const deleteAll = async (req, res) => {
  try {
    await Article.deleteMany({})
    res.send('ok')
  } catch (error) {
    res.status(500).send()
  }
}

module.exports = {
  getAll,
  getSaved,
  saveArticle,
  deleteAll,
}
