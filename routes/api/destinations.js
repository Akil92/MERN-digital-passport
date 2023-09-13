const express = require('express');
const router = express.Router();
const destinationCtrl = require('../../controllers/destinations');

router.post('/', destinationCtrl.create);

router.get('/', destinationCtrl.index);

router.get('/:id',destinationCtrl.getById);



module.exports = router;