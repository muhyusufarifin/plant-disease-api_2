const express = require('express');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const imageController = require('../controllers/imageController');

const router = express.Router();

// @route   POST /api/images/upload
// @desc    Upload an image
// @access  Private
router.post('/upload', auth, upload, imageController.uploadImage);

// @route   GET /api/images
// @desc    Get all images for the logged-in user
// @access  Private
router.get('/', auth, imageController.getUserImages);

module.exports = router;