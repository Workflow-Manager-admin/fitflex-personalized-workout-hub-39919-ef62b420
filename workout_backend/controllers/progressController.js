module.exports = {
  // PUBLIC_INTERFACE
  getProgress: (req, res) => {
    /** Get user workout progress (Stub) */
    // TODO: Implement fetching user's progress
    res.status(501).json({ message: "Get workout progress not implemented yet." });
  },

  // PUBLIC_INTERFACE
  updateProgress: (req, res) => {
    /** Update user workout progress (Stub) */
    // TODO: Implement updating user's progress
    res.status(501).json({ message: "Update workout progress not implemented yet." });
  }
};
