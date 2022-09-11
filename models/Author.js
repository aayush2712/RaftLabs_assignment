const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please add an Email'],
  },
  firstname: {
    type: String,
    required: [true, 'Please add a First name'],
  },
  lastname: {
    type: String,
    required: [true, 'Please add an Last name'],
  },
});

module.exports = mongoose.model('Author', AuthorSchema);
