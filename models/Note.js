const mongoose = require('mongoose')
const Article = require('./Article')

const Schema = mongoose.Schema

const noteSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
  },
  createdAt: {
    type: Date,
    default() {
      return Date.now()
    },
  },
  text: String,
}).pre('remove', async function preRemoveNote() {
  await Article.findByIdAndUpdate(this.article, { $pull: { notes: this._id } })
})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note
