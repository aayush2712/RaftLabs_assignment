const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  isbn: {
    type: String,
    required: [true, 'Please add a isbn'],
  },
  authors: {
    type: [String],
    required: [true, 'Please add an author'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
});

module.exports = mongoose.model('Book', BooksSchema);
