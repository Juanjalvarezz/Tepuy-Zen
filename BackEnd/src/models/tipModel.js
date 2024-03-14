const mongoose = require('mongoose');

const tipsSchema = new mongoose.Schema({
  name: String, 
  description: String, 
  imagen: String 
});

const Tips = mongoose.model('tips', tipsSchema);

module.exports = Tips;