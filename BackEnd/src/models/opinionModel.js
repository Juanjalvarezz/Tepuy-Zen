const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  name: String, 
  opinion: String, 
  puntuacion: Number, 
});

const Opinion = mongoose.model('op', opinionSchema);

module.exports = Opinion;