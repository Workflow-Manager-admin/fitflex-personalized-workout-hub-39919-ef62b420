const mockDb = require('../models/mockDataStore');

module.exports = {
  // PUBLIC_INTERFACE
  generateWorkoutPlan: (req, res) => {
    /**
     * Generate personalized workout plan for a user.
     * { userId, fitnessLevel }
     */
    const { userId, fitnessLevel } = req.body;
    if (!userId || !fitnessLevel)
      return res.status(400).json({ error: "userId and fitnessLevel required" });
    const user = mockDb.getUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const plan = mockDb.generateWorkoutPlan(userId, fitnessLevel);
    res.json(plan);
  }
};
