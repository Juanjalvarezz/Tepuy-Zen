const Opinion = require('../models/opinionModel');

exports.createOpinion = async (req, res) => {
  try {
    const { name, opinion, puntuacion } = req.body;
    const newOpinion = new Opinion({ name, opinion, puntuacion});
    await newOpinion.save();
    res.status(201).send(newOpinion);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOpinion = async (req, res) => {
  try {
    const opinions = await Opinion.find();
    res.send(opinions);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOpinionById = async (req, res) => {
  try {
    const opinionn = await Opinion.findById(req.params.id);
    if (!opinionn) {
      return res.status(404).send();
    }
    res.send(opinionn);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOpinion = async (req, res) => {
  try {
    const { name, opinion, puntuacion } = req.body;
    const opinionn = await Opinion.findByIdAndUpdate(req.params.id, { name, opinion, puntuacion }, { new: true });
    if (!opinionn) {
      return res.status(404).send();
    }
    res.send(opinionn);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteOpinion = async (req, res) => {
  try {
    const opinionn = await Opinion.findByIdAndDelete(req.params.id);
    if (!opinionn) {
      return res.status(404).send();
    }
    res.send(opinionn);
  } catch (error) {
    res.status(500).send(error);
  }
};
