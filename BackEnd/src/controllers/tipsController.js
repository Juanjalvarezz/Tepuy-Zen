const Tip = require('../models/tipModel');

exports.createTip = async (req, res) => {
  try {
    const { name, description, imagen } = req.body;
    const newTip = new Tip({ name, description, imagen });
    await newTip.save();
    res.status(201).send(newTip);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getTips = async (req, res) => {
  try {
    const tips = await Tip.find();
    res.send(tips);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTipById = async (req, res) => {
  try {
    const tip = await Tip.findById(req.params.id);
    if (!tip) {
      return res.status(404).send();
    }
    res.send(tip);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTip = async (req, res) => {
  try {
    const { name, description, imagen } = req.body;
    const tip = await Tip.findByIdAndUpdate(req.params.id, { name, description, imagen }, { new: true });
    if (!tip) {
      return res.status(404).send();
    }
    res.send(tip);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteTip = async (req, res) => {
  try {
    const tip = await Tip.findByIdAndDelete(req.params.id);
    if (!tip) {
      return res.status(404).send();
    }
    res.send(tip);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.uploadImage = async (req, res) => {
  try {
    // Suponiendo que estás utilizando Multer para manejar la carga de archivos en el backend
    // En este punto, req.file contiene la información del archivo subido
    const imageUrl = req.file.path;

    // Aquí debes guardar la URL de la imagen en el tip correspondiente en la base de datos
    // Puedes acceder al ID del tip a través de req.body.tipId o cualquier otro método que utilices

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
