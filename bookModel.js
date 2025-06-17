const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  in_stock: {
    type: Boolean,
    required: true,
  },
  pages: {
    type: Number,
  },
  published_year: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
