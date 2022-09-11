const mongoose = require('mongoose');

const MagazineSchema = new mongoose.Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Magazine', MagazineSchema);
