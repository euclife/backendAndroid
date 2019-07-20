const express = require('express');

const SoalController = require('../Controllers/soal');
const auth = require('../Configs/auth');

const router = express.Router();

// router.get('/', auth.verifyToken ,SoalController.getAll);
router.get('/init', auth.verifyToken , SoalController.init);
router.get('/', auth.verifyToken , SoalController.soal);


module.exports = router;