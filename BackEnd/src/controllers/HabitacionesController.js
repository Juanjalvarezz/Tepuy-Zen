const Habitaciones = require('../models/HabitacionesModel');

exports.createHabitacion = async (req, res) => {
  try {
    const { name, price1, price2, huespedes, espacio, servicios, noServicios, descripcion, imagen} = req.body;
    const newHabitacion = new Habitaciones({ name, price1, price2, huespedes, espacio, servicios, noServicios, descripcion, imagen });
    await newHabitacion.save();
    res.status(201).send(newHabitacion);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getHabitacion = async (req, res) => {
  try {
    const habitaciones = await Habitaciones.find();
    res.send(habitaciones);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHabitacionById = async (req, res) => {
  try {
    const habitacion = await Habitaciones.findById(req.params.id);
    if (!habitacion) {
      return res.status(404).send();
    }
    res.send(habitacion);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateHabitacion = async (req, res) => {
  try {
    const { name, price1, price2, huespedes, espacio, servicios, noServicios, descripcion, imagen } = req.body;
    const habitacion = await Habitaciones.findByIdAndUpdate(req.params.id, { name, price1, price2, huespedes, espacio, servicios, noServicios, descripcion, imagen}, { new: true });
    if (!habitacion) {
      return res.status(404).send();
    }
    res.send(habitacion);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitaciones.findByIdAndDelete(req.params.id);
    if (!habitacion) {
      return res.status(404).send();
    }
    res.send(habitacion);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const imageUrl = req.file.path;

    // Aquí debes guardar la URL de la imagen en la habitación correspondiente en la base de datos
    // Puedes acceder al ID de la habitación a través de req.body.habitacionId o cualquier otro método que utilices

    return res.status(200).send({
      status: 'success',
      message: 'Imagen subida correctamente',
      imageUrl: imageUrl // Opcional: puedes devolver la URL de la imagen en la respuesta
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      status: 'error',
      message: 'Error al subir la imagen'
    });
  }
};
