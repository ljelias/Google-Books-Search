const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  imageUrl: {type: String, required: false},
  summary: {type: String, required: false},
  link: {type: String, required: false}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
