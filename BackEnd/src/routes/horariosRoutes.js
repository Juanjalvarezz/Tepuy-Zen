// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const horariosController = require('../controllers/horariosController');

router.post('/horarios', horariosController.createHorario);
router.get('/horarios', horariosController.getHorarios);
router.get('/horarios/:id', horariosController.getHorarioById);
router.delete('/horarios/:id', horariosController.deleteHorario);
router.put('/horarios/:id', horariosController.updateHorario);
router.post('/upload-image', upload.single('imagen'), horariosController.uploadImage);

module.exports = router;
