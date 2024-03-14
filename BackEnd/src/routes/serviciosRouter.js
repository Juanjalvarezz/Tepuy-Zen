// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const serviciosController = require('../controllers/serviciosController');

router.post('/servicios', serviciosController.createService);
router.get('/servicios', serviciosController.getServices);
router.get('/servicios/:id', serviciosController.getServiceById);
router.delete('/servicios/:id', serviciosController.deleteService);
router.put('/servicios/:id', serviciosController.updateService);
router.post('/upload-image', upload.single('imagen'), serviciosController.uploadImage);

module.exports = router;
