const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 2000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for frontend integration

// Hardcoded users array
const users = [
  { id: 1, name: "Kaviya" },
  { id: 2, name: "Maguddeeswaran" },
  { id: 3, name: "Gunamathi" },
];

// GET /users - Fetch all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET /users/:id - Fetch user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// POST /users - Add a new user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  // Generate a new unique ID
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name };

  users.push(newUser); // Add user to array

  res.status(201).json({
    message: "User added successfully",
    user: newUser,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

