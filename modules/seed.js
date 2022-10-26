'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});
// assigns the connection as a variable
const db = mongoose.connection;

//THIS TURNS THE DB ON AND CHECKS FOR ERRORS.
db.on('error', console.error.bind(console, 'connection error:'));

//
db.once('open', function() {
  console.log('Mongoose is connected for seeding');
});

const Book = require('../models/books');

//async function to seed
async function seed() {
  console.log('seeding database...');
  //will need to put in three
  await Book.create({
    title: 'The Eye of the World',
    description: 'Moiraine Damodred arrives in Emond\'s Field on a quest to find the one prophesized to stand against The Dark One, a malicious entity sowing the seeds of chaos and destruction. When a vicious band of half-men, half beasts invade the village seeking their master\'s enemy, Moiraine persuades Rand al\'Thor and his friends to leave their home and enter a larger unimaginable world filled with dangers waiting in the shadows and in the light.',
    status: 'Adapted into a series on Amazon. Super good.'
  });

  await Book.create({
    title: 'Assassin\'s Apprentice',
    description: 'Born on the wrong side of the sheets, Fitz, son of Chivalry Farseer, is a royal bastard, cast out into the world, friendless and lonely. Only his magical link with animals - the old art known as the Wit - gives him solace and companionship. But the Wit, if used too often, is a perilous magic, and one abhorred by the nobility. So when Fitz is finally adopted into the royal household, he must give up his old ways and embrace a new life of weaponry, scribing, courtly manners; and how to kill a man secretly, as he trains to become a royal assassin.',
    status: 'Short, very well written series.'
  });

  await Book.create({
    title: 'Feynman\'s Rainbow',
    description: 'As a young physicist, Leonard Mlodinow looked for guidance from his mentor, the Nobel Prize-winning physicist Richard Feynman. Drawing on transcripts from their meetings during their time together at Cal Tech, Mlodinow shares Feynman\'s provocative thoughts and observations. At once a moving portrait of a friendship and an affecting account of Feynman\'s final, creative years, this book celebrates the inspiring legacy of one of the greatest thinkers of our time.',
    status: 'Beautiful book; amazing depiction of the humanity of our geniuses.'
  });

  console.log ('done seeding!');
  mongoose.disconnect();
}

seed();
