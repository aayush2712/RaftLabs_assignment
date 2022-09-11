const express = require('express');
const router = express.Router();
const {
  getBooks,
  getMagazines,
  findBooks,
  findMagazines,
  getAuthors,
  findByAuthor,
  getSort,
  addBook,
  addMagazine,
} = require('./controllers');

router.route('/books').get(getBooks).post(addBook);
router.route('/authors').get(getAuthors);
router.route('/books/:id').get(findBooks);
router.route('/authors/:id').get(findByAuthor);
router.route('/magazines').get(getMagazines).post(addMagazine);
router.route('/magazines/:id').get(findMagazines);
router.route('/getSort').get(getSort);

module.exports = router;
