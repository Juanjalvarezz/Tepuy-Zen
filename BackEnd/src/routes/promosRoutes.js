// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const promosController = require('../controllers/promosController');

router.post('/promos', promosController.createPromo);
router.get('/promos', promosController.getPromo);
router.get('/promos/:id', promosController.getPromoById);
router.delete('/promos/:id', promosController.deletePromo);
router.put('/promos/:id', promosController.updatePromo);
router.post('/upload-image', upload.single('imagen'), promosController.uploadImage);

module.exports = router;
