const mongoose = require('mongoose');

const HabitacionesSchema = new mongoose.Schema({
    name: String, ///titulo
    price1: Number, //percio weekday
    price2: Number, //precio weekend
    descripcion: String, //importance
    huespedes: String, //numero de huespedes
    espacio: String, //Tamano
    servicios: String,
    noServicios: String,
    stars: Number,
    imagen: String, //imagen
});

const Habitaciones = mongoose.model('habs', HabitacionesSchema);

module.exports = Habitaciones;