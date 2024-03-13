const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  name: String, 
  price: Number, 
  importance: Number, 
  imagen: String 
});

const Opinion = mongoose.model('artic', opinionSchema);

module.exports = Opinion;