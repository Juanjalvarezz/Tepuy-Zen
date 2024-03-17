const Reserva = require('../models/reservaModel');

// Controlador de las Reservas
exports.createReserva = async (req, res) => {
  const { nombre, apellido, fechaEntrada, fechaSalida, correo} = req.body;

  const reserva = new Reserva({
    nombre,
    apellido,
    fechaEntrada,
    fechaSalida,
    correo,
  });

  try {
    await reserva.save();
    res.status(201).send('Reserva creada');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la reserva');
  }
};
