// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const habitacionesController = require('../controllers/HabitacionesController');

router.post('/habitaciones', habitacionesController.createHabitacion);
router.get('/habitaciones', habitacionesController.getHabitacion);
router.get('/habitaciones/:id', habitacionesController.getHabitacionById);
router.delete('/habitaciones/:id', habitacionesController.deleteHabitacion);
router.put('/habitaciones/:id', habitacionesController.updateHabitacion);
router.post('/upload-image', upload.single('imagen'), habitacionesController.uploadImage);

module.exports = router;
