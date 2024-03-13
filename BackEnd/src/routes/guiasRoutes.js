// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const guiasController = require('../controllers/guiasController');

router.post('/guias', guiasController.createGuide);
router.get('/guias', guiasController.getGuide);
router.get('/guias/:id', guiasController.getGuideById);
router.delete('/guias/:id', guiasController.deleteGuide);
router.put('/guias/:id', guiasController.updateGuide);
router.post('/upload-image', upload.single('imagen'), guiasController.uploadImage);

module.exports = router;
