const express = require("express");
const app = express();
const PORT = 7000;

// Hardcoded users array
const users = [
  { id: 1, name: "Kaviya" },
  { id: 2, name: "Magudeeswaran" },
  { id: 3, name: "Gunamathi" },
];

// Endpoint to get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Parameterized endpoint: Get a user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); // Convert ID from string to number
  const user = users.find((u) => u.id === userId); // Find user by ID

  if (user) {
    res.json(user); // Send user data if found
  } else {
    res.status(404).json({ error: "User not found" }); // Return 404 if user doesn't exist
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
