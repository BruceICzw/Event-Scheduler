const express = require('express')
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

//Get user profile
router.get('/profile', authMiddleware.userAuth, userController.getProfile);


//UPDATE user profile
router.put('/profile', authMiddleware.userAuth, userController.updateProfile);

//DELETE user profile
router.delete('/delete/:id', authMiddleware.userAuth, userController.deleteProfile)


module.exports = router