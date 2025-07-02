const mockDb = require('../models/mockDataStore');

module.exports = {
  // PUBLIC_INTERFACE
  getProgress: (req, res) => {
    /** Get user workout progress */
    const { userId } = req.params;
    const user = mockDb.getUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const progress = mockDb.getProgress(userId);
    res.json(progress);
  },

  // PUBLIC_INTERFACE
  updateProgress: (req, res) => {
    /** Update user workout progress */
    const { userId } = req.params;
    const user = mockDb.getUserById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const updated = mockDb.updateProgress(userId, req.body);
    res.json(updated);
  }
};
