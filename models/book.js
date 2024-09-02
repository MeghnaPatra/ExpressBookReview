const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Book', bookSchema);
