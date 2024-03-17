const express = require('express');
const reservaController = require('../controllers/reservaController');

const router = express.Router();

//Ruta para crear una Reserva
router.post('/', reservaController.createReserva);

module.exports = router;
