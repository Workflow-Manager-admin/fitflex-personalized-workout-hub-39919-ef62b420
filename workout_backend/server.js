const express = require('express');
const cors = require('cors');

// Express app initialization
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/profiles', require('./routes/profileRoutes'));
app.use('/workouts', require('./routes/workoutRoutes'));
app.use('/levels', require('./routes/levelRoutes'));
app.use('/progress', require('./routes/progressRoutes'));

// Healthcheck & fallback
// PUBLIC_INTERFACE
app.get('/', (req, res) => {
  /** Base route for FitFlex backend (healthcheck) */
  res.json({ message: "FitFlex Workout Backend API is up and running!" });
});

// PUBLIC_INTERFACE
app.use((req, res) => {
  /** Handle unrecognized routes (404) */
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🏋️‍♂️ FitFlex workout_backend running on port ${PORT}`);
});
