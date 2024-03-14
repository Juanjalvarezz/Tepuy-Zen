const Guias = require('../models/guiasModel');

exports.createGuide = async (req, res) => {
  try {
    const { name, age, experience, imagen, lenguajes, stars } = req.body;
    const newGuide = new Guias({ name, age, experience, imagen, lenguajes, stars });
    await newGuide.save();
    res.status(201).send(newGuide);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getGuide = async (req, res) => {
  try {
    const guides = await Guias.find();
    res.send(guides);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getGuideById = async (req, res) => {
  try {
    const guide = await Guias.findById(req.params.id);
    if (!guide) {
      return res.status(404).send();
    }
    res.send(guide);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateGuide = async (req, res) => {
  try {
    const { name, age, experience, imagen, lenguajes, stars } = req.body;
    const guide = await Guias.findByIdAndUpdate(req.params.id, { name, age, experience, imagen, lenguajes, stars }, { new: true });
    if (!guide) {
      return res.status(404).send();
    }
    res.send(guide);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteGuide = async (req, res) => {
  try {
    const guide = await Guias.findByIdAndDelete(req.params.id);
    if (!guide) {
      return res.status(404).send();
    }
    res.send(guide);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.uploadImage = async (req, res) => {
  try {
      // Suponiendo que estás utilizando Multer para manejar la carga de archivos en el backend
      // En este punto, req.file contiene la información del archivo subido
      const imageUrl = req.file.path;

      // Aquí debes guardar la URL de la imagen en el artículo correspondiente en la base de datos
      // Puedes acceder al ID del artículo a través de req.body.articleId o cualquier otro método que utilices

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
