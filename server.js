'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('')

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

//mongoose stuff
//connect to our mongo databsase using mongoose
mongoose.connect('mongodb://localhost:27017/cats-database', {useNewUrlParser: true, useUnifiedTopology: true});
// assigns the connection as a variable
const db = mongoose.connection;

//THIS TURNS THE DB ON AND CHECKS FOR ERRORS.
db.on('error', console.error.bind(console, 'connection error:'));

//
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/test', (req, res) => res.send('test request received'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));
