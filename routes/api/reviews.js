const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/reviews');

router.post('/:id', reviewCtrl.create);
router.get('/:id', reviewCtrl.index);
router.post('/:id', reviewCtrl.addReview);

module.exports = router;