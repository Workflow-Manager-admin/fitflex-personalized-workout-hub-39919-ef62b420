const express = require('express');
const router = express.Router();
const {
  getProgress,
  updateProgress
} = require('../controllers/progressController');

/**
 * @route GET /progress/:userId
 * @desc Get user workout progress
 */
// PUBLIC_INTERFACE
router.get('/:userId', getProgress);

/**
 * @route PUT /progress/:userId
 * @desc Update user workout progress
 */
// PUBLIC_INTERFACE
router.put('/:userId', updateProgress);

module.exports = router;
