const axios = require('axios').default;
const fs = require('fs');

axios
  .get(
    'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv'
  )
  .then(function (response) {
    const books = response.data;
    fs.appendFile('./data/books.csv', books, (err) => {
      if (err) console.log(err);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .get(
    'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv'
  )
  .then(function (response) {
    const authors = response.data;
    fs.appendFile('./data/authors.csv', authors, (err) => {
      if (err) console.log(err);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

axios
  .get(
    'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv'
  )
  .then(function (response) {
    const magazines = response.data;
    fs.appendFile('./data/magazines.csv', magazines, (err) => {
      if (err) console.log(err);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
