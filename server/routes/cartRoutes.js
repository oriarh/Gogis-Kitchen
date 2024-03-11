const express = require('express');
const router = express.Router();
const { cartSync, fetchCartFromDb, saveOrder } = require('../controllers/cartController');

router.post('/', cartSync);
router.post('/saveOrder', saveOrder);
router.get('/', fetchCartFromDb);

module.exports = router;