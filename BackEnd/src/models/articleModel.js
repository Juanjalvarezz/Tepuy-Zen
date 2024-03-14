const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: String, 
  price: Number, 
  importance: Number, 
  imagen: String 
});

const Article = mongoose.model('artic', articleSchema);

module.exports = Article;