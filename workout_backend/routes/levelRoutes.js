const express = require('express');
const router = express.Router();
const { getWorkoutLevels } = require('../controllers/levelController');

/**
 * @route GET /levels
 * @desc List all available workout levels
 */
// PUBLIC_INTERFACE
router.get('/', getWorkoutLevels);

module.exports = router;
