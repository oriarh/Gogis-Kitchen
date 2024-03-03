const express = require('express');
const router = express.Router();
const { cartSync,fetchCartFromDb } = require('../controllers/cartController');

router.post('/', cartSync);
router.get('/', fetchCartFromDb);

module.exports = router;