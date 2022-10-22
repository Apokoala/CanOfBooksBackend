'use strict';

const Book = require('../models/books');

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.status(200).send(books);
  }
  catch (error) {
    console.log('error');
    next(error);
  }
// empty object gives all the cats
};

module.exports = getBooks;
