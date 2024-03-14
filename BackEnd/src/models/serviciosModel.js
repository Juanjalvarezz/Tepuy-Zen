const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  name: String, 
  description: String, 
  imagen: String 
});

const Servicios = mongoose.model('services', opinionSchema);

module.exports = Servicios;