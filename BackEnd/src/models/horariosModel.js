const mongoose = require('mongoose');

const horariosSchema = new mongoose.Schema({
  name: String, 
  description: String, 
  imagen: String 
});

const Horarios = mongoose.model('horarios', horariosSchema);

module.exports = Horarios;