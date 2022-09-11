const Book = require('./models/Book');
const Author = require('./models/Author');
const Magazine = require('./models/Magazine');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      count: books.length,
      data: books,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getMagazines = async (req, res) => {
  try {
    const magazines = await Magazine.find();
    res.status(200).json({
      success: true,
      count: magazines.length,
      data: magazines,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json({
      success: true,
      count: authors.length,
      data: authors,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.findByAuthor = async (req, res) => {
  try {
    const result1 = await Book.find({ authors: `${req.params.id}` });
    const result2 = await Magazine.find({ authors: `${req.params.id}` });
    res.status(200).json({
      success: true,
      count: result1.length + result2.length,
      books: result1,
      magazines: result2,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.getSort = async (req, res) => {
  try {
    const result1 = await Book.find();
    const result2 = await Magazine.find();
    let result = result1.concat(result2);

    function GetSortOrder(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    }

    result = result.sort(GetSortOrder('title'));

    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.addMagazine = async (req, res) => {
  try {
    const magazine = await Magazine.create(req.body);
    res.status(200).json({
      success: true,
      data: magazine,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.findBooks = async (req, res) => {
  try {
    const book = await Book.find({ isbn: `${req.params.id}` }).exec();
    if (book == '') {
      return next(
        res.status(400).json({
          success: false,
          msg: 'Invaild ISBN',
        })
      );
    }

    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

exports.findMagazines = async (req, res, next) => {
  try {
    const magazine = await Magazine.find({ isbn: `${req.params.id}` }).exec();
    if (magazine == '') {
      return next(
        res.status(400).json({
          success: false,
          msg: 'Invaild ISBN',
        })
      );
    }
    res.status(200).json({
      success: true,
      data: magazine,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
