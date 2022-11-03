'use strict';

const Book = require('../models/books');

// refactoring from lab11 to include POST and DELETE handler function 
const Handler = {};

Handler.getBooks = async (req, res, next) => {
  try {
    // if i pass an empty object, that tells Mongoose to get ALL the documents from database 
    const books = await Book.find({});
    res.status(200).send(books);
  }
  catch (error) {
    error.customMessage = 'Something went wrong when getting your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

Handler.createBook = async (req, res, next) => {
  try {
    const books = await Book.create(req.body);
    res.status(201).send(books);
  }
  catch (error) {
    error.customMessage = 'Something went wrong when creating your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

Handler.deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    // express response objects will not forward a response body if response status code is 204 no content
    res.status(200).send('Your book is deleted!');
  }
  catch (error) {
    error.customMessage = 'Something went wrong when deleting your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

Handler.updateBook = async (req, res, next) => {
  try {
    // need id params and updated info in the req body, add option of new: true to show updated
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
    // express response objects will not forward a response body if response status code is 204 no content
    res.status(200).send(updatedBook);
  }
  catch (error) {
    error.customMessage = 'Something went wrong with updating your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
};

module.exports = Handler;
