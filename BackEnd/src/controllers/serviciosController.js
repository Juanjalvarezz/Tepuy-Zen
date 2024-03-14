const Service = require('../models/serviciosModel');

exports.createService = async (req, res) => {
  try {
    const { name, description, imagen } = req.body;
    const newService = new Service({ name, description, imagen });
    await newService.save();
    res.status(201).send(newService);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).send();
    }
    res.send(service);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateService = async (req, res) => {
  try {
    const { name, description, imagen } = req.body;
    const service = await Service.findByIdAndUpdate(req.params.id, { name, description, imagen }, { new: true });
    if (!service) {
      return res.status(404).send();
    }
    res.send(service);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).send();
    }
    res.send(service);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.uploadImage = async (req, res) => {
  try {
    // Suponiendo que estás utilizando Multer para manejar la carga de archivos en el backend
    // En este punto, req.file contiene la información del archivo subido
    const imageUrl = req.file.path;

    // Aquí debes guardar la URL de la imagen en el servicio correspondiente en la base de datos
    // Puedes acceder al ID del servicio a través de req.body.serviceId o cualquier otro método que utilices

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
