const mongoose = require('mongoose');

const opinionSchema = new mongoose.Schema({
  name: String, 
  description: String, 
  imagen: String 
});

const Tips = mongoose.model('tips', opinionSchema);

module.exports = Tips;