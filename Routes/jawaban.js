const express = require('express');

const JawabanController = require('../Controllers/jawaban');
const auth = require('../Configs/auth');

const router = express.Router();

router.get('/init', auth.verifyToken ,JawabanController.init);
router.get('/', auth.verifyToken ,JawabanController.getAll);
router.get('/find/:id', auth.verifyToken ,JawabanController.findJawaban);

module.exports = router;