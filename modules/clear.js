'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// connecting to our mongo database called "cats-database" using mongoose
mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});
// this is where the connection actually happens
const db = mongoose.connection;
// is turning the db on and checking for any errors
db.on('error', console.error.bind(console, 'connection error:'));
// if my db is connected properly, I should see this console.log after "listening on PORT 3001"
db.once('open', function() {
  console.log('Mongoose is connected for clearing...');
});

const Book = require('../models/books');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Books cleared');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

clear();
