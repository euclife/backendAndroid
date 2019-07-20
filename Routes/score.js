const express = require('express');

const ScoreController = require('../Controllers/score');

const router = express.Router();

router.post('/', ScoreController.setNilai);
router.get('/', ScoreController.getNilai);

module.exports = router;