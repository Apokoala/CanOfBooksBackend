'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: String,
  description: String,
  status: String
});

//after making a schema you have to model it
//this will pass it into the collection using the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

