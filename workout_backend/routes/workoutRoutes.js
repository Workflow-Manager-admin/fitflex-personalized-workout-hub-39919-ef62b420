const express = require('express');
const router = express.Router();
const { generateWorkoutPlan } = require('../controllers/workoutController');

/**
 * @route POST /workouts
 * @desc Generate a personalized weekly workout schedule
 */
// PUBLIC_INTERFACE
router.post('/', generateWorkoutPlan);

module.exports = router;
