const mongoose = require('mongoose');

const promosSchema = new mongoose.Schema({
  name: String, 
  price: Number, 
  duracion: String, //importance
  imagen: String 
});

const Promos = mongoose.model('promos', promosSchema);

module.exports = Promos;