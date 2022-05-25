const express = require('express');
const router = express.Router();
const peopleCtrl = require('../controllers/people');

router.get('/', peopleCtrl.index);

module.exports = router;