'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const Handler = require('./modules/handlers');

const app = express();
app.use(cors());
app.use(express.json()); // has server update with json data 

const PORT = process.env.PORT || 3002;

//mongoose stuff
//connect to our mongo databsase using mongoose
mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});
// assigns the connection as a variable
const db = mongoose.connection;

//THIS TURNS THE DB ON AND CHECKS FOR ERRORS.
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

app.get('/test', (req, res) => res.send('test request received'));

app.get('/books', Handler.getBooks);
app.post('/books', Handler.createBook);
// id is params
app.delete('/books:id', Handler.deleteBook);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
