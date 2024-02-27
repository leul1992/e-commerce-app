// routes/userRoute.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/signup', userController.signupUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route for logout
router.get('/logout', userController.logout);

//Route to get user profile
router.get('/getUserData', userController.getDataFromToken)

module.exports = router;
