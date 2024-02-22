// routes/userRoute.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/signup', userController.signupUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route to update user profile
router.put('/profile', userController.updateProfile);

router.get('/user/:username', userController.getUser);

module.exports = router;
