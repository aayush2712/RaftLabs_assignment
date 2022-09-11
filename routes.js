const express = require('express');
const router = express.Router();
const {
  getBooks,
  getMagazines,
  findBooks,
  findMagazines,
} = require('./controllers');

router.route('/books').get(getBooks);
router.route('/books/:id').get(findBooks);
router.route('/magazines').get(getMagazines);
router.route('/magazines/:id').get(findMagazines);

module.exports = router;
