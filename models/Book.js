const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a name'],
  },
  isbn: {
    type: String,
    required: [true, 'Please add a isbn'],
  },
  authors: {
    type: String,
    required: [true, 'Please add an email'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
});

module.exports = mongoose.model('Book', BooksSchema);
