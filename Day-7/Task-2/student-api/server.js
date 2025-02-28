require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Mount student routes under "/api"
app.use("/api", studentRoutes);

// Catch-all for unmatched routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
