// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const tipController = require('../controllers/tipsController');

router.post('/tips', tipController.createTip);
router.get('/tips', tipController.getTips);
router.get('/tips/:id', tipController.getTipById);
router.delete('/tips/:id', tipController.deleteTip);
router.put('/tips/:id', tipController.updateTip);
router.post('/upload-image', upload.single('imagen'), tipController.uploadImage);

module.exports = router;
