const mockDb = require('../models/mockDataStore');

module.exports = {
  // PUBLIC_INTERFACE
  getUserProfile: (req, res) => {
    /** Get user profile by userId */
    const { userId } = req.params;
    const profile = mockDb.getProfile(userId);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  },

  // PUBLIC_INTERFACE
  updateUserProfile: (req, res) => {
    /** Update user profile by userId */
    const { userId } = req.params;
    const user = mockDb.getUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const updated = mockDb.updateProfile(userId, req.body);
    res.json(updated);
  }
};
