// routes.js
const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const upload = multer({ dest: 'uploads/' }); 

const articleController = require('../controllers/articleController');

router.post('/articles', articleController.createArticle);
router.get('/articles', articleController.getArticle);
router.get('/articles/:id', articleController.getArticleById);
router.delete('/articles/:id', articleController.deleteArticle);
router.put('/articles/:id', articleController.updateArticle);
router.post('/upload-image', upload.single('imagen'), articleController.uploadImage);

module.exports = router;
