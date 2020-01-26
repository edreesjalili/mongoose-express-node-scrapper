const handleIndex = (req, res) => {
  res.render('articles/index', { title: 'Articles' });
};

module.exports = {
  handleIndex
};
