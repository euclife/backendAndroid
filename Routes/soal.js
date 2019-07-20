const express = require('express');

const SoalController = require('../controllers/soal');
const auth = require('../configs/auth');

const router = express.Router();

// router.get('/', auth.verifyToken ,SoalController.getAll);
router.get('/init', auth.verifyToken , SoalController.init);
router.get('/', auth.verifyToken , SoalController.soal);


module.exports = router;