const mongoose = require('mongoose');

// Modelo para el Formulario de Reservas
const reservaSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  fechaEntrada: Date,
  fechaSalida: Date,
  correo: String,
});

module.exports = mongoose.model('Reserva', reservaSchema);
