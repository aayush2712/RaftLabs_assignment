const Book = require('./models/Book');
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
