const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const auth = require('../middleware/auth');

// Add a review
router.post('/', auth, async (req, res) => {
  const review = new Review({
    content: req.body.content,
    rating: req.body.rating,
    user: req.user._id,
    book: req.body.bookId
  });
  await review.save();
  res.json(review);
});

// Modify a review
router.put('/:id', auth, async (req, res) => {
  const review = await Review.findOne({ _id: req.params.id, user: req.user._id });
  if (!review) return res.status(404).send('Review not found');
  review.content = req.body.content;
  review.rating = req.body.rating;
  await review.save();
  res.json(review);
});

// Delete a review
router.delete('/:id', auth, async (req, res) => {
  const review = await Review.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  if (!review) return res.status(404).send('Review not found');
  res.json({ message: 'Review deleted' });
});

module.exports = router;
