# FitFlex Workout Backend – REST API Documentation

This document outlines all currently available (stubbed) REST API endpoints for the FitFlex Workout Backend. These endpoints are designed for integration with the frontend to handle user authentication, profile management, workout plan generation, workout level listings, and workout progress tracking.

> **Note:** Implementation of actual data logic is pending; responses are currently static placeholders, but endpoint routes, methods, and payload/response formats are well defined for frontend integration.

## Base URL

    http://<server>:<port>/
    (Locally: http://localhost:3001/)

---

## Table of Contents

- [Healthcheck & Fallback](#healthcheck--fallback)
- [Authentication](#authentication)
    - Register
    - Login
- [User Profile](#user-profile)
    - Get Profile
    - Update Profile
- [Workout Plan](#workout-plan)
    - Generate Workout Plan
- [Workout Levels](#workout-levels)
- [Progress Tracking](#progress-tracking)
    - Get Progress
    - Update Progress
- [Error Handling](#error-handling)

---

## Healthcheck & Fallback

### `GET /`

**Description:**  
Returns a healthcheck message to verify backend availability.

**Response Example:**
```json
{
  "message": "FitFlex Workout Backend API is up and running!"
}
```

---

## Authentication

### `POST /auth/register`

**Description:**  
Register a new user.

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "strongpassword",
  "name": "User Name"
}
```

**Response Example (Stub):**
```json
{
  "message": "User registration not implemented yet."
}
```

---

### `POST /auth/login`

**Description:**  
User login.

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "strongpassword"
}
```

**Response Example (Stub):**
```json
{
  "message": "User login not implemented yet."
}
```

---

## User Profile

### `GET /profiles/:userId`

**Description:**  
Retrieve the profile information for a given user.

**URL Parameter:**  
`userId` – The ID of the requested user.

**Response Example (Stub):**
```json
{
  "message": "Get user profile not implemented yet."
}
```

---

### `PUT /profiles/:userId`

**Description:**  
Update the profile information for a given user.

**URL Parameter:**  
`userId` – The ID of the user to update.

**Request body (example):**
```json
{
  "name": "Updated Name",
  "age": 28,
  "fitnessLevel": "beginner"
}
```

**Response Example (Stub):**
```json
{
  "message": "Update user profile not implemented yet."
}
```

---

## Workout Plan

### `POST /workouts`

**Description:**  
Request the generation of a personalized weekly workout plan.

**Request body (example):**
```json
{
  "userId": "12345",
  "fitnessLevel": "intermediate"
}
```

**Response Example (Stub):**
```json
{
  "message": "Workout plan generation not implemented yet."
}
```

---

## Workout Levels

### `GET /levels`

**Description:**  
Fetch available workout levels (e.g., beginner, intermediate, advanced).

**Response Example (Stub):**
```json
{
  "message": "Workout levels listing not implemented yet."
}
```

---

## Progress Tracking

### `GET /progress/:userId`

**Description:**  
Retrieve the progress tracking for a given user.

**URL Parameter:**  
`userId` – The ID of the requested user.

**Response Example (Stub):**
```json
{
  "message": "Get workout progress not implemented yet."
}
```

---

### `PUT /progress/:userId`

**Description:**  
Update the progress tracking for a user.

**URL Parameter:**  
`userId` – The ID of the user whose progress is being updated.

**Request body (example):**
```json
{
  "completedWorkouts": 4,
  "notes": "Did extra reps in week 2"
}
```

**Response Example (Stub):**
```json
{
  "message": "Update workout progress not implemented yet."
}
```

---

## Error Handling

### Fallback – 404 Route

**Any unmatched route:**
```json
{
  "error": "Route not found"
}
```

---

## Notes for Frontend Integration

- Data formats for requests and responses are expected to follow the examples above.
- All endpoints return a JSON object.
- `userId` should match the value used by authentication/profile management logic.
- Proper authentication/authorization logic will be implemented in future versions.
- Structure of detailed profile, workout plans, and progress responses will be finalized as business logic is fleshed out. The routes and stubs are considered stable for mock integration and UI wiring.

---

## Changelog

- **v0.1.0** – API contract documented for all expected backend routes/endpoints as stubs.

---

**Questions or integration issues?**  
Open an issue in the repository or contact the FitFlex backend team.
