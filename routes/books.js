const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get book by ISBN
router.get('/isbn/:isbn', async (req, res) => {
  const book = await Book.findOne({ isbn: req.params.isbn });
  res.json(book);
});

// Get books by author
router.get('/author/:author', async (req, res) => {
  const books = await Book.find({ author: req.params.author });
  res.json(books);
});

// Get books by title
router.get('/title/:title', async (req, res) => {
  const books = await Book.find({ title: req.params.title });
  res.json(books);
});

module.exports = router;
