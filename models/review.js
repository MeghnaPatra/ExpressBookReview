const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }
});

module.exports = mongoose.model('Review', reviewSchema);
