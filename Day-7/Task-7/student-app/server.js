// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/students", studentRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
