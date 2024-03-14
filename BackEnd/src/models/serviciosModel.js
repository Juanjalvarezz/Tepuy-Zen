const mongoose = require('mongoose');

const serviciosSchema = new mongoose.Schema({
  name: String, 
  description: String, 
  imagen: String 
});

const Servicios = mongoose.model('services', serviciosSchema);

module.exports = Servicios;