const Review = require('../models/reviewModel');

exports.createReview = async (req, res) => {
  try {
    const { name, opinion, puntuacion, habitacion } = req.body;
    const newReview = new Review({ name, opinion, puntuacion, habitacion});
    await newReview.save();
    res.status(201).send(newReview);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getReview = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateReview = async (req, res) => {
  try {
    const { name, opinion, puntuacion, habitacion } = req.body;
    const review = await Review.findByIdAndUpdate(req.params.id, { name, opinion, puntuacion, habitacion }, { new: true });
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).send();
    }
    res.send(review);
  } catch (error) {
    res.status(500).send(error);
  }
};
