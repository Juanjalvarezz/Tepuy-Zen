const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  name: String, 
  age: Number, //price
  experience: Number, //importance
  lenguajes: String,
  stars: Number,
  imagen: String 
});

const Opinion = mongoose.model('guias', opinionSchema);

module.exports = Opinion;