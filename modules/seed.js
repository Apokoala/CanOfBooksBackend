'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cats-database', {useNewUrlParser: true, useUnifiedTopology: true});
// assigns the connection as a variable
const db = mongoose.connection;

//THIS TURNS THE DB ON AND CHECKS FOR ERRORS.
db.on('error', console.error.bind(console, 'connection error:'));

//
db.once('open', function() {
  console.log('Mongoose is connected for seeding')
});

app.get('/test', (req, res) => res.send('test request received'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));

const Book = require('../models/books');

//async function to seed  
async function seed() {
    console.log('seeding database...');
//will need to put in three
await Book.create({
    title: String,
    description: String,
    status: String
})

console.log ('done seeding!');

mongoose.disconnect();

}

seed();