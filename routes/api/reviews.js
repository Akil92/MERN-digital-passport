const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/reviews');

router.post('/:id', reviewCtrl.create);

module.exports = router;