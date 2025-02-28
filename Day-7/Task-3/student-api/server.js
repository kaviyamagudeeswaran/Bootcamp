const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
require("dotenv").config();

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", studentRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
