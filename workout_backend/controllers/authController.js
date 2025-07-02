const mockDb = require('../models/mockDataStore');

module.exports = {
  // PUBLIC_INTERFACE
  registerUser: (req, res) => {
    /**
     * Register a new user.
     * Data: { email, password, name }
     */
    const { email, password, name } = req.body;
    if (!email || !password || !name)
      return res.status(400).json({ error: "Missing fields: email, password, name required." });
    if (mockDb.findUserByEmail(email))
      return res.status(409).json({ error: "Email already registered." });
    const userId = mockDb.createUser({ email, password, name });
    // User auto-created with a blank profile
    mockDb.updateProfile(userId, { name, age: null, fitnessLevel: 'beginner' });
    res.status(201).json({ userId, email, name });
  },

  // PUBLIC_INTERFACE
  loginUser: (req, res) => {
    /**
     * Login a user.
     * Data: { email, password }
     */
    const { email, password } = req.body;
    const user = mockDb.findUserByEmail(email);
    if (!user || user.password !== password)
      return res.status(401).json({ error: "Invalid email or password." });
    // Just return user info for mock (no JWT for dev)
    res.json({ userId: user.id, email: user.email, name: user.name });
  }
};
