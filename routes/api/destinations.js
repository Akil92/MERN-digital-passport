const express = require('express');
const router = express.Router();
const destinationCtrl = require('../../controllers/destinations');

router.post('/', destinationCtrl.create);
router.get('/', destinationCtrl.index);


module.exports = router;