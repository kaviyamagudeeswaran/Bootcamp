const express = require("express");
const app = express();
const PORT = 4000;

// Hardcoded users array
const users = [
  { id: 1, name: "Kaviya" },
  { id: 2, name: "Magudeeswaran" },
];

// API Endpoint - GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
