const Horario = require('../models/horariosModel');

exports.createHorario = async (req, res) => {
  try {
    const { name, description, imagen } = req.body;
    const newHorario = new Horario({ name, description, imagen });
    await newHorario.save();
    res.status(201).send(newHorario);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getHorarios = async (req, res) => {
  try {
    const horarios = await Horario.find();
    res.send(horarios);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHorarioById = async (req, res) => {
  try {
    const horario = await Horario.findById(req.params.id);
    if (!horario) {
      return res.status(404).send();
    }
    res.send(horario);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateHorario = async (req, res) => {
  try {
    const { name, description, imagen } = req.body;
    const horario = await Horario.findByIdAndUpdate(req.params.id, { name, description, imagen }, { new: true });
    if (!horario) {
      return res.status(404).send();
    }
    res.send(horario);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteHorario = async (req, res) => {
  try {
    const horario = await Horario.findByIdAndDelete(req.params.id);
    if (!horario) {
      return res.status(404).send();
    }
    res.send(horario);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.uploadImage = async (req, res) => {
  try {
    // Suponiendo que estás utilizando Multer para manejar la carga de archivos en el backend
    // En este punto, req.file contiene la información del archivo subido
    const imageUrl = req.file.path;

    // Aquí debes guardar la URL de la imagen en el horario correspondiente en la base de datos
    // Puedes acceder al ID del horario a través de req.body.horarioId o cualquier otro método que utilices

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
