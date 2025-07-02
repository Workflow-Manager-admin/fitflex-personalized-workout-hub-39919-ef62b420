# FitFlex Workout Backend

This container holds the Express.js API for FitFlex. It provides endpoints for user management, personalized workout plan generation, progress tracking, and more.

---

## Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/)
- (Optional for local DB) MongoDB or relevant DB service, or use the provided mock/in-memory database for development.

### 2. Environment Setup

You must create a `.env` file with the necessary variables before running the server.

1. Copy the example env file:
   ```sh
   cp .env.example .env
   ```
2. Edit `.env` with the values for your environment.

**Key variables:**
- `PORT`: The port the backend server will run on (default: 5000)
- `DB_URL`: Connection string for your primary database provider (MongoDB, etc.)
- `JWT_SECRET`: Secret string for JWT token generation

See `.env.example` for the required format and values.

---

### 3. Install Dependencies

```sh
npm install
```

### 4. Start the Server

```sh
npm start
```
or for development (with auto-reload):
```sh
npm run dev
```
The API will be available at `http://localhost:<PORT>/api/v1`

---

## Mock/In-Memory Database

If the database is not yet available, backend supports a mock or in-memory data setup for development:
- Relevant routes will use a local datastore if `DB_URL` is left blank or points to "mock".
- To use a production database, set `DB_URL` to a MongoDB/PostgreSQL/other provider URI.

*See comments in models or config for switching between mock and real DB.*

---

## Environment Variables Reference

| Variable   | Description                                      | Example Value                |
| ---------- | ------------------------------------------------ | ---------------------------- |
| PORT       | Port to run the backend server                   | 5000                         |
| DB_URL     | Database connection string (or "mock" for dev)   | mongodb://localhost/fitflex  |
| JWT_SECRET | Secret for JWT signing (must be set in prod!)    | changeme_very_secret         |
| CORS_ORIGIN| Allowed origin for frontend API calls            | http://localhost:3000        |

---

## API Reference

All endpoints are prefixed with `/api/v1`. For the latest contract, see the [API documentation](./docs/api-contract.md) or OpenAPI spec.

---

## Container Linking

- Ensure your frontend points to this backend API by setting its `.env`:
  ```
  REACT_APP_API_BASE_URL=http://localhost:5000/api/v1
  ```
- Make sure `CORS_ORIGIN` in backend `.env` matches your frontend URL.

---
