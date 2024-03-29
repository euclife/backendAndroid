const express = require('express');

const UserController = require('../Controllers/User');

const router = express.Router();

router.get('/', UserController.getUser);
router.post('/register', UserController.postRegister);
router.post('/login', UserController.postLogin);

module.exports = router;