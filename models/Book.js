// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  coverImage: {
    type: String, // URL or filename
  },
  publishedYear: {
    type: Number,
  },
});

module.exports = mongoose.model('Book', bookSchema);
