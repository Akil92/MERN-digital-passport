const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensuredLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.logIn);

router.get('/', usersCtrl.logIn);

router.get('/check-token',ensuredLoggedIn, usersCtrl.checkToken);


module.exports = router;