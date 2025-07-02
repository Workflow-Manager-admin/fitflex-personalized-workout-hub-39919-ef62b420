const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');

/**
 * @route GET /profiles/:userId
 * @desc Get user profile
 */
// PUBLIC_INTERFACE
router.get('/:userId', getUserProfile);

/**
 * @route PUT /profiles/:userId
 * @desc Update user profile
 */
// PUBLIC_INTERFACE
router.put('/:userId', updateUserProfile);

module.exports = router;
