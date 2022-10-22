'use strict';

const { response } = require('express');
const Book = require('../models/books');

const getBooks = async (req, res, next) => {
    try {
        const Books = await Book.find({});
        response.state(200).send(Books);
    }
    catch (error){
        console.log('error');
    }
        // empty object gives all the cats. 
}

module.exports = getBooks;
