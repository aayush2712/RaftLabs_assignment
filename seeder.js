const mongoose = require('mongoose');
const dotenv = require('dotenv');
const csvToJson = require('convert-csv-to-json');

dotenv.config({ path: './config.env' });

const Book = require('./models/Book');
const Magazine = require('./models/Magazine');

mongoose.connect(process.env.MONGO_URI);

const books = csvToJson.getJsonFromCsv('./data/books.csv');

const magazines = csvToJson.getJsonFromCsv('./data/magazines.csv');

const importData = async () => {
  try {
    await Book.create(books);
    await Magazine.create(magazines);
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
