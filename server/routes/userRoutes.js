const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/registrationController');
const { loginUser, logoutUser } = require('../controllers/loginController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;