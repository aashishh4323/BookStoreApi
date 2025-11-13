const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
title: {
    type: String,
    // required:[ true,'Book Title is Required'],
    trim: true,
    maxlength:[100 , 'Book Title Cannot be more than 100 Words']
  },
  author: {
    type: String,
  //  required:[ true,'Author name  is Required'],
    trim: true,
    maxlength:100
  },
  genre: {
    type: String,
    default: 'Unknown',
  },
  publishedYear: {
    type: Number,
    // required:true,
    max:[new Date().getFullYear(), 'Year cannot be in the futur']
  },
  price: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Book' , BookSchema);
