const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
  type: String,
  encodeId: String,
  thumbnail: String,
  title: String,
  sortDescription: String,
  artists: Array,
  artistsName: String,
  album: Object,
  duration: Number,
  hasLyric: Boolean,
  mvlink: String,
  releaseDate: String,
  streamingStatus: Number,
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('history', historySchema)
