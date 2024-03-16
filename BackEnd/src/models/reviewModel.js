const mongoose = require('mongoose');

const habitacionEnum = ['Cuarto Simple', 'Cuarto Simple Deluxe', 'Cuarto Doble', 'Cuarto Doble Deluxe', 'Habitación Doble', 'Habitación Doble Deluxe'];

const reviewSchema = new mongoose.Schema({
  name: String, 
  habitacion: { type: String, enum: habitacionEnum },
  opinion: String, 
  puntuacion: Number, 
});

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
