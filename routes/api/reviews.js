const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/reviews');

router.get('/:id', reviewCtrl.index);
router.post('/:id', reviewCtrl.addReview);

module.exports = router;