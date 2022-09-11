const mongoose = require('mongoose');
const dotenv = require('dotenv');
const csvToJson = require('convert-csv-to-json');

dotenv.config({ path: './config.env' });

const Book = require('./models/Book');
const Magazine = require('./models/Magazine');
const Author = require('./models/Author');

mongoose.connect(process.env.MONGO_URI);

const books = csvToJson.getJsonFromCsv('./data/books.csv');

for (i = 0; i < books.length; i++) {
  var obj = books[i];
  obj.authors = obj.authors.split(',');
  books[i].authors = obj.authors;
}

const magazines = csvToJson.getJsonFromCsv('./data/magazines.csv');
for (i = 0; i < magazines.length; i++) {
  var obj = magazines[i];
  obj.authors = obj.authors.split(',');
  magazines[i].authors = obj.authors;
}
const authors = csvToJson.getJsonFromCsv('./data/authors.csv');

const importData = async () => {
  try {
    await Book.create(books);
    await Magazine.create(magazines);
    await Author.create(authors);
    console.log('Data Imported..');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Book.deleteMany();
    await Magazine.deleteMany();
    await Author.deleteMany();
    console.log('Data destroyed..');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
