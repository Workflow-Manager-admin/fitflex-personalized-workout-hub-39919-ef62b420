const mockDb = require('../models/mockDataStore');

module.exports = {
  // PUBLIC_INTERFACE
  getWorkoutLevels: (req, res) => {
    /** List all workout levels */
    const levels = mockDb.getLevels();
    res.json({ levels });
  }
};
