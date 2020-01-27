const Articles = {
  async save(articleId, saved) {
    const url = `/api/articles/${articleId}`
    try {
      await axios.put(url, { saved: !saved })
      window.location.reload()
    } catch (error) {
      alert('Failed to save article!')
    }
  },
}

window.Articles = Articles
