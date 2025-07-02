//
// Simple In-Memory Data Store for Development and Testing
// Handles users, profiles, workout plans, and progress data
//

const { v4: uuidv4 } = require('uuid');

const mockStore = {
  users: {},
  profiles: {},
  workoutPlans: {},
  progress: {},
  // Static levels for workout experience
  levels: ['beginner', 'intermediate', 'advanced'],
};

// USER FUNCTIONS

/**
 * PUBLIC_INTERFACE
 * Create a user and returns the userId.
 * @param {Object} userObj { email, password, name }
 * @returns {string} userId
 */
function createUser(userObj) {
  const id = uuidv4();
  mockStore.users[id] = { ...userObj, id };
  return id;
}

/**
 * PUBLIC_INTERFACE
 * Find a user by email (returns the user object or null)
 */
function findUserByEmail(email) {
  return Object.values(mockStore.users).find(u => u.email === email) || null;
}

/**
 * PUBLIC_INTERFACE
 * Get user by Id
 */
function getUserById(userId) {
  return mockStore.users[userId] || null;
}

// PROFILE FUNCTIONS

/**
 * PUBLIC_INTERFACE
 * Get a user's profile
 */
function getProfile(userId) {
  return mockStore.profiles[userId] || null;
}

/**
 * PUBLIC_INTERFACE
 * Update a user's profile (creates if not exists)
 */
function updateProfile(userId, profileObj) {
  mockStore.profiles[userId] = { ...profileObj, userId };
  return mockStore.profiles[userId];
}

// WORKOUT PLAN FUNCTIONS

/**
 * PUBLIC_INTERFACE
 * Generate & store a workout plan for a user (stubbed)
 * Returns the plan.
 */
function generateWorkoutPlan(userId, fitnessLevel) {
  // Mock exercises for week, tailored to fitnessLevel
  const levels = {
    beginner: ['Push-ups', 'Bodyweight Squats', 'Plank', 'Lunges', 'Jumping Jacks'],
    intermediate: ['Bench Press', 'Deadlift', 'Pull-up', 'Barbell Row', 'Mountain Climbers'],
    advanced: ['Clean & Jerk', 'Snatch', 'Muscle-up', 'Pistol Squat', 'Sprints']
  };
  const plan = {
    userId,
    fitnessLevel,
    week: Array.from({ length: 7 }).map((_, dayIdx) => ({
      day: `Day ${dayIdx + 1}`,
      exercise: levels[fitnessLevel]?.[dayIdx % 5] || 'General Cardio',
      sets: 3 + (fitnessLevel === 'advanced' ? 2 : fitnessLevel === 'intermediate' ? 1 : 0),
      reps: 10 + (fitnessLevel === 'advanced' ? 10 : fitnessLevel === 'intermediate' ? 5 : 0),
    }))
  };
  mockStore.workoutPlans[userId] = plan;
  return plan;
}

/**
 * PUBLIC_INTERFACE
 * Get workout plan for a userId
 */
function getWorkoutPlan(userId) {
  return mockStore.workoutPlans[userId] || null;
}

// LEVELS

/**
 * PUBLIC_INTERFACE
 * Get supported levels
 */
function getLevels() {
  return mockStore.levels;
}

// PROGRESS FUNCTIONS

/**
 * PUBLIC_INTERFACE
 * Get user's progress
 */
function getProgress(userId) {
  return mockStore.progress[userId] || { userId, completedWorkouts: 0, notes: '' };
}

/**
 * PUBLIC_INTERFACE
 * Update user's progress
 */
function updateProgress(userId, progressObj) {
  mockStore.progress[userId] = { ...progressObj, userId };
  return mockStore.progress[userId];
}

// Exports
module.exports = {
  // users
  createUser,
  findUserByEmail,
  getUserById,
  // profiles
  getProfile,
  updateProfile,
  // workout plans
  generateWorkoutPlan,
  getWorkoutPlan,
  // levels
  getLevels,
  // progress
  getProgress,
  updateProgress,
};
