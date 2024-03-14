const Promos = require('../models/promosModel');

exports.createPromo = async (req, res) => {
  try {
    const { name, price, duracion, imagen } = req.body;
    const newPromo = new Promos({ name, price, duracion, imagen });
    await newPromo.save();
    res.status(201).send(newPromo);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPromo = async (req, res) => {
  try {
    const promos = await Promos.find();
    res.send(promos);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPromoById = async (req, res) => {
  try {
    const promo = await Promos.findById(req.params.id);
    if (!promo) {
      return res.status(404).send();
    }
    res.send(promo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePromo = async (req, res) => {
  try {
    const { name, price, duracion, imagen } = req.body;
    const promo = await Promos.findByIdAndUpdate(req.params.id, { name, price, duracion, imagen }, { new: true });
    if (!promo) {
      return res.status(404).send();
    }
    res.send(promo);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePromo = async (req, res) => {
  try {
    const promo = await Promos.findByIdAndDelete(req.params.id);
    if (!promo) {
      return res.status(404).send();
    }
    res.send(promo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.uploadImage = async (req, res) => {
  try {
    // Suponiendo que estás utilizando Multer para manejar la carga de archivos en el backend
    // En este punto, req.file contiene la información del archivo subido
    const imageUrl = req.file.path;

    // Aquí debes guardar la URL de la imagen en el promoción correspondiente en la base de datos
    // Puedes acceder al ID del promoción a través de req.body.promoId o cualquier otro método que utilices

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
