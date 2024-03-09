const express = require('express');
const router = express.Router();
const opinionController = require('../controllers/opinionController');


router.post('/', opinionController.createOpinion);
router.get('/', opinionController.getOpinion);
router.get('/:id', opinionController.getOpinionById);
router.put('/:id', opinionController.updateOpinion);
router.delete('/:id', opinionController.deleteOpinion);

module.exports = router;
