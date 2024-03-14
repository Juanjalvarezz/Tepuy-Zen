const Articles = require('../models/articleModel');

exports.createArticle = async (req, res) => {
  try {
    const { name, price, importance, imagen } = req.body;
    const newArticle = new Articles({ name, price, importance, imagen});
    await newArticle.save();
    res.status(201).send(newArticle);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getArticle = async (req, res) => {
  try {
    const articles = await Articles.find();
    res.send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const articless = await Articles.findById(req.params.id);
    if (!articless) {
      return res.status(404).send();
    }
    res.send(articless);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const { name, price, importance, imagen } = req.body;
    const articless = await Articles.findByIdAndUpdate(req.params.id, { name, price, importance, imagen }, { new: true });
    if (!articless) {
      return res.status(404).send();
    }
    res.send(articless);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const articless = await Articles.findByIdAndDelete(req.params.id);
    if (!articless) {
      return res.status(404).send();
    }
    res.send(articless);
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