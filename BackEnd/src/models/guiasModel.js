const mongoose = require('mongoose');

const guiasSchema = new mongoose.Schema({
  name: String, 
  age: Number, //price
  experience: Number, //importance
  lenguajes: String,
  stars: Number,
  imagen: String 
});

const Guias = mongoose.model('guias', guiasSchema);

module.exports = Guias;