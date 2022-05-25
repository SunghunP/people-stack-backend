const express = require('express');
const router = express.Router();
const peopleCtrl = require('../controllers/people');

// INDUCES Routes
router.get('/', peopleCtrl.index); // Index Route
router.put('/:id', peopleCtrl.update); // Update Route
router.post('/', peopleCtrl.create); // Create Route

module.exports = router;